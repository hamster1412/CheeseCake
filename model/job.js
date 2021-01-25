const mongoose = require("mongoose");

const job = new mongoose.Schema({
    id: int,
    title: String,
    required: [true, "Title is required"],
    trim: true,
})
