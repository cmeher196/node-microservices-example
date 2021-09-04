const express = require('express');
const app = express();
const routes = require('./api/routes');
const cors = require('cors');
const bodyparser = require('body-parser');

app.use(cors())
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
  });

app.use('/',routes);

module.exports = app;