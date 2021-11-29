let enemies = [
    {
        name: "Goblin",
        img: "https://i.imgur.com/yBh7Fn4.png",
        maxDamage: 12
    },
    {
        name: "Troll",
        img: "https://i.pinimg.com/originals/8d/7f/d8/8d7fd8ae9fcd6060497c628e1c7944b4.jpg",
        maxDamage: 8
    },
    {
        name: "Witch",
        img: "https://i.pinimg.com/originals/c0/da/c0/c0dac0da46b4c59534cf898b1967d523.png",
        maxDamage: 15
    }
]
 let player = [{name:"Dominykas",
     img:"https://www.english.op.org/wp-content/uploads/2021/06/st-dominic.jpg",
     maxDamage:0}]
let weapons = {
    sword: {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRjeRzenAFh9nuqc0sexfw63azpjKmulkubHg&usqp=CAU",
        damage: 10,
        effect: 'gives player 25% chance to doge enemy attacks'
    },
    magicWand: {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRYLtdkk7fwbEwdjNpuL0Oo1ka5A7z0PhL34Q&usqp=CAU",
        damage: 12,
        effect: 'heals player on every enemy hit from 0 to 5 hit points'
    },
    bow: {
        img: "https://preview.pixlr.com/images/800wm/100/1/1001468630.jpg",
        damage: 7,
        effect: 'has a 50% chance to hit enemy two times in a row'
    },
    potion: {
        img: "https://preview.pixlr.com/images/450nwm/100/1/1001468594.jpg",
        info: "can be bought from shop for 50 coins, recovers player health when bought",
    }
}
let playerHP = 100
let enemyHP = 100
let enemyDmg = 0
let playerDmg = 0
let coins = 0
const playerCard = document.querySelector(".player")
const enemyCard = document.querySelector(".enemy")
let randomEnemy = 0
const attackButton = document.querySelector("button")
const result = document.querySelector(".fightResult")
const coinCount = document.querySelector("h5")
function enemySelect() {
    randomEnemy = Math.floor(Math.random()*3)
}
enemySelect()
function innerStuff() {
    playerCard.innerHTML = `
<h1>${player[0].name}</h1>
<img src="${player[0].img}"> 
<div class="d-flex justify-content-between">
  <img class="weaponSize" src="${weapons.sword.img}">
  <img  class="weaponSize" src="${weapons.magicWand.img}">
  <img  class="weaponSize" src="${weapons.bow.img}">
  </div>
${playerHP} HP<div class="playerHP"></div>`


    enemyCard.innerHTML = `
<h1>${enemies[randomEnemy].name}</h1>
<img src="${enemies[randomEnemy].img}">
${enemyHP} HP<div class="enemyHP"></div>`
}
innerStuff()
chooseWeapon()
function updateHp() {
    attackButton.style.pointerEvents="revert"

    playerCard.innerHTML = `
<h1>${player[0].name}</h1>
<img src="${player[0].img}">   
<div class="d-flex justify-content-between">
  <img class="weaponSize" src="${weapons.sword.img}">
  <img  class="weaponSize" src="${weapons.magicWand.img}">
  <img  class="weaponSize" src="${weapons.bow.img}">
  </div>
  
${playerHP} HP<div class="playerHP"></div>`
    keepWeapon()
    document.querySelector(".playerHP").style.width = playerHP + '%'
    enemyCard.innerHTML = `
<h1>${enemies[randomEnemy].name}</h1>
<img src="${enemies[randomEnemy].img}">

${enemyHP} HP<div class="enemyHP"></div>

`
    document.querySelector(".enemyHP").style.width = enemyHP + '%'

}

attackButton.onclick = () => {
    playerDmg = Math.floor(Math.random()*player[0].maxDamage)
    enemyDmg = Math.floor(Math.random()*enemies[randomEnemy].maxDamage)
enemyHP = enemyHP - playerDmg
    playerHP = playerHP - enemyDmg
    console.log("Player HP:",playerHP,"Enemy Dmg:",enemyDmg,"Player Dmg:", playerDmg)
    updateHp()
    fightResult()
chooseWeapon()
    countCoins()
}

