const animals = [
   "<i class=\"fas fa-otter fa-5x\"></i>",
  " <i class=\"fas fa-hippo fa-5x\"></i>",

  " <i class=\"fas fa-kiwi-bird fa-5x\"></i>",
  " <i class=\"fas fa-cat fa-5x\"></i>",
  " <i class=\"fas fa-spider fa-5x\"></i>",
  " <i class=\"fas fa-fish fa-5x\"></i>",
   " <i class=\"fas fa-crow fa-5x\"></i>",

   " <i class=\"fas fa-dragon fa-5x\"></i>",
   " <i class=\"fas fa-dove fa-5x\"></i>",
   " <i class=\"fas fa-frog fa-5x\"></i>"
]
let money = 100

let eggPrice = 60
let invArr = [{animal: ' <i class="fas fa-hippo fa-5x"></i>', gender: "male", sellPrice: 20}]

const container = document.querySelector(".container")
let sellPrice = 0

function shop () {
    container.innerHTML = `
    <div class="d-flex flex-column">
        <div>Your Money: ${money}</div>
        <i class="fas fa-egg fa-5x"></i>
        <button class="buy">Buy Egg</button>
    </div>`
    let buyButton = document.querySelector(".buy")
    buyButton.onclick = () => {
        money -= eggPrice
        hatch()
        move()
    }

}
shop()


function hatch(){
    container.innerHTML = `
    <div class="d-flex flex-column">
        <div>Your Money: ${money}</div>
        <i class="fas fa-egg fa-5x"></i>
        <div id="myProgress">
        <div id="myBar">Hatching...</div>
    </div>
    </div>`

}
let i = 0;
function move() {
    if (i === 0) {
        i = 1;
        let elem = document.getElementById("myBar");
        let width = 1;
        let id = setInterval(frame, 10);
        function frame() {
            if (width >= 100) {
                clearInterval(id);
                i = 0;

randomGender()
                inventory()
            } else {
                width++;
                elem.style.width = width + "%";
            }
        }
    }
}

function inventory(){
    container.innerHTML =` <div>Your Money: ${money}</div>`

    for (let j = 0; j < invArr.length; j++) {


        container.innerHTML += `
    <div class="d-flex">
        <div>SellPrice: ${invArr[j].sellPrice}</div>
        <div class="color">
      <div>  ${invArr[j].animal}</div>
      </div>
      <div>  ${invArr[j].gender}</div>
     
        <button class="sell">Sell</button>
    </div>`}


const sellButton = document.querySelectorAll(".sell")
    for (let j = 0; j < sellButton.length; j++) {
        let genderColor = document.querySelectorAll(".color")
        if (invArr[j].gender === "male"){
            genderColor[j].classList.add("male")
        } if (invArr[j].gender === "female"){
            genderColor[j].classList.add("female")
        }
        sellButton[j].onclick = () => {
            money += invArr[j].sellPrice
            delete invArr[j]
           invArr = invArr.filter(n => n)
            shop()
        }

    }

}
function randomGender() {
    let gender = Math.round(Math.random())
    let randomAnimal = Math.floor(Math.random()*10)

    if (gender === 0) {
        gender = "male"

    } if (gender === 1) {
        gender = "female"
    }
    sellPrice = Math.round(Math.random()*100+50)
invArr.push({animal:animals[randomAnimal], gender, sellPrice})
    console.log(invArr)
}


