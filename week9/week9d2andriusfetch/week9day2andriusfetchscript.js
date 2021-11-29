const container = document.querySelector(".container")

function appendPosts(arr) {
    arr.map(x => {
        container.innerHTML += `
        <div class="post" id="${x.id}">
        <h1>${x.title}</h1>
        <p>${x.body}</p>
        </div>
        `
    })
    const post = document.querySelectorAll(".post")
    post.forEach(x=> {
        x.onclick = (e) => {
            const {id} = e.target
            localStorage.setItem("postId", id)
            document.location.href= "./singlepost.html"
        }
    })
}
function start () {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(data => {
            appendPosts(data)
        })
}
start()