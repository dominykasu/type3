// const carModel = require("../models/carScheme");
// const carModel = require("../models/carScheme");
// const bcrypt = require("bcrypt")
// const userModel = require("../models/userSchema");
const userDb = require("../models/userSchema")
const crypt = require("bcrypt")
const postDb = require("../models/postSchema")
module.exports = {
    register: async (req, res) => {
        const {email, password} = req.body

        const userExists = await userDb.findOne({email})
        if (userExists) return res.send({success: false, message: "email is taken"})

        const hash = await crypt.hash(password, 10)

        const user = new userDb()
        user.email = email
        user.password = hash
        user.image = "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
        await user.save()

        res.send({success: true, message: ""})
    },
    login: async (req, res) => {
        const {email, password} = req.body

        const userExists = await userDb.findOne({email})
        if (!userExists) return res.send({success: false, message: "bad credentials"})

        const passMatch = await crypt.compare(password, userExists.password)

        if (passMatch) {
            req.session.user = userExists
            return res.send({success: true, message: ""})
        }

        res.send({success: false, message: "bad credentials"})
    },

    getUserInfo: async (req, res) => {
        const {user} = req.session

        if (user) {
            const userInfo = await userDb.findOne({email: user.email})
            return res.send({success: true, message: "", info: userInfo})
        }

        res.send({success: false, message: "you are not logged in"})
    },
    updatePhoto: async (req, res) => {
        const {link} = req.body
        const {user} = req.session

        if (user) {
            await userDb.findOneAndUpdate({email: user.email}, {$set: {image: link}})
            return res.send({success: true, message: ""})
        }

        res.send({success: false, message: "you are not logged in"})
    },
    logout: (req, res) => {
        req.session.user = null
    },
    addPost: async (req,res)=> {
        const {email} = req.body
        const {image} = req.body
        const {title} = req.body
        const {timeCreated} = req.body

        console.log(req.session)
    if(email) {
        const post = new postDb()
        post.email = email
        post.title = title
        post.image = image
        post.timeCreated = timeCreated
        await post.save()

        res.send({success: true, message: ""})
    } else {
    res.send({success:false, message:""})
    }

    },
    getPosts: async (req,res) => {
        console.log(req.params)
        const {user} = req.session

        if (user) {
            const allPosts = await postDb.find({})
            return res.send({success: true, message: "", posts: allPosts})
        } else {
            res.send({success:false, message:"user not logged"})
        }

    }







// const registerModel = require("../models/userSchema");
// module.exports = {
//     register: (req,res) => {
//             const registerModel = require("../models/userSchema")
//             const data = req.body
//             console.log(data)
//
//             const pass = new registerModel()




//             async function regUser() {
//
//                 const password = data.pass1
//
//                 pass.email = data.email
//                 pass.password = password
//
//                 pass.save().then(res => {
//
//                     console.log("pass saved")
//                 })
//                 res.send({success: "pass saved"})
//             }
//
//         regUser()
//     },
//     login: (req,res) => {
//
//
//         console.log(req.body)
//
//     const {name, password} = req.body
//         const userSchema = require("../models/userSchema")
//
//         async function findUser() {
//
//             const user = await userSchema.find({email: `${name}`})
//             // console.log(user)
//
//             if (name === user[0].email && password === user[0].password) {
//
//                 req.session.user = user[0].email
//                 console.log(req.session)
//                 return res.send({success: true})
//             }
//
//             res.send({success: "false"})
//         }
//         findUser()
// },
//     getImg: (req,res) => {
//         console.log(req.session.user)
//         res.send("req.session.user")
//     },
//     upload: (req,res) => {
//         if(req.session.user){
//             //upload
//             return res.send({success:true, message:"all g"})
//         }
//         res.send({success:false, message:"user not logged in"})
//     }


}