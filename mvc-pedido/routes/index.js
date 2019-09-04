const express = require('express');
const clienteRoute = require('./cliente.router');
const vendedorRoute = require('./vendedor.router');
const produtoRoout = require('./produto.router');

const routes = new express.Router();

routes.use('/cliente', clienteRoute);
routes.use('/vendedor', vendedorRoute);
routes.use('/produto', produtoRoout);

module.exports = routes;    