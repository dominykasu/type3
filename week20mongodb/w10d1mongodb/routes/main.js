const express = require("express")
const router = express.Router()
const middle = require("../middleware/main")
const {addCar, getModel, searchCar} = require("../controllers/main")

router.post("/addCar", addCar)
router.get("/getModel/:model", getModel)
router.post("/searchCar", searchCar)


module.exports = router
