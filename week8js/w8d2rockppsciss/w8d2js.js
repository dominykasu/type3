const button = document.querySelector("button")
const rockP = document.querySelector(".rockP")
const sciP = document.querySelector(".sciP")
const paperP = document.querySelector(".paperP")
const rockC = document.querySelector(".rockC")
const sciC = document.querySelector(".sciC")
const paperC = document.querySelector(".paperC")
const pc = document.querySelectorAll(".pc")
const player = document.querySelectorAll(".player")
const totalScore = document.querySelectorAll(".score")
const results = document.querySelector(".results")
let scoreP = 0
let scoreC = 0
let selectionC = ""
let selectionP = ""
for (let i = 0; i < player.length; i++) {
    player[i].onclick = () => {
        if (player[i].classList.contains("rockP")) {
            selectionP = "rockP"
        }
        if (player[i].classList.contains("paperP")) {
            selectionP = "paperP"
        }
        if (player[i].classList.contains("sciP")) {
            selectionP = "sciP"
        }
        selectionPl()
    }
}
button.onclick = () => {
    selectionC = Math.round(Math.random() * 2 + 1)
    console.log(selectionC)

    selectionC === 1 ? selectionC = "rockC" : null
    selectionC === 2 ? selectionC = "paperC" : null
    selectionC === 3 ? selectionC = "sciC" : null

    // if (selectionC === 1) {
    //     selectionC = "rockC"
    // }
    // if (selectionC === 2) {
    //     selectionC = "paperC"
    // }
    // if (selectionC === 3) {
    //     selectionC = "sciC"
    // }

    // if (selectionC === 1) selectionC = "rockC"
    // if (selectionC === 2) selectionC = "paperC"
    // if (selectionC === 3) selectionC = "sciC"

        selectionCo()
    result()
}
function result() {
    if (selectionC === "rockC" && selectionP === "rockP") {
        results.innerText = ("draw")
    }
    if (selectionC === "rockC" && selectionP === "paperP") {
        results.innerText = ("player win")
        scoreP++
    }
    if (selectionC === "rockC" && selectionP === "sciP") {
        results.innerText = ("computer win")
        scoreC++
    }
    if (selectionC === "paperC" && selectionP === "paperP") {
        results.innerText = ("draw")
    }
    if (selectionC === "paperC" && selectionP === "rockP") {
        results.innerText = ("computer win")
        scoreC++
    }
    if (selectionC === "paperC" && selectionP === "sciP") {
        results.innerText = ("player win")
        scoreP++
    }
    if (selectionC === "sciC" && selectionP === "paperP") {
        results.innerText = ("computer win")
        scoreC++
    }
    if (selectionC === "sciC" && selectionP === "sciP") {
        results.innerText = ("draw")
    }
    if (selectionC === "sciC" && selectionP === "rockP") {
        results.innerText = ("player win")
        scoreP++
    }
    scorePrint()
}

function scorePrint() {
    totalScore[0].innerHTML = `Score Computer: ${scoreC}`
    totalScore[1].innerHTML = `Score Player: ${scoreP}`
}

function selectionCo() {
    if (selectionC === "rockC") {
        rockC.classList.add("selected")
        paperC.classList.remove("selected")
        sciC.classList.remove("selected")
    }
    if (selectionC === "paperC") {
        paperC.classList.add("selected")
        rockC.classList.remove("selected")
        sciC.classList.remove("selected")
    }
    if (selectionC === "sciC") {
        sciC.classList.add("selected")
        paperC.classList.remove("selected")
        rockC.classList.remove("selected")
    }

}

function selectionPl() {

    if (selectionP === "rockP") {
        rockP.classList.add("selected")
        paperP.classList.remove("selected")
        sciP.classList.remove("selected")
    }
    if (selectionP === "paperP") {

        paperP.classList.add("selected")
        rockP.classList.remove("selected")
        sciP.classList.remove("selected")
    }
    if (selectionP === "sciP") {

        sciP.classList.add("selected")
        paperP.classList.remove("selected")
        rockP.classList.remove("selected")
    }

}

