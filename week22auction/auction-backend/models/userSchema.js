
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
    }
})

module.exports = mongoose.model("fakeAppUsers", userSchema)

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
