
const express = require('express')
const router = express.Router()
const middle = require("../middleware/main")

const {
    register,
    login,
    getUserInfo,
    // updatePhoto,
    addAuction,
    getAuctions,
    getSingleAuction,
    postBid,
    userAuction,
    userBids,
    winners

} = require("../controllers/main")

router.post("/register", middle.validateUser, register)
router.post("/login", login)
router.get('/info', getUserInfo)
// router.post('/update', updatePhoto)
router.post('/post',middle.validateAuction, addAuction)
router.get('/getAuctions', getAuctions)

router.get('/singleAuction/:id', getSingleAuction)
router.post('/postBid', postBid)
router.get('/userAuction', userAuction)
router.get('/userBids', userBids)
router.post('/winner', winners)





module.exports = router




// const express = require("express")
// const router = express.Router()
// const middle = require("../middleware/main")
//
// const session = require("express-session")
//
// router.use(session({
//     secret: '5a6sd8asd6df658fdfg6d5as6d8!w45&#%%',
//     resave: false,
//     saveUninitialized: true,
//     cookie: { secure: false }
// }))
//
// const {register, login, getImg, upload} = require("../controllers/main")
//
//
// router.post("/register", register)
// router.post("/login",middle.checkUser, login)
// router.get("/img", getImg)
// router.post("/upload", upload)
// module.exports = router