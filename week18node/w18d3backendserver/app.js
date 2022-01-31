// const express = require("express")
//
//
// const app = express()
//
//
//
// app.listen(4000)
// //
// // app.get("/info", (req, res) => {
// //     console.log("info path")
// //     res.send({ok:"info page"})
// // })
// // app.get("/main", (req, res) => {
// //     console.log("main path")
// //     res.send({ok:"main page"})
// // })
// // app.get("/secret", (req, res) => {
// //     console.log("TEST secret page")
// //     res.send({ok:"secret page"})
// // })
// const whoiser = require('whoiser')
//
// //  app.get("/check", async (req, res) => {
// //   const domainWhois = await whoiser('google.com')
// //   //to get params
// //   // const domain = req.params.domain
// //   //   const number = req.params.number
// //     console.log(domainWhois)
// //     res.send({success:true} )
// // })
//
// app.get('/check/:domain', (req, res) => {
//   const domain = req.params.domain
//   async function get () {
//     let domainWhois = await whoiser(domain)
//     res.send({domainWhois})
//     console.log('OK')
//   }
//   get ()
// })


const whoiser = require('whoiser')
const express = require("express")
const cors = require("cors")
const app = express()


// const generateUsername = require('better-usernames');
// const Anime = require("anime-photos")
                                // const {randomCityName} = require('random-china-city-name');
const bodyParser = require("body-parser")


app.use(cors())
app.listen(4000)
app.use(bodyParser.json());

app.use(express.json())

const router = require("./routes/main")
app.use("/", router)
//   app.get('/check/:domain', (req, res) => {
//     const domain = req.params.domain
//     async function get () {
//       let info = await whoiser(domain)
//       res.send({info})
//       console.log('OK', domain)
//     }
//     get ()
//   })
//
// app.get('/userGen/:domain', (req, res) => {
//   const number = req.params.domain
//   async function get () {
//
//
//     let userArr = []
//
//     for (let i = 0; i < number; i++) {
//
//       let userName = await generateUsername()
//       let image = await Anime.getRandomAnime()
//       let city = await randomCityName()
//
//       const user = {
//         name: userName,
//         photo: image,
//         city:city
//       }
//       userArr.push(user)
//     }
//
//
//
//     // let number = 5
//     res.send(userArr)
//     // console.log(number)
//   }
//   get ()
// })

// console.log(generateUsername());
// console.log(Anime.getRandomAnime());
// console.log(randomCityName())


// create these modules in backed:
// random username generator
// module which will get random photo generated
// random city generated
// from font end send amount of users you need
// depending on that amount generate array with user objects
// and return array to front end

// const validator = require("email-validator");
// let registeredUsers = []

// app.post("/reg", (req, res) => {
//   //posta imam per req body
//   //geta imam per req params
//
//   const data = req.body
//   // console.log(validator.validate(`${data.email}`))
//
// // res.send(data)
//   if(validator.validate(`${data.email}`) && data.pass1.length > 5 && data.pass1.length < 30 && data.pass1 === data.pass2){
//
//     registeredUsers.push(data)
//     console.log(registeredUsers)
//     res.send(data)
//   } else {
//     console.log("BAD")
//     res.send({success:false})
//   }
// });

// app.post("/login", (req, res) => {
  //posta imam per req body
  //geta imam per req params

//   const data = req.body
//
//
//    registeredUsers.filter((element) => {
//      if (element.email === data.email){
//        res.send({secretKey:"lalala"})
//      } else {
//        res.send({error:"bad login"})
//      }
//
//   })
//
// });

// app.post("/delete", (req, res) => {
  //posta imam per req body
  //geta imam per req params

//   const data = req.body
//
//   console.log(data)
//   registeredUsers.filter((element) => {
//     console.log(data.email,element.email)
//     if (element.email === data.email && data.secretKey === "lalala"){
//       // element.email === data.email &&
//       registeredUsers = registeredUsers.filter(function(item){
//         return item !== element
//       })
//       res.send({success:"user removed"})
//       console.log(registeredUsers)
//       // registeredUsers.filter((x,index) => x != element)
//     } else {
//       return res.send({error:"bad details for delete"})
//     }
//
//   })
//
// });