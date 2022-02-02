const valid = require("email-validator")

module.exports = {
    validateEmail:(req,res,next) => {
        const {email} = req.params
        console.log(email)
        if(valid.validate(email)){
            next()
        } else {
            res.send({error:"email is not valid"})
        }
    },
    createPost:(req,res,next) => {

        const {title} = req.body
        const {description} = req.body
        const {username} = req.body
        const {password1} = req.body
        const {password2} = req.body
        const {email} = req.body
        // console.log(req.body)
        if( title.length > 3 && title.length < 20){

        } else {
            console.log(title)
            res.send({error:"title wrong"})
        }
        if (description.length > 10 && description.length <50){

        }else {
            res.send({error:"descwrong"})
        }
        if ( username === "USERNAME"){

        }else {
            res.send({error:"USERNAME wrong"})
        }
        if (password1.length > 3 && password1.length < 20 && password1 === password2){

        } else {
            res.send({error:"password wrong"})
        }
        if(valid.validate(email)){
            next()
        } else {
            res.send({error:"email is not valid"})
        }
    }
}