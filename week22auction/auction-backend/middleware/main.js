const {validate} = require("email-validator")

module.exports = {
    validateUser: (req, res, next) => {
        const {email, password, passwordTwo} = req.body

        if(!validate(email)) return res.send({success: false, message: "bad email"})
        if(password !== passwordTwo) return res.send({success: false, message: "bad password"})
        if(password.length < 5) return res.send({success: false, message: "password too short"})

        next()
    }
}