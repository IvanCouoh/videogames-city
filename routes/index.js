var express = require('express');
var router = express.Router();
var db = require('../public/conexion/conexion');

//Listado de videojuego para el usuario
router.get('/', function (req, res, next) {
  db.query('select id,description,recommends,title,image from tblgames where status=1 ORDER BY recommends DESC', function (error, filas) {
    if (error) {
      console.log('error en el listado');
      return;
    }
    res.render('index', { articulos: filas });
  });
});

module.exports = router;
