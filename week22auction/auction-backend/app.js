
const express = require("express")
const app = express()
// const cors = require('cors')
const mongoose = require('mongoose')
const session = require("express-session")
// app.use(cors({origin: "http://localhost:3000"}))
app.use(express.json())
app.listen(4000)

app.use((req, res, next) => {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});

app.use(session({
    secret: "5a6sd8asd6df658fdfg6d5as6d8!w45&#%%",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}))

mongoose.connect("mongodb+srv://admin:admin@cluster0.03zw4.mongodb.net/myFirstDatabase?retryWrites=true&w=majority")
    .then (res => {
        console.log("connection good")
    }).catch (e=>{
    console.log(e)
})

const router = require("./routes/main")
app.use("/", router)

