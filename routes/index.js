var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('sadmin',{ title: 'Historial de visitas' });
});
router.get('/login', function(req, res, next) {
  res.render('admin',{ title: 'Historial de visitas' });
});
router.get('/login', function(req, res, next) {
  res.render('user',{ title: 'Registro de usuarios y administradores' });
});


module.exports = router;
