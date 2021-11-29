// localStorage.setItem("City", "Vilnius")
// localStorage.setItem("Name", "Dominykas")
// localStorage.setItem("Age", "18")
//
//
// const name = localStorage.getItem("Name")
// const city = localStorage.getItem("City")
// const age = localStorage.getItem("Age")
// console.log(name,age,city)



let icons = [
    "fas fa-trailer",
    "fas fa-taxi",
    "fas fa-shuttle-van",
    "fas fa-motorcycle",
    "fas fa-truck-pickup",
    "fas fa-truck-monster",
    "fas fa-truck",
    "fas fa-caravan",
    "fas fa-ambulance",
    "fas fa-bus",
    "fas fa-car"
]

let totalMoney = 40000
const money = document.querySelector("h1")
const shop = document.querySelector(".shop")
const inventory = document.querySelector(".inventory")
let sold = []

let price = []
for (let i = 0; i < icons.length; i++) {
    price[i] = Math.floor(Math.random()*10000)

}


// console.log(price)




function appendSold(arr) {
    inventory.innerHTML = "Icons Bought: "
    arr.map(x=> {
        inventory.innerHTML += `<div class="${x}"></div> `
    })
}

function appendIcons() {


        icons.map(x=> {

        shop.innerHTML += `<div class="${x}">${price[0]}</div>`

            // ${price.splice(0,1)}
    })
    appendSold(sold)


    const iconClick = document.querySelectorAll(".fas")

    for (let i = 0; i < iconClick.length; i++) {

        iconClick[i].onclick = (event) => {
            // console.log(event.target.innerText)
            shop.innerHTML = "Icons to Buy:"
            // const button = document.querySelector("button")
            // button.onclick = (event) => {
            //     console.log(event)}


            if (icons.includes(iconClick[i].className)) {
                sold.push(iconClick[i].className)
                icons = icons.filter((x,index)=> index !== i)
totalMoney -=  event.target.innerText
            }
            money.innerText = `Money: ${totalMoney}`
            // else if (sold.includes(iconClick[i].className)){
            //     shop.innerHTML = ""
            //     icons.push(iconClick[i].className)
            //     sold = sold.filter((x,index)=> index !== i)
            // }
            // if (icons.includes(iconClick[i])) {}


            appendIcons()
        }
    }
}
appendIcons()










