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

module.exports = router;
