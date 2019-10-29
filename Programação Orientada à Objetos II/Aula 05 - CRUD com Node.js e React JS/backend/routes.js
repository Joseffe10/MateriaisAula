const express = require('express');
const mysql = require('mysql');

const routes = express.Router();

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Joseffe@123',
    database: 'db_pim'
});

connection.connect((err) => {
    if (err)
        throw err.sqlMessage;
    console.log('Conectado ao Banco de Dados MySQL');
});

routes.get('/veiculos', (req, res) => {
    connection.query('select id, nome, ano from tb_veiculo', (err, rows, fields) => {
        if (!err)
            res.status(200).json(rows);
        //res.send(JSON.stringify(rows));
        else
            res.status(400).json(rows);
    })
});

routes.get('/veiculos/:id', (req, res) => {
    connection.query('select id, nome, ano from tb_veiculo where id = ?', [req.params.id], (err, rows, fields) => {
        if (!err)
            res.status(200).json(rows);
        else
            res.status(400).json(rows);
    })
});

routes.post("/veiculos", function (req, res) {
    connection.query('insert tb_veiculo set ?', req.body, function (err, rows, fields) {
        if (!err)
            res.status(200).json(rows);
        else
            res.status(400).json(err);
    })
});

routes.put("/veiculos/:id", function (req, res) {
    connection.query('update tb_veiculo set ? where id = ?', [req.body, req.params.id], function (err, rows, fields) {
        if (!err)
            res.status(200).json(rows);
        else
            res.status(400).json(err);
    })
});

routes.delete("/veiculos/:id", function (req, res) {
    connection.query('delete from tb_veiculo where id = ?', [req.params.id], function (err, rows, fields) {
        if (!err)
            res.status(200).json(rows);
        else
            res.status(400).json(err);
    })
});

module.exports = routes;