var express = require('express');
var router = express.Router();
var db = require('../public/conexion/conexion');

//Listado de videojuego para el usuario
router.get('/', function (req, res, next) {
  db.query('SELECT id,description,recommets,title,image FROM tblgames WHERE status=1 ORDER BY recommets DESC', function (error, filas) {
    if (error) {
      res.render('index', { articulos: filas });
      return;
    }
    res.render('index', { articulos: filas });
  });
});

module.exports = router;
