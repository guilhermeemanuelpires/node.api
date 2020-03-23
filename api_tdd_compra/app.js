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