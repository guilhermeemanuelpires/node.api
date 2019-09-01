//instancia a aplicação
const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const connection = require('./mysql-connection');

const app = express();

//Adiciona Body-Parser
app.use(bodyParser.json());

//Adiciona o arquivo de mapeamento de rotass
app.use(routes);

//Tenta conectar com o banco de dados
const appServer = app.listen(3000, () => {
    console.log('Aplicação está rodando na porta %s', appServer.address().port);
});
