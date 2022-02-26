const {validate} = require("email-validator")
const {isNumber} = require("util");
const isImageURL = require('image-url-validator').default;

module.exports = {
    validateUser: (req, res, next) => {
        const {email, password, passwordTwo} = req.body

        if(!validate(email)) return res.send({success: false, message: "bad email"})
        if(password !== passwordTwo) return res.send({success: false, message: "bad password"})
        if(password.length < 5) return res.send({success: false, message: "password too short"})

        next()
    },
    validateAuction:(req, res, next) => {
        console.log(req.body)

        isImageURL(req.body.image).then(is_image => {
            if(!is_image) {
                return res.send ({success: false, message: "bad image link"})
            }
            if(req.body.title.length < 20 && req.body.title.length > 500){
                return res.send ({success: false, message: "title must be min length 20, max length 500"})
            }

            if(!isNumber(req.body.startPrice)){
                return res.send ({success: false, message: "price is not a number"})
            }
            console.log(new Date().toLocaleString("lt-Lt"))
                next()
                // res.send ({success: true, message: "auction posted"})


        });
    }

}
