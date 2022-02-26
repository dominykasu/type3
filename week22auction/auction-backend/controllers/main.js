

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
    addAuction: async (req, res) => {

        const email = req.body.user
        const {user} = req.session
        const {image} = req.body
        const {title} = req.body
        const {startPrice} = req.body
        const {endTime} = req.body
        const {startTime} = req.body
        // console.log(req.session)
        // const sessionUser = req.session
        console.log(req.body)
        if (user) {
            const auction = new auctionDb()
            auction.user = email
            auction.title = title
            auction.image = image
            auction.startPrice = startPrice
            auction.endTime = endTime
            auction.startTime = startTime
            await auction.save()

            const allAuctions = await auctionDb.find({})
            res.send({success: true, message: "", auctions: allAuctions})
        } else {
            res.send({success: false, message: "user not logged in"})
        }

    },
    getAuctions: async (req, res) => {
        // console.log(req.params)
        const {user} = req.session

        if (user) {
            const allAuctions = await auctionDb.find({})
            return res.send({success: true, message: "", auctions: allAuctions})
        } else {
            res.send({success: false, message: "user not logged"})
        }

    },
    getSingleAuction: async (req, res) => {

        const {user} = req.session

        if (user) {
            const {id} = req.params
            // console.log(req.params)
            const auction = await auctionDb.findOne({_id: id})
            // console.log(auction)
            return res.send({success: true, auction})
        } else {
            res.send({success: false, auction: null})
        }

    },
    postBid: async (req, res) => {

        const {user} = req.session
        const {bid, bidId} = req.body

        if (user) {

            const bids = {
                bid,
                user:user.email,
                time: Date.now(),
                userPhoto: user.image
            }

          const newBid = await auctionDb.findOneAndUpdate({_id:bidId},{$push:{bids}}, {new: true})
            console.log(bids)
            return res.send({success: true,bids: newBid})


        } else {
            res.send({success: false,message:"user not logged in"})
        }


    },
    userAuction: async (req, res) => {

        const {user} = req.session
        console.log(req)
        if (user) {
            // const {id} = req.params
            const userEmail = user.email
            const auction = await auctionDb.find({user:userEmail})
            console.log(auction)
            return res.send({success: true, auction})
        } else {
            res.send({success: false, auction: null})
        }

    },
    userBids: async (req, res) => {

        const {user} = req.session
        console.log(user)
        if (user) {
            const userEmail = user.email

        console.log(userEmail)
            const auction = await auctionDb.find({"bids.user":userEmail})
            console.log(auction)
            return res.send({success: true, auction})
        } else {
            res.send({success: false, auction: null})
        }

    },
    winners:async (req, res) => {

        const {user} = req.session
        const bid = req.body.winner[0].bid
        const email = req.body.winner[0].user

        console.log(user,bid,email)
        if (user) {

            const newMoney = user.money - bid

            const aa = await userDb.findOneAndUpdate({email:email},{$set:{money:newMoney}}, {new: true})
            console.log(aa)
            return res.send({success: true,winner: aa})

        }
        else {
            res.send({success: false,message:"user not logged in"})
        }


    }

}