const valid = require("email-validator")

module.exports = {
    validateEmail:(req,res,next) => {
        const {email} = req.params

        if(valid.validate(email)){
            next()
        } else {
            res.send({error:"email is not valid"})
        }
    }
}