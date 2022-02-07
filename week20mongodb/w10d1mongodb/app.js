const mongoose = require("mongoose")
const express = require("express")
const cors = require("cors")
const app = express()

const bodyParser = require("body-parser")


app.use(cors())
app.listen(4000)
app.use(bodyParser.json());

app.use(express.json())

const router = require("./routes/main")
app.use("/", router)

mongoose.connect("mongodb+srv://admin:admin@cluster0.03zw4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
        .then (res => {
             console.log("connection good")
}).catch (e=>{
    console.log(e)
})

const userModel = require("./models/userScheme")
// const carModel = require("./models/carScheme")

// function createUser(){
//
//     const user = new userModel()
//
//     user.username = "Dominykas"
//     user.image = "https://imagej.net/images/camera.gif"
//     user.title = "Title"
//     user.age = 5
//
//     user.save().then (res =>{
//         console.log("user saved")
//     })
//
// }
//
// createUser()

// const carModel = require("./models/carScheme")
//
// async function findUser(){
//     const car = await carModel.find({ model: "asdasd"})
//     console.log(car)
// }
// findUser()