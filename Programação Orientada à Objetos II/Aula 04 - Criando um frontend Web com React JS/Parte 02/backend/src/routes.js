const express = require('express');
var mySQL = require('mysql');

const authConfig = require('./config/auth');
const routes = express.Router();

var connection = mySQL.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Joseffe@123',
    database: 'db_agenda_contato'
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected to MySQL Server!");
});

routes.get("/contatos", function (req, res) {
    connection.query('select * from tb_contato a inner join tb_telefone b on (a.id = b.id_contato)', function (err, rows, fields) {
        if (!err)
            res.status(200).json(rows);
        else
            res.status(400).json(err);
    })
});

routes.get("/contatos/:id", function (req, res) {
    connection.query('select * from tb_contato where id = ? order by id', [req.params.id], function (err, rows, fields) {
        if (!err)
            res.status(200).json(rows);
        else
            res.status(400).json(err);
    })
});

routes.post("/contatos", function (req, res) {
    connection.query('insert tb_contato set ?', req.body, function (err, rows, fields) {
        if (!err)
            res.status(201).json('Registro ' + rows.insertId + ' inserido com sucesso');
        else
            res.status(400).json(err);
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

routes.delete("/contatos/:id", function (req, res) {
    connection.query('delete from tb_contato where id = ?', [req.params.id], function (err, rows, fields) {
        if (!err)
            res.status(200).json(rows);
        else
            res.status(400).json(err);
    })
});

routes.put("/contatos/:id", function (req, res) {
    connection.query('update tb_contato set ? where id = ?', [req.body, req.params.id], function (err, rows, fields) {
        if (!err)
            res.status(200).json(rows);
        else
            res.status(400).json(err);
    })
});

routes.post("/authenticate", async function (req, res) {
    const { user, password } = req.body;

    connection.query('select id, login, login_password from tb_login where login = ?', user, function (err, rows, fields) {
        if (err)
            res.status(400).json(err);
        else
            if (rows.length == 0)
                res.status(400).json({ error: 'Login não encontrado!' });
            else
                if (password != rows[0].login_password)
                    res.status(400).json({ error: 'Senha inválida!' });
                else {
                    res.status(200).send({
                        rows,
                        token: generateToken({ id: rows.id }),
                    });
                }
    })
});

module.exports = routes;