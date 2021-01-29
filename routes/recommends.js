var express = require('express');
var router = express.Router();
var db = require('../public/conexion/conexion');

//Alta de registros
router.get('/', function (req, res, next) {
    res.render('recommends');
  });
  
  router.post('/', function (req, res, next) {
    var registro = {
      description: req.body.description,
      title: req.body.title,
      image: req.body.image
    };
    db.query('insert into tblgames set ?', registro, function (error, resultado) {
      if (error) {
        console.log(error);
        return;
      }
      console.log(registro);
    });
    res.render('recommends', { mensaje: 'La carga se efectuo correctamente', lista: registro });
    console.log('La carga se efectuo correctamente');
  });
  

module.exports = router;
