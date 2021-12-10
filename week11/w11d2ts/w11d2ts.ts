// fetch('https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1')
//     .then(app => app.json())
//     .then(database => {
//         console.log(database)
//     })

// nd09p4kjijv0
const dealCards:HTMLElement = document.getElementById("deal")!
const playerCards:HTMLElement = document.getElementById("pCards")!
const pcCards:HTMLElement = document.getElementById("pcCards")!
const reshuffle:HTMLElement = document.getElementById("reshuffle")!
const playerScore:HTMLElement = document.getElementById("playerScore")!
const pcScore:HTMLElement = document.getElementById("pcScore")!
let playerScoreTotal:number = 0
let pcScoreTotal:number = 0
let playerCardsArr:any[] = []
let pcCardsArr:any[] = []
const hit = document.getElementById("hit")
// const pcHit = document.getElementById("pcHit")
const results = document.getElementById("result")
reshuffle.onclick = () => {
    fetch('https://deckofcardsapi.com/api/deck/nd09p4kjijv0/shuffle/')
        .then(app => app.json())
        .then(shuffle => {
            console.log(shuffle)})}

dealCards.onclick = () => {
    console.log("dealcards onclick")
    playerCardsArr = []
    pcCardsArr = []
    hit.style.pointerEvents = "revert"
    playerCards.innerHTML = null
    pcCards.innerHTML = null
    playerScoreTotal = 0
    pcScoreTotal = 0
    results.innerText = null
    fetch('https://deckofcardsapi.com/api/deck/nd09p4kjijv0/draw/?count=4')
        .then(app => app.json())
        .then(database => {
            playerCardsArr.push(database.cards[0], database.cards[1])
            pcCardsArr.push(database.cards[2], database.cards[3])
            localStorage.setItem("PlayerCards", JSON.stringify(playerCardsArr))
            localStorage.setItem("PcCards", JSON.stringify(pcCardsArr))
            console.log("run countscore function on dealclick")
            countScore()

            playerCards.innerHTML = `
            <div class="playerCard1"><img src="${database.cards[0].image}"></div>
           <div class="playerCard2"><img src="${database.cards[1].image}"></div>
           `
                playerScore.innerHTML = `<div>${playerScoreTotal}</div>`
            pcCards.innerHTML = `
            <div class="pcCard1"><img src="${database.cards[2].image}"></div>
           <div class="pcCard2"><img src="${database.cards[3].image}"></div>
            `
            pcScore.innerHTML = `<div>${pcScoreTotal}</div>`

           // autoPc()
            console.log("second countscore function on deal click")
            countScore()


        })

}
function countScore() {
    console.log("countscore function")
    playerScoreTotal = 0
    pcScoreTotal = 0
    playerCardsArr.map(x => {

     if (x.value === "QUEEN" || x.value === "KING" || x.value === "JACK")
     {  playerScoreTotal += 10 }
     else if (x.value === "ACE")
     {  playerScoreTotal += 11 }
     else {
         playerScoreTotal +=  parseInt(x.value)
     }
    })

    pcCardsArr.map(x => {
        if (x.value === "QUEEN" || x.value === "KING" || x.value === "JACK")
        {  pcScoreTotal += 10 }
        else if (x.value === "ACE")
        {  pcScoreTotal += 11 }
        else {
            pcScoreTotal +=  parseInt(x.value)
        }
    })

    if (playerScoreTotal <= 21 && playerScoreTotal > pcScoreTotal){
        // console.log("run autoPC function if playerscore <21 and > pcscore")
        // autoPc()
    }
    console.log(playerScoreTotal,pcScoreTotal)
    autoPc()
    totalResults()
    // console.log("countscore function run total results function")
    // totalResults()

}
hit.onclick = () => {
    console.log("hit on click runs countscore func")
    fetch('https://deckofcardsapi.com/api/deck/nd09p4kjijv0/draw/?count=1')
        .then(app => app.json())
        .then(onecard => {
            playerCardsArr.push(onecard.cards[0])

            localStorage.setItem("PlayerCards", JSON.stringify(playerCardsArr))

            countScore()
            // autoPc()
              playerCards.innerHTML += `
                <div class="playerCard1"><img src="${onecard.cards[0].image}"></div>
                `
            playerScore.innerHTML = `<div>${playerScoreTotal}</div>`

            // totalResults()
            // console.log(playerScoreTotal,pcScoreTotal)

        })
}

function autoPc() {
    console.log("autoPC function")
    if (playerScoreTotal>21){
        console.log("autosPcC>21")
    }
   else if (playerScoreTotal > pcScoreTotal) {
            fetch('https://deckofcardsapi.com/api/deck/nd09p4kjijv0/draw/?count=1')
        .then(app => app.json())
        .then(onecard => {
            pcCardsArr.push(onecard.cards[0])
            countScore()
            localStorage.setItem("PcCards", JSON.stringify(pcCardsArr))
            pcCards.innerHTML += `
                <div class="pcCard1"><img src="${onecard.cards[0].image}"></div>
                `
            pcScore.innerHTML = `<div>${pcScoreTotal}</div>`
    })

}

}
function totalResults() {
    console.log("total results function")
    console.log(playerScoreTotal,pcScoreTotal)
    if (playerScoreTotal > 21)
    {results.innerText=`Player Lost`
    hit.style.pointerEvents = "none"}
if (pcScoreTotal > 21){
    results.innerText = `Player won`
    hit.style.pointerEvents = "none"
}
    if (pcScoreTotal === 21 && playerScoreTotal ===21) {
        results.innerText = `DRAW`
        hit.style.pointerEvents = "none"
    }

}