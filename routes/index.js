var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
<<<<<<< HEAD
  res.render('sadmin',{ title: 'Historial de visitas' });
=======
<<<<<<< HEAD
  res.render('login');
=======
  res.render('admin',{ title: 'Historial de visitas' });
>>>>>>> 46d8b53fc22c979ca2362da50f7c6c8f54ff563f
>>>>>>> b3ec2af95f7337927301fd184fc88fc2b8b010fd
});
router.get('/login', function(req, res, next) {
  res.render('admin',{ title: 'Historial de visitas' });
});
router.get('/login', function(req, res, next) {
  res.render('user',{ title: 'Registro de usuarios y administradores' });
});


module.exports = router;
