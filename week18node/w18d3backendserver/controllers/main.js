const validator = require("email-validator");
const { v4: uuidv4 } = require('uuid');
let registeredUsers = []
let photos = []
let posts = []
let usersNew = []
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


    },
    getInfo:(req,res) => {
        console.log("asdasd")
        res.send({ok:"ok"})
    },
    createPost:(req,res) => {
        const post = req.body
        posts.push(post)
        console.log(posts)
        res.send({ok:"createpost ok"})
    },
    getPosts:(req,res) => {
        res.send(posts)
    },
    removePost: (req,res) => {
        const data = req.body
        console.log(data)
        console.log(posts)

        posts.filter((x,index) => {
            if (data.remove === index){
                console.log(data.remove, index)
                posts = posts.filter(function(item,index){
                    return data.remove !== index
                })
            }

        })
        // photos.filter((element, index) => {
        //
        //     if (data.remove === index){
        //
        //         photos = photos.filter(function(item,index){
        //             console.log(index,data.remove)
        //             return data.remove !== index
        //         })
        //
        //
        //
        //     }
        //
        // })

},
    regNew: (req,res, next) => {
       const form = req.body
        console.log(form, usersNew)

        if(form.username !== form.username.toUpperCase()){
            res.send({msg:"username needs to be uppercase"})
        }
        if(form.username.length < 3 || form.username.length > 20){
            res.send({msg:"min length 3, max 20"})
        }
        if(form.pass1.length < 3 || form.pass1.length > 20 || form.pass1 !== form.pass2){
            res.send({msg:"Password: min length 3, max 20 and they should match"})
        } else {
        const uniId = uuidv4()
        usersNew.push({...form, uniId})
        console.log(usersNew)
      res.send({msg:"reg complete"})
        }
    },
    logNew: (req,res) => {
        const form = req.body
        // console.log(form)
        // console.log(usersNew)
        if(form.username !== form.username.toUpperCase()){
            res.send({msg:"username needs to be uppercase"})
        }
        if(form.username.length < 3 || form.username.length > 20){
            res.send({msg:"USERNAME: min length 3, max 20"})
        }
        if(form.password.length < 3 || form.password.length > 20 ){
            res.send({msg:"Password: min length 3, max 20 "})
        }
          if(  usersNew.find(x=> x.username === form.username && x.pass1 === form.password)){
            // const idFilter = usersNew.filter(x => x.username === form.username);
            // const id = idFilter.uniId

              const id = usersNew.filter(x => {
                if(  x.username === form.username){
                    return x
                }
              })
              console.log(id[0].uniId)
              res.send({msg:"logged on", id:  id[0].uniId})
          } else {
              res.send({msg:"user does not exist or password is wrong"})
          }



    }
}