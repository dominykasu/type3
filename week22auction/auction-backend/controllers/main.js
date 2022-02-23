

const userDb = require("../models/userSchema")
const crypt = require("bcrypt")
const auctionDb = require("../models/auctionSchema")
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
    // updatePhoto: async (req, res) => {
    //     const {link} = req.body
    //     const {user} = req.session
    //
    //     if (user) {
    //         await userDb.findOneAndUpdate({email: user.email}, {$set: {image: link}})
    //         return res.send({success: true, message: ""})
    //     }
    //
    //     res.send({success: false, message: "you are not logged in"})
    // },
    // logout: (req, res) => {
    //     req.session.user = null
    // },
    addAuction: async (req,res)=> {
        const {user} = req.body
        const {image} = req.body
        const {title} = req.body
        const {startPrice} = req.body
        const {endTime} = req.body
        console.log(req.session)
        const session = req.session
    if(session) {
        const auction = new auctionDb()
        auction.user = user
        auction.title = title
        auction.image = image
        auction.startPrice = startPrice
        auction.endTime = endTime
        await auction.save()

        const allAuctions = await auctionDb.find({})
        res.send({success: true, message: "", auctions: allAuctions})
    } else {
    res.send({success:false, message:""})
    }

    },
    getAuctions: async (req,res) => {
        console.log(req.params)
        const {user} = req.session

        if (user) {
            const allAuctions = await auctionDb.find({})
            return res.send({success: true, message: "", auctions: allAuctions})
        } else {
            res.send({success:false, message:"user not logged"})
        }

    }

}