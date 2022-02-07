// const carModel = require("../models/carScheme");
const carModel = require("../models/carScheme");
module.exports = {
   addCar: (req,res) => {
        const data = req.body
        console.log(data)

       const carModel = require("../models/carScheme")
       const car = new carModel()

       car.model = data.model
       car.year = data.year
       car.color = data.color
       car.gasConsumption = data.gasConsumption
       car.power = data.power

       car.save().then (res =>{

        console.log("car saved")
    })
       res.send({success: "car saved"})

          },
    getModel:(req,res)=> {
       const data = req.params
       //
       //  const carModel = require("../models/carScheme")
       //
       //  const car = carModel.find({ model: "asdasd"})
       //
       //  console.log(car)
        const carModel = require("../models/carScheme")

        async function findUser(){
           console.log(data)
             const car = await carModel.find({ model: `${data.model}`})
             console.log(car)
             res.send(car)
            }
            findUser()
              },
    searchCar:(req,res) => {
       const data = req.body
        console.log(data)
        async function searchCar(){

           if(data.selectFld === "Model"){
               const car = await carModel.find({ model: `${data.valueFld}`})
               console.log("model")
               res.send(car)
           }
            if(data.selectFld === "Color"){
                const car = await carModel.find({ color: `${data.valueFld}`})
                console.log("color")
                res.send(car)
            }
            if(data.selectFld === "Year"){
                const car = await carModel.find({ year: `${data.valueFld}`})
                console.log("year")
                res.send(car)
            }

        }
        searchCar()


    }

            }