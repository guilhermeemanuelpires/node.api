/* 
Professor neste trabalho, na implementação do TDD consegue identificar algumas falhas que 
tinha cometido no desenvolvimento do trabalho, assim com a implementação do TDD, realizei 
a correção e ajuste do código, visto que na emoção de ir embora eu a acabei apagando sem 
querer duas linhas importantes do meu arquivo “Main”.
var app = express('bodyParser');
var bodyParser = require('body-parser');
*/

var express = require('express');
var app = express('bodyParser');
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
var ItemsRoutes = require('./router/items');

app.use('/items', ItemsRoutes);

app.listen(3000, function () {
    console.log('Este serviço esta rodando na prota 3000!');
});


module.exports = app;