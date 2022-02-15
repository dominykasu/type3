const express = require("express")
const app = express()
const cors = require("cors")
app.use(cors())
const http = require ('http').createServer(app)

const io = require('socket.io')(http,{

    cors: {
        origin : "http://localhost:3000"    }

})

const userArr = []

io.on("connection", socket => {
    console.log("socket connected")

    socket.on("myMessage", (msg) =>{
        console.log(msg)
        //emits to all
        io.emit("response", msg)
        io.to(socket.id).emit("getId" , socket.id)
        //emits to all but self
        // socket.broadcast.emit("response", msg)
    })

    // socket.on("getId", id => {
    //     console.log(socket.id)
    //
    // })
    socket.on("color", color => {
        console.log(color)
        io.emit("color", color)
        //emits to all but self
        // socket.broadcast.emit("color", color)
    })
    socket.on("username", username => {

        userArr.push({username:username, socketId: socket.id})
        io.emit("users", userArr)
        //emits to all but self
        // socket.broadcast.emit("color", color)
    })

})



http.listen(4000,()=>{
    console.log("listening on 4000")
})
