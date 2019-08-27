const express = require('express');
const personRoute = require('./person.router');
const statesRoute = require('./states.router');

const routes = new express.Router();

routes.use('/persons',personRoute);
routes.use('/states',statesRoute);

module.exports = routes;
