const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema =new Schema({
   
    name :{
        type :String,//data type
        required: true, //validate
    },
    email:{
        type:String,//dataType
        required:true,//validate
    },
    address:{
        type: String,
        required:true,
    },
    phoneNumber:{
        type:String,
        required:true,
    },
    password:{
        type: String,
        required:true,
    },



});

module.exports = mongoose.model(

    "StudentModel",//file name
    studentSchema//function name

);