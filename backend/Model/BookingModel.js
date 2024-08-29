const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
    name:{
        type:String,//dataType
        required:true,//validate
    },
   packagename:{
        type:String,//dataType
        required:true,//validate
    },
    email:{
        type:String,//dataType
        required:true,//validate
    },
    mobileno:{
        type:Number,//dataType
        required:true,//validate
    },
    
    address:{
        type:String,//dataType
        required:true,//validate
    }
});

module.exports = mongoose.model(
    "BookingModel",//file name
     bookingSchema//function name
)