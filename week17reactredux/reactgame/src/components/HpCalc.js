import React, {useState} from 'react';
import {useSelector} from "react-redux";
import ArenaWindow from "../pages/ArenaWindow";
const HpCalc = () => {
    const character = useSelector((state)=> state.character.value)
    const [getPlayerHp,setPlayerHp] = useState(character.health)


    return (
        <div>
            
        </div>
    );
};

export default HpCalc;