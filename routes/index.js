var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('admin',{ title: 'Historial de visitas' });
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
