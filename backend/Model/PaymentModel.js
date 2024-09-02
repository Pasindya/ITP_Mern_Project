const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const paymentSchema = new Schema({
    Fullname:{
        type:String,//dataType
        required:true,//validate
    },
    email:{
        type:String,//dataType
        required:true,//validate
    },
    Address:{
        type:String,//dataType
        required:true,//validate
    },
    cardType:{
        type:String,//dataType
        required:true,//validate
    },
    cardNumber:{
        type:Number,//dataType
        required:true,//validate
    },
    expirationMonth:{
        type:Number,//dataType
        required:true,//validate
    },
    expirationYear:{
        type:Number,//dataType
        required:true,//validate
    },
    cvv:{
        type:Number,//dataType
        required:true,//validate
    },
});

module.exports = mongoose.model("PaymentModel", // file name
    paymentSchema // function name

)
