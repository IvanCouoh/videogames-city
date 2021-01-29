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
    'title varchar(200)' +
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


//Alta de registros
router.get('/alta', function (req, res, next) {
  res.render('altaarticulos');
});


router.post('/alta', function (req, res, next) {
  var registro = {
    description: req.body.description,
    title: req.body.title,
    image: req.body.image
  };
  bd.query('insert into tblgames set ?', registro, function (error, resultado) {
    if (error) {
      console.log(error);
      return;
    }
    console.log(registro);
  });
  res.render('mensajearticulos', { mensaje: 'La carga se efectuo correctamente', lista: registro });
  console.log('La carga se efectuo correctamente');
});


//Listado de registros
router.get('/listado', function (req, res, next) {
  bd.query('select id,description,title,image from tblgames', function (error, filas) {
    if (error) {
      console.log('error en el listado');
      return;
    }
    res.render('listararticulos', { articulos: filas });
  });
});


//Consulta
router.get('/consulta', function (req, res, next) {
  res.render('consultaarticulos');
});


router.post('/consulta', function (req, res, next) {
  bd.query('select description,title,recommends,image from tblgames where title=?', req.body.title, function (error, filas) {
    if (error) {
      console.log('error en la consulta');
      return;
    }
    if (filas.length > 0) {
      res.render('listadoconsulta', { articulos: filas });
    } else {
      // res.render('mensajearticulos', { mensaje: 'No existe el codigo de articulo ingresado' });
      console.log('No existe el codigo de articulo ingresado');
    }
  });
});


//Modificacion
router.get('/modificacion', function (req, res, next) {
  res.render('consultamodificacion');
});


router.post('/modificar', function (req, res, next) {
  bd.query('select id,description,title,image from tblgames where id=?', req.body.id, function (error, filas) {
    if (error) {
      console.log('error en la consulta');
      return;
    }
    if (filas.length > 0) {
      res.render('formulariomodifica', { articulos: filas });
    } else {
      // res.render('mensajearticulos', { mensaje: 'No existe el codigo de articulo ingresado' });
      console.log('No existe el codigo de articulo ingresado');
    }
  });
});


router.post('/confirmarmodifica', function (req, res, next) {
  var registro = {
    description: req.body.description,
    title: req.body.title,
    image: req.body.image
  };
  bd.query('UPDATE tblgames SET ? WHERE ?', [registro, { id: req.body.id }], function (error, filas) {
    if (error) {
      console.log('error en la consulta');
      console.log(error);
      return;
    }
    // res.render('mensajearticulos', { mensaje: 'El articulo fue modificado' });
    console.log('El articulo fue modificado');
  });
});


module.exports = router;
