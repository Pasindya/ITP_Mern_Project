const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const staffSchema = new Schema({
    name: {
        type: String,
        required: true,  // Corrected typo: ture -> true
    },
    gmail: {
        type: String,
        required: true,  // Corrected typo: ture -> true
    },
    age: {
        type: Number,
        required: true,  // Corrected typo: ture -> true
    },
    address: {
        type: String,
        required: true,  // Corrected typo: ture -> true
    },
    experience: {  // Fixed typo: Expirince -> experience
        type: Number,
        required: true,  // Corrected typo: ture -> true
    },
    password: {  // Fixed capitalization: Password -> password
        type: String,
        required: true,  // Corrected typo: ture -> true
    },
});

module.exports = mongoose.model("StaffModel", staffSchema);
