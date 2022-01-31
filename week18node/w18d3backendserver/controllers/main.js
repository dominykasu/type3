const validator = require("email-validator");
let registeredUsers = []
let photos = []
module.exports = {
    reg: (req, res) => {
        const data = req.body
        // console.log(validator.validate(`${data.email}`))

// res.send(data)
        if(validator.validate(`${data.email}`) && data.pass1.length > 5 && data.pass1.length < 30 && data.pass1 === data.pass2){

            registeredUsers.push(data)
            console.log(registeredUsers)
            res.send(data)
        } else {
            console.log("BAD")
            res.send({success:false})
        }
    },
    login: (req, res) => {
        const data = req.body


        registeredUsers.filter((element) => {
            if (element.email === data.email){
                res.send({secretKey:"lalala"})
            } else {
                res.send({error:"bad login"})
            }

        })

    },
    deleteUser: (req, res) => {
        const data = req.body

        console.log(data)
        registeredUsers.filter((element) => {
            console.log(data.email,element.email)
            if (element.email === data.email && data.secretKey === "lalala"){
                // element.email === data.email &&
                registeredUsers = registeredUsers.filter(function(item){
                    return item !== element
                })
                res.send({success:"user removed"})
                console.log(registeredUsers)
                // registeredUsers.filter((x,index) => x != element)
            } else {
                return res.send({error:"bad details for delete"})
            }

        })

    },

    addPhoto: (req,res) => {
        const data = req.body


        photos.push(data)
        console.log(photos)
        return res.send(data)
    }
    ,
    showPhoto: (req,res) => {

        res.send(photos)
        // return res.send(photos)
    },
    removePhoto: (req,res) => {
        const data = req.body
        console.log(data)

        photos.filter((element, index) => {

            if (data.remove === index){

               photos = photos.filter(function(item,index){
                    console.log(index,data.remove)
                    return data.remove !== index
                })



            }

        })


    }
}