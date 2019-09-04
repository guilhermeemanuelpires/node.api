const express = require('express');
const routes = express.Router();
const itempedidoController = require('../controller/itempedido.controller');

routes.get('/', itempedidoController.find);
routes.post('/', itempedidoController.create);
routes.get('/:id([0-9]+)', itempedidoController.findById);
routes.put('/:id([0-9]+)', itempedidoController.update);
routes.delete('/:id([0-9]+)',itempedidoController.delete);

module.exports = routes;