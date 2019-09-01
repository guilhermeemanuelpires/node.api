const express = require('express');
const personRoute = require('./cidade.router');
const statesRoute = require('./estado.router');

const routes = new express.Router();

routes.use('/cidade',personRoute);
routes.use('/estado',statesRoute);

module.exports = routes;    