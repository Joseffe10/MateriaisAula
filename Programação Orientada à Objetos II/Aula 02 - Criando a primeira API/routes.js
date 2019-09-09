const express = require('express');

const routes = express.Router();

const data = require("./bancoDadosContato.json");

routes.get("/contatos", function(req, res){
    res.json(data);
});

routes.get("/contatos/:id", function(req, res){
    const { id } = req.params;
    const client = data.find(cli => cli.id == id);

    res.json(client);
});

module.exports = routes;