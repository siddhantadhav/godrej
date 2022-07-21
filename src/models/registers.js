const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true

    },
    email: {
        type: String,
        required:true

    },
    contact: {
        type: Number,
        required:true

    },

    country: {
        type: String,
        required: true
    }
})

const Register =  new mongoose.model("Register", userSchema);

module.exports = Register;
