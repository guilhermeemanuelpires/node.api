const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const connection = require('./mysql-connection');

const app = express();

app.use(bodyParser.json());

app.use(routes);

connection.connect((error) => {
    if (error) {
        console.error('Erro: %s', error.message);
        return;
    }
    const appServer = app.listen(3000, () => {
        console.log('Aplicação mvc-pedido está rodando na porta %s', appServer.address().port);
    });
});