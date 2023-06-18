const mongoose = require("mongoose");

const mentorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number
    },
    generations: [
        {
            name: String, //25Js
            isActive: Boolean // True or False
        }
    ]
})

module.exports = mongoose.model("mentors", mentorSchema, "Mentors");

