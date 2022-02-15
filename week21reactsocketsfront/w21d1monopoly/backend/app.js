const express = require("express")
const app = express()
const http = require ('http').createServer(app)

const io = require('socket.io')(http)

io.on("connection", socket => {
    console.log("socket connected")
})

http.listen(4000,()=>{
    console.log("listening on 4000")
})