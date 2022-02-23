
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    money: {
        type:Number,
        required:true,
        default: 1000
    }
})

module.exports = mongoose.model("auctionUsers", userSchema)

// const mongoose = require("mongoose")
// const Schema = mongoose.Schema
//
// const userSchema = new Schema({
//     email: {
//         type: String,
//         required: true
//     },
//     password: {
//         type: String,
//         required: true
//     },
//     photo:{
//         type:String,
//         required:false
//     }
//
//
// })
//
//
// module.exports = mongoose.model("userModelCookies", userSchema)
//
//
//
