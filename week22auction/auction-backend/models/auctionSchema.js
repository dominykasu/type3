const mongoose = require('mongoose')
const Schema = mongoose.Schema

const auctionSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    title:{
        type:String,
        required:true
    },
    timeCreated:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model("auctionList", auctionSchema)