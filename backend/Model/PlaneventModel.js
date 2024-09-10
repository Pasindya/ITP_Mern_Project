const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const planeventSchema = new Schema({

    StudentName: {
        type: String, //dataType
        required: true, //validate
    },
    EventName: {
        type: String, //dataType
        required: true, //validate
    },
    age: {
        type: Number, //dataType
        required: true, //validate
    },
    gmail: {
        type: String, //dataType
        required: true, //validate
    },
    gender: {
        type: String, //dataType
        required: true, //validate
    }
});
module.exports = mongoose.model(
    "PlaneventModel", //file name
    planeventSchema //function name
)