// const joke = document.querySelector("h5")
//
// fetch("https://api.chucknorris.io/jokes/random")
//     .then(res => res.json())
//     //res =response -- gali but pavadintas betkaip
//     .then(data => {
//         //data gali but pavadintas betkaip
// let link = data.url
//         console.log(data)
//         joke.innerHTML = `<img src="${data.icon_url}">
//         <p><a href="${link}">Link</a> </p>
//         <p class="joke">${data.value}</p>`
//         }
//     )

// const button = document.querySelectorAll("button")
// const container = document.querySelector("div")
// button[0].onclick = () => {
//     fetch("https://randomuser.me/api/?results=1")
//         .then(response => response.json())
//         .then (data => {
//             let age = data.results[0].dob.age
// container.innerHTML +=`<div class="d-block">
// <img src="${data.results[0].picture.medium}">
// <p>${data.results[0].name.first} ${data.results[0].name.last}</p>
// <p>${data.results[0].email}</p>
// <p>${data.results[0].location.city}</p>
// <p>${data.results[0].location.state}</p>
// <p>${data.results[0].location.postcode}</p>
// <p>${data.results[0].phone}</p>
// <button class="delete">Delete User</button></div>
// `
// const border = document.querySelectorAll(".d-block")
//
//             for (let i = 0; i < border.length; i++) {
//                 function ageCheck() {
//                     if ( age > 30){
//                         console.log(age)
//                         border[i].style.border ="2px solid green"
//                     }
//                 }
//             }
//
//             ageCheck()
//
//             const buttonDel = document.querySelectorAll(".delete")
//
//             for (let i = 0; i < buttonDel.length; i++) {
//                 buttonDel[i].onclick = () => {
//                     buttonDel[i].parentElement.remove()
//                 }
//             }
//         })
// }

const button = document.querySelector(".addButton")
const container = document.querySelector("div")
let pplArr = []

button.onclick = () => {

    fetch("https://randomuser.me/api/?results=1")
        .then(response => response.json())
        .then (data => {

            pplArr.push(data.results[0])
            // console.log(pplArr)
          show()


        })

        }
        ///
// pplArr.map(x, index) => {
//     innerhtmlAdd class="${index}"
// }
///
        function show() {
    container.innerHTML = ""
            for (let i = 0; i < pplArr.length; i++) {
                container.innerHTML +=`<div class="d-block">
<img src="${pplArr[i].picture.medium}">
<p>${pplArr[i].name.first} ${pplArr[i].name.last}</p>
<p>${pplArr[i].email}</p>
<p>${pplArr[i].location.city}</p>
<p>${pplArr[i].location.state}</p>
<p>${pplArr[i].location.postcode}</p>
<p>${pplArr[i].phone}</p>
<button class="delete">Delete User</button></div>
`
                delButton = document.querySelectorAll(".delete")
                removeD()
            }
            }


let delButton = document.querySelectorAll(".delete")
function removeD() {

    // console.log(delButton)
    for (let i = 0; i < delButton.length; i++) {
        delButton[i].onclick = () => {
            delete pplArr[i]
            pplArr = pplArr.filter(item=>item)
            update()
            // pplArr.splice(i, 1)
            console.log(delButton[i])
        }

    }
}

function update() {

    container.innerHTML = ""
    for (let i = 0; i < pplArr.length; i++) {
        container.innerHTML +=`<div class="d-block">
<img src="${pplArr[i].picture.medium}">
<p>${pplArr[i].name.first} ${pplArr[i].name.last}</p>
<p>${pplArr[i].email}</p>
<p>${pplArr[i].location.city}</p>
<p>${pplArr[i].location.state}</p>
<p>${pplArr[i].location.postcode}</p>
<p>${pplArr[i].phone}</p>
<button class="delete">Delete User</button></div>
`
    }}

let check = document.querySelector(".check")
check.onclick = () => {
    // console.log(pplArr)


}

