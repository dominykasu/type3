const login = document.getElementById("login")
const post = document.getElementById("newPost")
const update = document.getElementById("update")
const updateId = document.getElementById("postId")
const del = document.getElementById("delete")
const username = document.getElementById("username")
const password1 = document.getElementById("pass1")
const title1 = document.getElementById("title")
const img1 = document.getElementById("img")
const description1 = document.getElementById("description")
login.onclick = () => {
    const name = username.value
    const password = password1.value


    const userLogin = {
        name,
        password
    }

    const options = {

        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(userLogin)
    }

    fetch(host1, options)
        .then(res => res.json())
        .then(data => {
            console.log(data.secretKey)
            localStorage.setItem("SecretKey", data.secretKey)
            // const secretKey = localStorage.getItem("SecretKey")


        })

}
const host1 = "http://167.99.138.67:1111/login"
post.onclick = () => {
    const title = title1.value
    const image = img1.value
    const description = description1.value
    const secretKey = localStorage.getItem("SecretKey")


    const userPost = {
        secretKey,
        title,
        description,
        image

    }

    const options = {

        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(userPost)
    }
    console.log(secretKey)
    fetch(host, options)
        .then(res => res.json())
        .then(data => {
            console.log(data)


        })

}
const host = "http://167.99.138.67:1111/createpost"

update.onclick = () => {
    const title = title1.value
    const image = img1.value
    const description = description1.value
    const secretKey = localStorage.getItem("SecretKey")
    const id = updateId.value
    const userPost = {
        secretKey,
        title,
        description,
        image,
        id
    }

    const options = {

        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(userPost)
    }
    console.log(secretKey)
    fetch(host2, options)
        .then(res => res.json())
        .then(data => {
            console.log(data)


        })

}
const host2 = "http://167.99.138.67:1111/updatepost"

del.onclick = () => {

    const secretKey = localStorage.getItem("SecretKey")
    const id = updateId.value
    const userPost = {
        secretKey,
        id
    }

    const options = {

        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(userPost)
    }
    console.log(secretKey)
    fetch(host3, options)
        .then(res => res.json())
        .then(data => {
            console.log(data)


        })

}
const host3 = "http://167.99.138.67:1111/deletepost"