const score = document.querySelector(".score")
let baseScore = 0
//create array with 90 false 10 true
let bombArr = []
score.innerHTML = `Score: ${baseScore}`
for (let i = 0; i < 100; i++) {
if(i < 90)
   bombArr.push(false)
    else {
        bombArr.push(true)
}
}
//randomize array
for (let i = bombArr.length -1; i > 0; i--) {
    let j = Math.floor(Math.random() * i)
    let k = bombArr[i]
    bombArr[i] = bombArr[j]
    bombArr[j] = k
    k = bombArr
}

//add 100 cards to container
const container = document.querySelector(".container")
for (let i = 0; i < bombArr.length; i++) {

    container.innerHTML += `
    <div class="card"></div>
    `
    }

// add bomb to true, add noBomb to false
const cardClass = document.querySelectorAll(".card")
for (let i = 0; i < bombArr.length; i++) {
    if (bombArr[i] === true){
        cardClass[i].classList.add("bomb")}
    else {
        cardClass[i].classList.add("noBomb")
    }
}
//what happens when you click on bomb/noBombs
for (let i = 0; i < cardClass.length; i++) {
    cardClass[i].onclick = () => {

       if (cardClass[i].classList.contains("bomb")){
           cardClass[i].classList.add("red")
           score.innerHTML = `GAME OVERRR - new game in 3 seconds`
           reveal()
           timedRefresh()
       } else {
           cardClass[i].classList.add("green")
           baseScore += 10
           score.innerHTML = `Score: ${baseScore}`
       }
    }}

//refreshes page on game over
function timedRefresh() {
    setTimeout("location.reload()", 3000);
}
//reveal all bombs
function reveal() {
    for (let i = 0; i < cardClass.length; i++) {
            if (cardClass[i].classList.contains("bomb")){
                cardClass[i].classList.add("red")
           } else {
                cardClass[i].classList.add("green")
            }
        }
}

