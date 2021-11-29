const username = document.getElementById("username")
const password1 = document.getElementById("pass1")
const password2 = document.getElementById("pass2")
const button = document.querySelector("button")

// button.onclick = () => {
//     console.log(input.value)
//     const user = {
//         name:input.value,
//         age:20
//     }
//
// console.log(user)
// }


// button.onclick = () => {
//     const name = username.value
//     const passwordOne = password1.value
//     const passwordTwo = password2.value
//
//     const user = {
//         name,
//         passwordOne,
//         passwordTwo
//     }
//
//     const options = {
//
//         method: "POST",
//         headers: {
//             "content-type": "application/json"
//         },
//         body: JSON.stringify(user)
//     }
//
//     fetch(host, options)
//         .then(res => res.json())
//         .then(data => {
//             console.log(data)
//         })
// }
// const host = "http://167.99.138.67:1111/createaccount"
const container = document.querySelector(".container")

fetch('http://167.99.138.67:1111/getallposts')
    .then(app => app.json())
    .then(database => {
        // console.log(database)
        let ads = []
        for (let i = 0; i < database.data.length; i++) {
            ads.push(database.data[i])
        }
        console.log(ads)
        for (let i = 33; i < 43; i++) {
            container.innerHTML += `
            <div class="card">
            
            <h3>${ads[i].title}</h3>
            <h4>${ads[i].username}</h4>
            <p>${ads[i].description}</p>
            <button>Get all posts form user</button>
            </div>`
        }
        const user = document.querySelectorAll("h4")
        const button = document.querySelectorAll("button")
        for (let i = 0; i < button.length - 1; i++) {
            button[i].onclick = () => {
                console.log(user[i - 1])
                fetch('http://167.99.138.67:1111/getuserposts/' + user[i - 1].innerText)
                    .then(app => app.json())
                    .then(database => {

                        let userPosts = []
                        for (let j = 0; j < database.data.length; j++) {
                            userPosts.push(database.data[j])
                        }
                        // console.log(userPosts)
                        container.innerHTML = ""
                        for (let k = 0; k < userPosts.length; k++) {
                            // console.log(userPosts[k].title)
                            container.innerHTML += `
                            <div class="card">
                            <h3>${userPosts[k].title}</h3>
                            <h4>${userPosts[k].username}</h4>
                            <p>${userPosts[k].description}</p>
                            <button class="idButton">get post by id</button>
                            </div>`
                        }
                        const buttonID = document.querySelectorAll(".idButton")
                        for (let j = 0; j < buttonID.length; j++) {
                            buttonID[j].onclick = () => {
                                // console.log(userPosts[j].id)
                                fetch('http://167.99.138.67:1111/getsinglepost/' + user[i - 1].innerText + `/` + userPosts[j].id)
                                    .then(app => app.json())
                                    .then(database => {
                                        // console.log(database)
                                        container.innerHTML = `
                                        <div class="card">
                                        <h3>${database.data.title}</h3>
                                        <h4>${database.data.username}</h4>
                                        <p>${database.data.description}</p>         
                                        </div>`
                                    })
                            }
                        }

                    })
            }
        }
    })






