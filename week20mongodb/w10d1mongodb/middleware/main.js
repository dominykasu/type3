const valid = require("email-validator")

module.exports = {
   // addCar:(req,res,next) => {
   //     const data = req.body
   //
   //
   //     const carModel = require("../models/carScheme")
   //     const car = new carModel()
   //
   //     car.model = data.model
   //     car.year = data.year
   //     car.color = data.color
   //     car.gasConsumption = data.gasConsumption
   //     car.power = data.power
   //
   //     car.save().then (res =>{
   //         console.log("user saved")
   //     })
   //     res.send({success:"ok"})
// }
    validateUser:(req,res,next)=>{

        const {email} = req.body
        const {pass1} = req.body
        const {pass2} = req.body



        if(valid.validate(email)){

        } else {
            res.send({error:"email is not valid"})
        }
        if(pass1.length > 4 && pass1.length < 20){

        } else {
            res.send({error:"pass too short or too long"})
        }
        if(pass1 === pass2){
            next()
        } else {
            res.send({error:"pass doint match"})
        }

    }
}