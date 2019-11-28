var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
<<<<<<< HEAD
  res.render('login');
=======
  res.render('admin',{ title: 'Historial de visitas' });
>>>>>>> 46d8b53fc22c979ca2362da50f7c6c8f54ff563f
});
router.get('/login', function(req, res, next) {
<<<<<<< HEAD
  res.render('admin',{ title: 'Historial de visitas' });
});
router.get('/login', function(req, res, next) {
  res.render('user',{ title: 'Registro de usuarios y administradores' });
=======
  res.render('login');
>>>>>>> 4ccc5ed459f9d909a05b654d3b97b2f3e815bcd6
});


module.exports = router;
