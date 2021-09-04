const mongoose = require('mongoose');
const config = require('./config');

const createMongoDBConnection =()=>{
    mongoose.connect(config.newsDBURL);
}

const getMongoDBConnection =() =>{
    return mongoose.connection
}

module.exports={
    createMongoDBConnection,
    getMongoDBConnection
}