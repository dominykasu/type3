const container = document.querySelector(".container")
const comments = document.querySelector(".comments")

function appendComments(arr) {
    arr.map(x => {
        comments.innerHTML += `
        <div class="post" id="${x.id}">
        <h1>${x.name}</h1>
        <h3>${x.email}</h3>
        <p>${x.body}</p>
        </div>
        `
    }
   )
}

function getComments() {
    const id = localStorage.getItem("postId")

    fetch("https://jsonplaceholder.typicode.com/posts/"+id+"/comments")
        .then(res => res.json())
        .then(data => {
           appendComments(data)
        })
}

function appendPost(x) {

    container.innerHTML = `
        <div class="post" id="${x.id}">
        <h1>${x.title}</h1>
        <p>${x.body}</p>
        <button>Get comments</button>
        </div>
        `
    const button = document.querySelector("button")
    button.onclick = getComments
}
//     const post = document.querySelector(".post")
//     post.forEach(x=> {
//         x.onclick = (e) => {
//             const {id} = e.target
//             localStorage.setItem("postId", id)
//             document.location.href= "./singlepost.html"
//         }
//     })
// }



function start () {
    const id = localStorage.getItem("postId")

    fetch("https://jsonplaceholder.typicode.com/posts/"+ id)
        .then(res => res.json())
        .then(data => {
            appendPost(data)
        })
}
start()