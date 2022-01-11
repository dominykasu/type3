import {useState, useEffect} from "react"
import './App.css';
import SingleCard from "./components/SingleCard";



function App() {

const [cards, setCards] = useState([])

    const [firstChoice, setFirstChoice] = useState(false)
    const [secondChoice, setSecondChoice] = useState(false)

    useEffect(() => {
        fetch("https://deckofcardsapi.com/api/deck/2lgdcmg9o97i/shuffle/")
            .then(app => app.json())
            .then(database => {})

        fetch("https://deckofcardsapi.com/api/deck/2lgdcmg9o97i/draw/?count=52")
            .then(app => app.json())
            .then(database => {
                  setCards(database.cards)
            })

    },[])
// const [firstChoice, setFirstChoice] = useState(null)
//     const [secondChoice, setSecondChoice] = useState(null)
//
//     function handleChoice(card) {
//         console.log(card)
//         firstChoice ? setSecondChoice(card) : setFirstChoice(card)
//     }
//
// useEffect(()=> {
//     if (firstChoice && secondChoice) {
//         if (firstChoice.value === secondChoice.value) {
//             console.log("cards match")
//
//              setCards(
//                 prevCards => {
//                 return prevCards.map(card => {
//                     if (card.value === secondChoice.value) {
//
// return{...card, Matched:true}}
//                         else {
//                             return card
//                         }
//
//                 })
//             })
//
//         } else {
//             console.log("cards dont match")
//             setFirstChoice(null)
//             setSecondChoice(null)
//         }
//     }
//
// },[firstChoice, secondChoice])



function selectCard(card) {
    console.log(card)
    {firstChoice ? setSecondChoice(card.value) : setFirstChoice(card.value)}

}

useEffect(() => {
    if (firstChoice && secondChoice) {
        if (firstChoice === secondChoice) {
            console.log(firstChoice,secondChoice)
            console.log("cards match")
            setFirstChoice(false)
            setSecondChoice(false)
}else{
            console.log("dont match")
            setFirstChoice(false)
            setSecondChoice(false)
        }
    }})

  return (
    <div className="cardGrid">
        {cards.map((cards,index) => (
 <SingleCard card={cards} key={index} selectCard={selectCard} />
               ))}
{/*        {cards.map((card, index) => (*/}
{/*<SingleCard card={card} key={index} handleChoice={handleChoice} flipped={card === firstChoice || card === secondChoice || card.Matched}/>*/}
{/*        ))}*/}
    </div>
  );
}

export default App;
