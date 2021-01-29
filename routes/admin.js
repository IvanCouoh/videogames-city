var express = require('express');
var router = express.Router();
var db = require('../public/conexion/conexion')

//Listado de registros
router.get('/', function (req, res, next) {

    db.query('select id,description,title,image from tblgames where status=0', function (error, result) {
        if (error) {
            console.log('error en el listado');
            return;
        }
        res.render('admin', { title: 'Admin', articulos: result });
    });
});
 
router.get('/autorizar/:id', function(req, res, next) {
  const { id } = req.params;
  db.query("UPDATE tblgames SET status='1' WHERE id = ?", [id] ,function(err, resultados){
      res.redirect('/admin');
  });
});


router.get('/rechazar/:id', function(req, res, next) {
  const { id } = req.params;
  db.query("UPDATE tblgames SET status='2' WHERE id = ?", [id] ,function(err, resultados){
      res.redirect('/admin');
  });
});


module.exports = router;
