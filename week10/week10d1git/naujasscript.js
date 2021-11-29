console.log("naujas script")
const randomNumber = document.querySelector(".randomNumber")
const button = document.querySelector("button")

button.onclick = generateNumber

function generateNumber() {
    let randNumb = Math.floor(Math.random()*100)
    randomNumber.innerText = randNumb
}