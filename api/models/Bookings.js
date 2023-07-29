const mongoose = require("mongoose");
const place = require('./Places')
const vehicle = require('./Vehicles')
const package = require('./Packages')

const BookingSchema = new mongoose.Schema({
    customer: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    PlaceId: {type: mongoose.Schema.Types.ObjectId, ref: place},
    VehicleId: {type: mongoose.Schema.Types.ObjectId, ref: vehicle},
    PackageId: {type: mongoose.Schema.Types.ObjectId, ref: package},
    what: String, 
    startDate: String,
    endDate: String,
    totalPrice: Number,
});

const Booking = mongoose.model("Booking", BookingSchema); 

module.exports = Booking;