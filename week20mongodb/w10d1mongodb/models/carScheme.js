const mongoose = require("mongoose")
const Schema = mongoose.Schema


//how your database has to look

// create new model in mongoose for a car object
// car should have these fields
// mode, year, color, gasConsumption, power
// using post method
// in font end create form for user to add these fields
// send all data to back end and save it ans new car object in database

const carSchema = new Schema({
    model: {
        type: String,
        required:true
    },
    year: {
        type: Number,
        required:true
    },
    color: {
        type: String,
        required:true
    },
    gasConsumption: {
        type: String,
        required:true
    },
    power: {
        type:String,
        required:true
    }
})

module.exports = mongoose.model("carModel", carSchema)