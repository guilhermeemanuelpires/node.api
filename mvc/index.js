const express = require('express');
const bodyParser = require('body-parser');

const routes = require('./routes');

const app = express();

//Adiciona Body-Parser
app.use(bodyParser.json());

// ARQUIVO DE MAPEAMNTO DE ROTAS
app.use(routes);

const appServer = app.listen(3000, () => {
    console.log('serviço : online \nporta : %s', appServer.address().port);
});