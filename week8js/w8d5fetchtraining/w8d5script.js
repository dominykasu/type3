fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => {
            console.log(json[0])

            for (let i = 0; i < 6; i++) {
                postContainer.innerHTML += `
    <div class="card">
     <h5>${json[i].title}</h5>
     <p>${json[i].body}</p>
     <button>post info</button>
   </div>
`                // posts.push(json[i])
                           }
        const cardArea = document.querySelectorAll(".card")
        const getInfo  = document.querySelectorAll("button")
        let commB = ""
        for (let i = 0; i < getInfo.length; i++) {
            getInfo[i].onclick = () => {
                postContainer.innerHTML = ""
                postContainer.innerHTML += `
    <div class="card">
     <h5>${json[i].title}</h5>
     <p>${json[i].body}</p>
     <button class="comm">Comments</button>
   </div>
`
                commB = document.querySelector(".comm")
                console.log(commB)
                fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
                    .then(res => res.json())
                    .then(data => {
                        commB.onclick = () => {
                            postContainer.innerHTML = ""
                            console.log(data)
                            for (let j = 0; j < data.length; j++) {
                               postContainer.innerHTML += `
                            <div class="card">
                 <h5>${data[j].name}</h5>
                                  <h6>${data[j].email}</h6>
                    <p>${data[j].body}</p>

   </div>
                            `
                            }

                        }

                    })
            }

        }






})

const postContainer = document.querySelector(".container")


// let posts = []



// for (let i = 0; i < cardArea.length; i++) {
    // cardArea[i].onclick = () => {
        // cardArea.style.display = "none"
        // cardArea[i].style.display = "revert"
        // console.log("aa")
    // }
// }

// for (let i = 0; i < posts.length; i++) {
//     postContainer.innerHTML += `
// <div class="card">
//      <h5>${posts[i].title}</h5>
//      <p>${posts[i].body}</p>
//    </div> `
// }


