const inp = document.querySelector("input")
const btn = document.querySelector("button")
let inputFld = document.getElementById("inputFld")
const ball = document.getElementById("ball")
const colorButton = document.getElementById("colorButton")
const square = document.getElementsByClassName("square")
btn.onclick = () => {
    inputFld.innerText = inp.value.length
    //  if (inp.value.length < 10) {
    //      ball.style.backgroundColor = "green"
    //  }
    //  if (inp.value.length > 10) {
    //     ball.style.backgroundColor = "yellow"
    // } if
    //  (inp.value.length > 30) {
    //      ball.style.backgroundColor = "red"
    //  }
}
inp.oninput = () => {

    inputFld.innerText = inp.value.length
     if (inp.value.length < 10) {
         ball.style.backgroundColor = "green"
     }
     if (inp.value.length > 10) {
        ball.style.backgroundColor = "yellow"
    } if
     (inp.value.length > 30) {
         ball.style.backgroundColor = "red"
     }
     if (inp.value.length > 10 && inp.value.includes("@") && inp.value.includes(".")) {
        // value.match(/@./g)
         //g means global
         inp.style.border = "5px solid green"
     } else {
         inp.style.border = "5px solid red"
     }
}
function random() {
    Math.floor(Math.random()*10)
}
// fot this task we will need an array with bunch of colors
// we will need Math.random() method to get random color
// we will nedd icons from font awesome
const colors = [
    "#7a7a7a",
    "#363636",
    "#a0ff7b",
    "#ffff80",
    "#a7ffe1",
    "#6aa3ff",
    "#ca56ff",
    "#ff397c"
]

colorButton.onclick = () => {
    square[ Math.floor(Math.random()*9)].style.color = colors[ Math.floor(Math.random()*8)]


}
