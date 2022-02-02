const express = require("express")
const router = express.Router()

const middle = require("../middleware/main")

const {getInfo} = require("../controllers/main")

router.get("info/:email", middle.validateEmail, getInfo)

module.exports = router