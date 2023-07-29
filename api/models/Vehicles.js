const mongoose = require("mongoose");

const VehicleSchema = new mongoose.Schema({
    owner: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    driverName: String, 
    VehicleName: String, 
    photos: [String], 
    description: String, 
    vehicleType: String,
    seats: Number,
    price: String,
});

const VehicleModel = mongoose.model("Vehicle", VehicleSchema); 

module.exports = VehicleModel;