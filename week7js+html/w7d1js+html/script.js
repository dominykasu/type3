// const heading = document.getElementById("text")
//query selector paiuma tik 1 elementa, bet query selector all paima visus



// const button = document.querySelector("#mybutton")
// //eventio pavadinimas click ir tada eina funkcija
//
// ////
// // button.addEventListener("click", buttonClick)
// //
// // function buttonClick(){
// //     console.log("paspaustas")
// // }
// ///
//
// button.onclick = () => {
//     console.log("paspaustas")
// }

// const button3 =document.getElementsByClassName("myButton")
// const button2 =document.getElementById("firstButton")

//
// button2.onclick = () => {
//     console.log("paspaustas antras")
// }
// //class name duoda array ir reik rasyt [0]
// button3[0].onclick = () => {
//     console.log("paspaustas button3")
// }
//
// const button1 = document.querySelector("button")
// const head = document.querySelector("h1")
//
// button1.onclick = () => {
//     console.log("paspaustas pirmas")
//     head.innerText = "Inner Text"
//     //inner text = pasako kad desime paprasta teksta
//     //o InnerHTMl leidzia deti TAGUS, kaip <p> ir pan
// }



const textB = document.querySelectorAll("button")
// const para = document.querySelectorAll("p")
// const paraBg = document.querySelectorAll(".box")
//
// textB[0].onclick = () => {
//     para[0].innerText = "Inner Text1"
//     paraBg[0].style.backgroundColor = "yellow";
// }
// textB[1].onclick = () => {
//     para[1].innerText = "Inner Text2"
//     paraBg[1].style.backgroundColor = "green";
// }
// textB[2].onclick = () => {
//     para[2].innerText = "Inner Text3"
//     paraBg[2].style.backgroundColor = "#ff0000";
// }

// const h1 = document.querySelector("h1").innerText
const labas = document.querySelector("h1")
function change(h1) {
    const wordChange = document.querySelector("h1").innerText
    let wordArr = []
    for (let i = 0; i < wordChange.length; i++) {
 wordArr.push(wordChange[i])

    }
    console.log(wordArr)
    textB[0].onclick = () => {
        let str = "Hello World!";
        labas.innerText = str
        document.style.color = "red"
        // labas.innerText = wordArr.join("").toLowerCase()


        // wordArr[0].fontcolor("yellow")
            // Color = "yellow";
    }


}
change();



