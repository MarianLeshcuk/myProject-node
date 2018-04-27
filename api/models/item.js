const mongoose = require("mongoose");

const itemSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    title: String,
    description: String,
    price: Number,
    imageSrc: String
}, {versionKey: false});

module.exports = mongoose.model("Item", itemSchema, "Item");