const getCardsButton: HTMLElement = document.querySelector(".getCards")!
const playerContainer: HTMLElement = document.querySelector(".player")!
const dealerContainer: HTMLElement = document.querySelector(".dealer")!
const playButtons: HTMLElement = document.querySelector(".playButtons")!
const hit: HTMLElement = document.querySelector(".hit")!
const stand: HTMLElement = document.querySelector(".stand")!
const playerPoints: HTMLElement = document.querySelector(".playerPoints")!
const dealerPoints: HTMLElement = document.querySelector(".dealerPoints")!
const reshuffle:HTMLElement = document.getElementById("reshuffle")!

interface CardObject {
    code: string,
    image: string,
    suit: string,
    value: string,
    images: object
}
interface PointsObject {
    player:number,
    dealer:number
}
const playerCards: CardObject[] = []
const dealerCards: CardObject[] = []

const points:PointsObject = {
    player: 0,
    dealer: 0
}

function countPoints() {
    const counter = (who: keyof PointsObject) => {
        let arr = who === "player" ? playerCards : dealerCards

        points[who] = 0
        arr.map(x => {
            if(Number(x.value)) {
                points[who] += Number(x.value)
            }
            if(x.value === "QUEEN" || x.value === "KING" || x.value === "JACK") {
                points[who] += 10
            }
            if(x.value === "ACE") {
                points[who] += 11
            }
        })

        let aces = arr.filter(x => x.value === "ACE")

        if(aces.length >= 1 && points[who] > 21) {
            points[who] -= 10
        }
    }
    counter("player")
    counter('dealer')

    playerPoints.innerText = String(points.player)
    dealerPoints.innerText = String(points.dealer)

    console.log(points)
}

function appendStartCards(arr: CardObject[]) {
    playerCards.push(arr[0], arr[1])
    dealerCards.push(arr[2], arr[3])
    appendCards()

    getCardsButton.style.display = "none"
    playButtons.style.display = "flex"
}

function appendCards() {
    playerContainer.innerHTML = ""
    playerCards.map(x => {
        playerContainer.innerHTML += `
                <div class="card">
                    <img src="${x.image}" alt="">
                </div>
        `
    })

    dealerContainer.innerHTML = ""
    dealerCards.map(x => {
        dealerContainer.innerHTML += `
                <div class="card">
                    <img src="${x.image}" alt="">
                </div>
        `
    })

    countPoints()
}

function dealerGetsCard() {
    if(points.dealer < 16) {
        fetch("https://deckofcardsapi.com/api/deck/nd09p4kjijv0/draw/?count=1")
            .then(res => res.json())
            .then(data => {
                dealerCards.push(data.cards[0])
                appendCards()
            })
    }
}

getCardsButton.onclick = () => {
    fetch("https://deckofcardsapi.com/api/deck/nd09p4kjijv0/draw/?count=4")
        .then(res => res.json())
        .then(data => {
            appendStartCards(data.cards)
dealerGetsCard()
            countPoints()
            dealerGetsCard()
            countPoints()
        })


}
hit.onclick = () => {
    fetch("https://deckofcardsapi.com/api/deck/nd09p4kjijv0/draw/?count=1")
        .then(res => res.json())
        .then(data => {
            playerCards.push(data.cards[0])
            appendCards()
            dealerGetsCard()
        })
}
reshuffle.onclick = () => {
    fetch('https://deckofcardsapi.com/api/deck/nd09p4kjijv0/shuffle/')
        .then(app => app.json())
        .then(shuffle => {
            console.log(shuffle)})}