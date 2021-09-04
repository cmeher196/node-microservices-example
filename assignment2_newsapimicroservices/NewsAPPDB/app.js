const express = require('express');
const app = express()
const router = require('./api/router');
const dbConnection = require('./dB/connection');



app.use('/api', router)
dbConnection.createMongoDBConnection()
let connection = dbConnection.getMongoDBConnection()
module.exports = app