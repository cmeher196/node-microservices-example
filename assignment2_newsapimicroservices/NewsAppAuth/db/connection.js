const mongoose = require('mongoose');
const userDBUrl = require('../../NewsAPPDB/dB/config');

const createConnection =() =>{
    mongoose.connect(userDBUrl.userDBURL);
}

const getConnection = () =>{
    return mongoose.connection;
}

module.exports={
    createConnection,
    getConnection
}
