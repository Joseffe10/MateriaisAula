const express = require('express');
const routes = require('./routes')
const cors = require('cors');

const server = express();
server.use(express.json());
server.use(cors());

server.use(routes);

server.listen(3333, function () {
    console.log('Servidor Node em execução...')
});