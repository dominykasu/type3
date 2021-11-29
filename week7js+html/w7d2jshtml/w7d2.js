const cookie = document.querySelector(".box")
const counter = document.querySelector("h1")
const reset = document.getElementById("reset")
const addFive = document.getElementById("plusFive")
const addTwo = document.getElementById("plusTwo")
const addTen = document.getElementById("plusTen")
let add = 1000
const startGame = document.getElementById("startG")
// const gameWindow = document.getElementsByClassName("game")
const gameWindow = document.getElementsByClassName("game")
const openShop = document.getElementById("shopW")
const backB = document.getElementById("back")
const shopB = document.getElementById("shopB")
const powers = document.querySelectorAll("h2")
const bought = document.getElementsByClassName("bought")

// console.log(startGame, gameWindow)
let pointsToAdd = 1
function goBack (){
    gameWindow[0].style.display = "block"
    openShop.style.display = "none"
}
function refresh() {
    add++
    counter.innerText = `counter: ${add}`
}
startGame.onclick = () => {
    gameWindow[0].style.display = "block"
    startGame.style.display = "none"
}
cookie.onclick = () => {
    add += pointsToAdd
    counter.innerText = `counter: ${add}`
}
reset.onclick = () => {
    add = 0
    counter.innerText = `counter: ${add}`
}
addTwo.onclick = () => {
    add += 2
    counter.innerText = `counter: ${add}`
}
addFive.onclick = () => {
    add += 5
    counter.innerText = `counter: ${add}`
}
addTen.onclick = () => {
    add += 10
    counter.innerText = `counter: ${add}`
}
shopB.onclick = () => {
    gameWindow[0].style.display = "none"
    openShop.style.display = "block"
}
backB.onclick = () => {
    gameWindow[0].style.display = "block"
    openShop.style.display = "none"
}
powers[0].onclick = () => {
 addTwo.style.display = "block"
   if (add >= 100) {
       add -= 100
       pointsToAdd = 2
   }
}
powers[1].onclick = () => {
    addFive.style.display = "block"
    if (add >= 500) {
        add -= 500
        pointsToAdd = 5
    }
}
powers[2].onclick = () => {
    addTen.style.display = "block"
    if (add >= 1000) {
        add -= 1000
        pointsToAdd = 100
    }
}

powers[3].onclick = () => {

    if (add >= 300) {
        add -= 300
        goBack()
        gameWindow[0].style.backgroundColor = "green"
            // style.backgroundImage = "url('https://www.google.com/url?sa=i&url=https%3A%2F%2Fpngtree.com%2Ffree-backgrounds&psig=AOvVaw1zkdQgftQZr7dwL9yJTCxm&ust=1636538494387000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCNiaso-Di_QCFQAAAAAdAAAAABAD')"
    }

}
powers[4].onclick = () => {

    if (add >= 200) {
        add -= 200
        goBack()
        cookie.style.backgroundImage = "url('https://www.inkatrinaskitchen.com/wp-content/uploads/2011/04/Cookie-Monster-Cookies.jpg')"
        }

}
powers[5].onclick = () => {

    if (add >= 400) {
        add -= 400
        goBack()
        cookie.className += " spin"
    }

}
powers[6].onclick = () => {

    if (add >= 600) {
        add -= 600
        goBack()
        setInterval(function(){ refresh() }, 1000);
    }

}

bought[0].onclick = () => {
    powers[0].innerText = "Success"
}
bought[1].onclick = () => {
    powers[1].innerText = "Success"
}
bought[2].onclick = () => {
    powers[2].innerText = "Success"
}
bought[3].onclick = () => {
    powers[3].innerText = "Success"

}
bought[4].onclick = () => {
    powers[4].innerText = "Success"

}
bought[5].onclick = () => {
    powers[5].innerText = "Success"

}
bought[6].onclick = () => {
    powers[6].innerText = "Success"

}
