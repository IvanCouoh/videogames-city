var express = require('express');
var router = express.Router();
var db = require('../public/conexion/conexion');

//Consulta
router.get('/', function (req, res, next) {
    res.render('search');
  });
  
  router.post('/', function (req, res, next) {
    db.query('select description,title,recommends,image from tblgames where title=?', req.body.title, function (error, filas) {
      if (error) {
        console.log('error en la consulta');
        return;
      }
      if (filas.length > 0) {
        res.render('resultSearch', { games: filas });
      } else {
        res.render('errorSearch', { mensaje: 'No existe el videojuego ingresado' });
        console.log('No existe el codigo de articulo ingresado');
      }
    });
  });
  

module.exports = router;