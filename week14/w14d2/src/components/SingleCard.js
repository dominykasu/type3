// import React from 'react';
// const SingleCard = ({card, handleChoice, flipped}) => {
//
//     function handleClick() {
//         handleChoice(card)
//     }
//
//
//
//     return (
//
//             <div className="cards">
//                 <div className={flipped ? "flipped" : ""}>
//                 <img className="front" src={card.image}/>
//                 <img className="back" onClick={handleClick} src="https://i.pinimg.com/236x/74/0b/df/740bdfde43a6acc7dd91ae8818ad4f7d--black-card-card-deck.jpg"/>
//                     </div>
//             </div>
//
//     );
// };
// export default SingleCard;
import React from 'react';

const SingleCard = ({card, selectCard, flipped}) => {
    return (

            <div className="cards">
                <div className={flipped ? "flipped" : ""}>
                    <img className="front" src={card.image}/>
                    <img onClick={() => selectCard(card)} className="back" src="https://i.pinimg.com/236x/74/0b/df/740bdfde43a6acc7dd91ae8818ad4f7d--black-card-card-deck.jpg"/>
                </div>
            </div>

    );
};

export default SingleCard;