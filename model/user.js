const mongoose = require('mongoose')

const user = new mongoose.schema({
    email: {
        type: String,
        required: [true, "Email is required!"],
        unique: true,
        trim: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: [true, "password is required!"],
        trim: true,
    },
})

const User = mongoose.model("User", user);
module.exports = User;