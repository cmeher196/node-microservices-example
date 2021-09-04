const bodyparser = require('body-parser');
const express = require('express');
const app = express();
const dbConnection = require('./db')

// app.use('/auth',router)
dbConnection.createConnection();
const db = dbConnection.getConnection()
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}));
app.use('/auth', require('./auth'));


module.exports=app