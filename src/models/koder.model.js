const mongoose = require("mongoose");

/**
 * 1.- Schema de mongoose
 * 2.- Modelo
 */

const koderSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 3,
        maxlength: 10,
        required: true
    },
    module: {
        type: String
    },
    generation: {
        type: String
    },
    age: {
        type: Number,
        required: true,
        min: 18,
        max: 100
    },
    sex: {
        type: String,
        enum: ["f", "m", "o"]
    },
})
//Exportamos el Modelo
module.exports = mongoose.model("Koders", koderSchema, "Koders");

