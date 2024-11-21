const mongoose = require('mongoose');

// Define the Student schema
const studentSchema = new mongoose.Schema({
    name:String,
     
    rollno:String,
       
    batch:Number,
    
    collegeName:String
});

// Create the Student model
const studentModel = mongoose.model('Student', studentSchema);

module.exports = studentModel;
