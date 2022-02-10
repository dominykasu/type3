// const carModel = require("../models/carScheme");
const carModel = require("../models/carScheme");
const bcrypt = require("bcrypt")
const passModel = require("../models/passwordScheme");


module.exports = {
    addCar: (req, res) => {
        const data = req.body
        console.log(data)

        const carModel = require("../models/carScheme")
        const car = new carModel()

        car.model = data.model
        car.year = data.year
        car.color = data.color
        car.gasConsumption = data.gasConsumption
        car.power = data.power

        car.save().then(res => {

            console.log("car saved")
        })
        res.send({success: "car saved"})

    },
    getModel: (req, res) => {
        const data = req.params
        //
        //  const carModel = require("../models/carScheme")
        //
        //  const car = carModel.find({ model: "asdasd"})
        //
        //  console.log(car)
        const carModel = require("../models/carScheme")

        async function findUser() {
            console.log(data)
            const car = await carModel.find({model: `${data.model}`})
            console.log(car)
            res.send(car)
        }

        findUser()
    },
    searchCar: (req, res) => {
        const data = req.body
        console.log(data)

        async function searchCar() {

            if (data.selectFld === "Model") {
                const car = await carModel.find({model: `${data.valueFld}`})
                console.log("model")
                res.send(car)
            }
            if (data.selectFld === "Color") {
                const car = await carModel.find({color: `${data.valueFld}`})
                console.log("color")
                res.send(car)
            }
            if (data.selectFld === "Year") {
                const car = await carModel.find({year: `${data.valueFld}`})
                console.log("year")
                res.send(car)
            }

        }

        searchCar()


    },
    editCar: (req, res) => {
        const carModel = require("../models/carScheme")

        console.log(req.params)

        async function findEditCar() {
            const byId = await carModel.find({_id: req.params.id})
            console.log(byId)
            res.send(byId)
        }

        findEditCar()
    },
    editCarFinal: (req, res) => {
        const carModel = require("../models/carScheme")

        const data = req.body

        async function findEditCar() {

            await carModel.findOneAndUpdate({_id: req.body.id}, {
                $set: {
                    model: `${data.changeModel}`, year: `${data.changeYear}`, color: `${data.changeColor}`,
                    gasConsumption: `${data.changeGas}`, power: `${data.changePower}`
                }
            })
            // res.send(byId)
            res.send({test: "success"})
        }

        findEditCar()
    },
    registerUser: (req, res) => {
        const passwordModel = require("../models/passwordScheme")
        const data = req.body
        console.log(data)

        const pass = new passwordModel()

        // let hash = null

        async function createCrypt() {

            const password = data.pass1
            const hash = await bcrypt.hash(password, 10)

            console.log(hash)

            pass.email = data.email
            pass.password = hash
            pass.money = 2000
            if (data.admin === "on") {
                pass.admin = true
            }


            pass.save().then(res => {

                console.log("pass saved")
            })
            res.send({success: "pass saved"})
        }

        createCrypt()

    },
    loginUser: (req, res) => {

        const data = req.body
        const passModel = require("../models/passwordScheme")

        console.log(data)

        async function findUser() {
            const byEmail = await passModel.find({email: data.email})

            // console.log(byEmail[0].password)
            // console.log(data.password)

            const compare = await bcrypt.compare(data.password, byEmail[0].password)

            if (compare) {
                res.send(byEmail[0])

            } else {
                res.send({fail: "pass dont match"})
            }
            // console.log(compare)

        }

        findUser()


    }, getUsers: (req, res) => {
        const data = req.body
        const passModel = require("../models/passwordScheme")

        async function findUser() {
            const allUsers = await passModel.find()
res.send(allUsers)
        }

        findUser()
    }
}