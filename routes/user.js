var express = require('express');
var router = express.Router();
const bcrypt = require('bcryptjs');
const passport = require ('passport');
const userController = require("../controllers/UserController");
const { forwardAuthenticated } = require('../config/auth');




router.get("/", userController.getUser);
router.post("/", userController.insert);
router.get("/:id", userController.getOneUser);
router.put('/:id', userController.update);
router.delete('/:id', userController.deleteById);

// Login Page
router.get('/login', forwardAuthenticated, (req, res) => res.render('login'));
// Register Page
router.get('/register', forwardAuthenticated, (req, res) => res.render('register'));


router.post('/register', (req, res) => {
    const { name, email, password, password2 } = req.body;
    let errors = [];
  
    if (!name || !email || !password || !password2) {
      errors.push({ msg: 'Por favor introduzca todos los campos' });
    }
  
    if (password != password2) {
      errors.push({ msg: 'Las contraseñas no coinciden' });
    }
  
    if (password.length < 6) {
      errors.push({ msg: 'La contraseña debe ser por lo menos de 6 digitos' });
    }
  
    if (errors.length > 0) {
      res.render('register', {
        errors,
        name,
        email,
        password,
        password2
      });
    } else {
      User.findOne({ email: email }).then(user => {
        if (user) {
          errors.push({ msg: 'Email ya existe' });
          res.render('register', {
            errors,
            name,
            email,
            password,
            password2
          });
        } else {
          const newUser = new User({
            name,
            email,
            password
          });
  
          bcrypt.genSalt(10, (err, salt) => {
            bcrypt.hash(newUser.password, salt, (err, hash) => {
              if (err) throw err;
              newUser.password = hash;
              newUser
                .save()
                .then(user => {
                  req.flash(
                    'success_msg',
                    'Usuario registrado con exito'
                  );
                  res.redirect('/users/login');
                })
                .catch(err => console.log(err));
            });
          });
        }
      });
    }
  });

//login
router.post('/login', (req, res, next) => {
    passport.authenticate('local', {
      successRedirect: '/dashboard',
      failureRedirect: '/users/login',
      failureFlash: true
    })(req, res, next);
  });

//logout
router.get('/logout', (req, res) => {
    req.logout();
    req.flash('success_msg', 'Usted se ha deslogueado');
    res.redirect('/users/login');
  });

module.exports = router;