function fightResult() {
    if (playerHP <= 0 &&  enemyHP <= 0) {
        document.querySelector(".enemyHP").style.width = "0.1%"
        document.querySelector(".playerHP").style.width = "0.1%"
        result.innerHTML = `
    <h1>BOTH DEAD</h1>
<button class="resetB">new fight</button>`
        newFightButton()
        attackButton.style.pointerEvents="none"

    }
else if (playerHP <= 0) {
        document.querySelector(".playerHP").style.width = "0.1%"
    result.innerHTML = `
    <h1>YOU LOST</h1>
<button class="resetB">new fight</button>`
newFightButton()
    attackButton.style.pointerEvents="none"

} else if ( enemyHP <= 0 ) {
        document.querySelector(".enemyHP").style.width = "0.1%"
    result.innerHTML = `
    <h1>ENEMY LOST</h1>
<button class="resetB">new fight</button>`
    newFightButton()
    attackButton.style.pointerEvents="none"
 }


}
function newFightButton() {
    const newFightB = document.querySelector(".resetB")
    newFightB.onclick = () => {
        result.innerHTML = ""
        // playerHP = 100
        enemyHP = 100

        updateHp()
        enemySelect()
        // coins = 0
        coinCount.innerHTML = `Your Money: ${coins}`
    }
}

function chooseWeapon() {
    const weaponChoice = document.querySelectorAll(".weaponSize")
    for (let i = 0; i < weaponChoice.length; i++) {
        weaponChoice[i].onclick = () =>{
            if (weaponChoice[i] === weaponChoice[0]) {
                player[0].maxDamage = 10
                weaponChoice[i].classList.add("selectedWeapon")
                weaponChoice[1].classList.remove("selectedWeapon")
                weaponChoice[2].classList.remove("selectedWeapon")

            }
            if (weaponChoice[i] === weaponChoice[1]) {
                player[0].maxDamage = 12
                weaponChoice[i].classList.add("selectedWeapon")
                weaponChoice[0].classList.remove("selectedWeapon")
                weaponChoice[2].classList.remove("selectedWeapon")
            }
            if (weaponChoice[i] === weaponChoice[2]) {
                player[0].maxDamage = 17
                weaponChoice[i].classList.add("selectedWeapon")
                weaponChoice[0].classList.remove("selectedWeapon")
                weaponChoice[1].classList.remove("selectedWeapon")
            }
        }}
}
function keepWeapon() {
if (player[0].maxDamage === 10) {
    const weaponChoice = document.querySelectorAll(".weaponSize")
     weaponChoice[0].classList.add("selectedWeapon")
     weaponChoice[1].classList.remove("selectedWeapon")
     weaponChoice[2].classList.remove("selectedWeapon")
let chance = Math.random()
    if (chance >= 0.75) {
        playerHP += enemyDmg
        console.log("Attack Dodged", enemyDmg)
        playerCard.innerHTML = `
<h1>${player[0].name}</h1>
<img src="${player[0].img}">   
<div class="d-flex justify-content-between">
  <img class="weaponSize" src="${weapons.sword.img}">
  <img  class="weaponSize" src="${weapons.magicWand.img}">
  <img  class="weaponSize" src="${weapons.bow.img}">
  </div>
  
${playerHP} HP<div class="playerHP"></div>`
        // weaponChoice[0].classList.add("selectedWeapon")
    }
 }
    if (  player[0].maxDamage === 12) {
        const weaponChoice = document.querySelectorAll(".weaponSize")
        weaponChoice[1].classList.add("selectedWeapon")
        weaponChoice[0].classList.remove("selectedWeapon")
        weaponChoice[2].classList.remove("selectedWeapon")
 playerHP += Math.floor(Math.random()*5)
    }
    if (   player[0].maxDamage === 17) {
        const weaponChoice = document.querySelectorAll(".weaponSize")
        weaponChoice[2].classList.add("selectedWeapon")
        weaponChoice[0].classList.remove("selectedWeapon")
        weaponChoice[1].classList.remove("selectedWeapon")
        let chance = Math.random()
        if(chance >= 0.5){
            playerDmg = Math.floor(Math.random()*player[0].maxDamage)
            enemyHP = enemyHP - playerDmg
            console.log("Double Attack", playerDmg)
        }
    }
}
function countCoins() {
    coins += Math.round(Math.random()*10)
    coinCount.innerHTML = `Your Money: ${coins}`
}
const potion = document.querySelector(".potion")
potion.innerHTML = `Potion 50$
<img class="potionSize" src="${weapons.potion.img}">Fully Heals <br>
`
potion.onclick = () => {
    if (coins >= 50){
    playerHP = 100
   updateHp()
    coins -= 50
        coinCount.innerHTML = `Your Money: ${coins}`}
}



