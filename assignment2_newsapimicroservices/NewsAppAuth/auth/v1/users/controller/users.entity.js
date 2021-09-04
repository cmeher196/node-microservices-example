const mongoose = require('mongoose');


const Schema = mongoose.Schema;

const userSchema = new Schema({
    userId :{
        type:String, require : true
    },
    userName: {
        type: String, require: true
    },
    fullName: {
        type: String, require: true
    },
    emailID: {
        type: String, require: true, unique: true
    },
    password: {
        type: String, require: true
    },
    mobile: {
        type: String, require: true
    }
});

module.exports=mongoose.model('user',userSchema)