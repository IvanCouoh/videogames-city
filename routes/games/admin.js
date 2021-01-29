var express = require('express');
var router = express.Router();
var db = require('../public/conexion/conexion')

//Listado de registros
router.get('/', function (req, res, next) {

    db.query('select id,title,description,image from tblgames', function (error, result) {
        if (error) {
            console.log('error en el listado');
            return;
        }
        res.render('admin', { title: 'Admin', lista: result });
    });
});

module.exports = router;
