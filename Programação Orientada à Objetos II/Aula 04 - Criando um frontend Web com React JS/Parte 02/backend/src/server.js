const express = require('express');
const routes = require('./routes');

const server = express();

server.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

server.use(express.json());
server.use(routes);

server.listen(3333, function () {
    console.log("Server is running");
});