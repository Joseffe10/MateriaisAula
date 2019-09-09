var mySQL = require('mysql');

var connection = mySQL.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Joseffe@123'
});

connection.connect(function(err){
    if(err) throw err;
    console.log("Connected!");
});