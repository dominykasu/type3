const mongoose = require('mongoose')
const Schema = mongoose.Schema

const auctionSchema = new Schema({
    user: {
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
    startPrice:{
        type:Number,
        required:true
    },
    endTime:{
        type:Number,
        required:true
    }
})

module.exports = mongoose.model("auctionList", auctionSchema)