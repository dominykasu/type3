const express = require("express")
const router = express.Router()

const {reg,login,deleteUser, addPhoto, showPhoto, removePhoto} = require("../controllers/main")

router.post("/reg", reg)
router.post("/login", login)
router.post("/delete", deleteUser)
router.post("/addPhoto", addPhoto)
router.get("/showPhoto", showPhoto)
router.post("/removePhoto", removePhoto)
module.exports = router
