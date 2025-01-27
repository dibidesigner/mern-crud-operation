const mongoose = require('mongoose')

const userField = new mongoose.Schema({
    fname : String,
    lname : String,
    email : String,
    password: String,
});

const userModel = mongoose.model('userData', userField);


module.exports=userModel;