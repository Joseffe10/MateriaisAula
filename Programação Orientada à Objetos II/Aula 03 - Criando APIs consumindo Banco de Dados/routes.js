const express = require('express');
var mySQL = require('mysql');

const routes = express.Router();

var connection = mySQL.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Joseffe@123',
    database: 'db_agenda_contato'
});

connection.connect(function(err){
    if(err) throw err;
    console.log("Connected to MySQL Server!");
});

routes.get("/contatos", function(req, res){
    connection.query('select * from tb_contato', function(err, rows, fields){
        if (!err)
            res.json(rows);
        else
            res.json(err);
    })
});

routes.get("/contatos/:id", function(req, res){
    connection.query('select * from tb_contato where id = ?', [req.params.id], function(err, rows, fields){
        if (!err)
            res.json(rows);
        else
            res.json(err);        
    })
});

routes.post("/contatos", function(req, res){
    connection.query('insert tb_contato set ?', req.body, function(err, rows, fields){
        if (!err)
            res.json(rows);
        else
            res.json(err);
    })

/*
    connection.query('insert tb_contato (nome, telefone, email) values (?, ?, ?)', [req.body.nome, req.body.telefone, req.body.email], function(err, rows, fields){
        if (!err)
            res.json(rows);
        else
            res.json(err);
    })
*/
});

routes.delete("/contatos", function(req, res){
    connection.query('delete from tb_contato where id = ?', [req.body.id], function(err, rows, fields){
        if(!err)
            res.json(rows);
        else
            res.json(err);
    })
});

routes.put("/contatos/:id", function(req, res){
    connection.query('update tb_contato set ? where id = ?', [req.body, req.params.id], function(err, rows, fields){
        if (!err)
            res.json(rows);
        else
            res.json(err);
    })
});

module.exports = routes;