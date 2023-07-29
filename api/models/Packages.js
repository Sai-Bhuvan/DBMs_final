const mongoose = require("mongoose");

const PackageSchema = new mongoose.Schema({
    owner: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    title: String, 
    days: Number, 
    photos: [String], 
    places: [String], 
    description: String, 
    price: String,
});

const PackageModel = mongoose.model("Package", PackageSchema); 
module.exports = PackageModel;