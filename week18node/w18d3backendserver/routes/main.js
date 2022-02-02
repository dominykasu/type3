const express = require("express")
const router = express.Router()

const {reg,login,deleteUser, addPhoto, showPhoto, removePhoto} = require("../controllers/main")

router.post("/reg", reg)
router.post("/login", login)
router.post("/delete", deleteUser)
router.post("/addPhoto", addPhoto)
router.get("/showPhoto", showPhoto)
router.post("/removePhoto", removePhoto)

const middle = require("../middleware/main")
const {getInfo} = require("../controllers/main")
router.get("/info/:email", middle.validateEmail, getInfo)

const {createPost} = require("../controllers/main")
router.post("/createPost", middle.createPost, createPost)

const {getPosts} = require("../controllers/main")
router.get("/showPosts", getPosts)

const {removePost} = require("../controllers/main")
router.post("/removePost", removePost)

module.exports = router
