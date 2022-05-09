var mysql=require('mysql');

var conexion=mysql.createConnection({
    host:'ba4o2l21qdwrxgudap1a-mysql.services.clever-cloud.com',
    user:'ufih4tichlwxvkt9',
    password:'99H12Ri4yhc72poro99j',
    database:'ba4o2l21qdwrxgudap1a'
});

conexion.connect(function (error){
    if (error)
        console.log('Problemas de conexion con mysql');
    else
        console.log('se inicio conexion');
});


module.exports=conexion;


// var mysql = require('mysql');
// var connection = mysql.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: '',
//     database: 'videogame'
// });

// connection.connect(
//     (err) => {
//         if (!err) {
//             console.log('Conexión exitosa');
//         } else {
//             console.log('Conexión no exitosa', err);
//         }
//     }
// );

// module.exports = connection;

// connection.query('SELECT * FROM tblproducts', function (err, res) {
//     console.log(res);
// });

// connection.end();