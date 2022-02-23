const {validate} = require("email-validator")
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
        });
    }
/////STOPPED AT IMG
}