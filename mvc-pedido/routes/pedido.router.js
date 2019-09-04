const express = require('express');
const routes = express.Router();
const pedidoController = require('../controller/pedido.controller');

routes.get('/', pedidoController.find);
routes.post('/', pedidoController.create);
routes.get('/:id([0-9]+)', pedidoController.findById);
routes.put('/:id([0-9]+)', pedidoController.update);
routes.delete('/:id([0-9]+)',pedidoController.delete);

module.exports = routes;