const axios = require("axios")

// function myPromise() {
//     return new Promise(async (resolve, reject) => {
//
//         const data = await axios.get("https://api.chucknorris.io/jokes/random")
//
//         if(data.status === 200) {
//             return resolve(data.data)
//         } else {
//             return reject({success: false})
//         }
//
//     })
// }
//
//
// myPromise().then(res => {
//     console.log(res)
// }).catch(e => {
//     console.log(e)
// })

// async function prom() {
//     let data
//
//     try {
//         data = await myPromise(num)
//     } catch (error) {
//         console.log(error)
//     }
//
//     console.log(data)
// }
//
// prom()



// write a promise which will return random length (0-100) string after 5 sec.
// in promise check if string length is more than 50 if yes resolve if not reject
// call the promise in both ways (with then and with async/await)


// function newPromise() {
//         return new Promise(async (resolve, reject) => {
//
//             const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//             let ranNum = Math.floor(Math.random() * 100)
//             let result = ' ';
//             const charactersLength = characters.length;
//             for (let i = 0; i < ranNum; i++) {
//                 result += characters.charAt(Math.floor(Math.random() * charactersLength));
//             }
//
//             if (result.length > 50) {
//                 return resolve(`Success! ${result.length}`)
//             } else {
//                 return reject({success: false})
//             }
//
//         })
// }
//
//
// // newPromise().then(res => {
// //     console.log(res)
// // }).catch(e => {
// //     console.log(e)
// // })
//
// async function prom() {
//     let data
//
//     try {
//         data = await newPromise()
//     } catch (error) {
//         console.log(error)
//     }
//
// }
//
// prom()


// using async/await, and axios module, fetch data from: https://randomuser.me/api/

// async function getData(){
//
//     const data = await axios.get("https://randomuser.me/api/")
//
//     console.log(data.data)
//
// }
//
// getData()

// get all posts from api "http://167.99.138.67:1111/getallposts"
// take random post from posts array, get its username and get that user posts from api "http://167.99.138.67:1111/getuserposts/:username"
// when you received all user posts, take random post from array, and get this particular post data from api "http://167.99.138.67:1111/getsinglepost/:username/:postId"

// async function task(){
//
//     try {
//
//     const allPosts = await axios.get("http://167.99.138.67:1111/getallposts")
//
//     const randomPostNum = Math.floor(Math.random()*allPosts.data.data.length)
//
//     const singleRandomPostUser = allPosts.data.data[randomPostNum].username
//
//     const randomUserPosts = await axios.get(`http://167.99.138.67:1111/getuserposts/${singleRandomPostUser}`)
//
//     const allRandomUserPosts = randomUserPosts.data.data
//
//     const randomUserPostNum = Math.floor(Math.random()*allRandomUserPosts.length)
//
//     const takeRandomPostFromArrayId = allRandomUserPosts[randomUserPostNum].id
//
//     const randomUserPostsById = await axios.get(`http://167.99.138.67:1111/getsinglepost/${singleRandomPostUser}/${takeRandomPostFromArrayId}`)
//
//     console.log(randomUserPostsById.data)
//
//     }
//     catch (error) {
//         console.log(error, "aaaaaaaaaaa")
//     }
// }
//
// task()


// first promise should return random number from 0 to 100

// each promise should be delayed for 2 sec. (setTimout)
// call first promise, get random number
// when you have random number, send it to second promise to get a word
// when you have word, send it to third promise and get the name
function promiseRandomNumber() {
    return new Promise(async (resolve, reject) => {

        setTimeout(() => {

            const ranNum = Math.round(Math.random()*100)
            console.log(ranNum)
            resolve(ranNum)
        }, 2000);
    })
}

// second promise gets number as an argument and returns
// word "young" if number is less than 20
// word "mature" if number is more than 20 and less than 60
// word "old" if number is above 60

function checkAge(num){
    return new Promise(async (resolve, reject) => {
        setTimeout(() => {

           if(num < 20){
               resolve("young")
           }
            if(num > 20 && num < 60){
                resolve("mature")
            }
            if(num > 60){
                resolve("old")
            }
        }, 2000);
    })
}
// third promise receives word (young or mature or old)
// and returns name depending on the word
// John for young
// Suzana from mature
// Tom for old


function returnName(word){
    return new Promise( async(resolve,reject)=>{
        setTimeout(() => {
        if(word === "young"){
            resolve("John")
            console.log("John")
        }
        if(word === "mature"){
            resolve("Suzana")
            console.log("Suzana")
        }
        if(word === "old"){
            resolve("Tom")
            console.log("Tom")
        }
        }, 2000);
    })
}

promiseRandomNumber().then(checkAge).then(returnName)