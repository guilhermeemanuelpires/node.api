const express = require('express');
const statesRoute = require('./estado.router');

const routes = new express.Router();

routes.use('/estado', statesRoute);


module.exports = routes;    