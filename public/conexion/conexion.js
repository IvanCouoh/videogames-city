var mysql=require('mysql');

var conexion=mysql.createConnection({
    host:'bfsjlxhv01mtogsv1lhq-mysql.services.clever-cloud.com',
    user:'udtjexhtguzaahna',
    password:'OhpUqiJjZpzP8FMG8lTw',
    database:'bfsjlxhv01mtogsv1lhq'
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