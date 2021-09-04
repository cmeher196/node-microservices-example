const express = require('express');
const app = express();
const routes = require('./api/routes');


app.use('/',routes);

module.exports = app;