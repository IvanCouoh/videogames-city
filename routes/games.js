var express = require('express');
var router = express.Router();

var bd = require('../public/conexion/conexion');

//Creación de la tabla
router.get('/creartabla', function (req, res, next) {
  bd.query('drop table if exists tblgames', function (error, resultado) {
    if (error) {
      console.log(error);
      return;
    }
  });
  bd.query('create table tblgames (' +
    'id int primary key auto_increment,' +
    'title varchar(5000)' +
    'description text,' +
    'image varchar(5000) ' +
    ')', function (error, resultado) {
      if (error) {
        console.log(error);
        return;
      }
    });
  // res.render('mensajearticulos', { mensaje: 'La tabla se creo correctamente.' });
  console.log('La tabla se creo correctamente.');
});

module.exports = router;
