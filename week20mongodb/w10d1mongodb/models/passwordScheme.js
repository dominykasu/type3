const mongoose = require("mongoose")
const Schema = mongoose.Schema

const passwordSchema = new Schema({
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    money: {
        type:Number,
        required:false

    },
    admin: {
        type: Boolean,
        required:false
    }

})


module.exports = mongoose.model("passwordModel", passwordSchema)



