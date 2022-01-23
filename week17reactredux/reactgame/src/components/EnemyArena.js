import React, {useContext} from 'react';
import context from "../context/context";
import {useNavigate} from "react-router";
import {useState} from "react";
import {useEffect} from "react";
import EnemyArenaDrop from "./EnemyArenaDrop";
import {useSelector} from "react-redux";
const EnemyArena = () => {
    let navigate = useNavigate();
    const {monsters} = useContext(context)
const [getMonster, setMonster] = useState({})
const [getEnemyButton, setEnemyButton] = useState(true)
const [getKilled, setKilled] = useState(false)
    const [getMonsterHp, setMonsterHp] = useState(0)
const [getPlayerHp, setPlayerHp] = useState(0)
    const character = useSelector((state)=> state.character.value)


    let monsterDamage = getMonster.maxDamage
    let playerDamage = character.damage
    // let totalHpLeft = getPlayerHp - damage
    let playerHpPercentLeft = getPlayerHp / 100 * monsterDamage
    let playerBalPercent = (100 - playerHpPercentLeft )

    let monsterHpPercentLeft = getMonsterHp / 100 * playerDamage
    let monsterBalPercent = (100 - monsterHpPercentLeft )
    console.log(character)

    function selectMonster(){
        let randomNum = Math.floor(Math.random() * 39);
        setMonster(monsters[randomNum])
        // console.log(getMonster)
        setEnemyButton(false)
        setKilled(false)
setPlayerHp(character.health)



    }

    useEffect(()=>{
        setMonsterHp(getMonster.health)

    },[getMonster])



    function attackMonster(){
        // enemyHealth = getMonster.health
        setMonsterHp(getMonsterHp - 500)

        console.log(monsterDamage, playerDamage)
        if (getMonsterHp <= 0){
            setKilled(true)
            setEnemyButton(false)
        }
    }



    const containerStyles = {
        height: 20,
        width: '100%',
        backgroundColor: "#e0e0de",
        borderRadius: 50,
        margin: 50
    }

    const fillerStyles = {
        height: '100%',
        width: `${playerBalPercent}%`,
        backgroundColor: "red",
        borderRadius: 'inherit',
        textAlign: 'right'
    }

    const labelStyles = {
        padding: 5,
        color: 'white',
        fontWeight: 'bold'
    }
    useEffect(() => {
        // setInterval(() => setPlayerHp(Math.floor(Math.random() * 100) + 1), 2000);

    }, []);


    return (
        <div className="d-flex">
            <div>
                <div style={containerStyles}>
                    <div style={fillerStyles}>
                        <span style={labelStyles}>{`${playerBalPercent}`}</span>
                    </div>
                </div>

            <div>Your Stamina</div>
                <div>Enemy Hp</div>
                <div style={containerStyles}>
                    <div style={fillerStyles}>
                        <span style={labelStyles}>{`${monsterBalPercent}`}</span>
                    </div>
                </div>
            </div>
            <div>
                {getEnemyButton ? <button onClick={selectMonster}>Find Enemy</button> : ""}
                {getKilled ?  "":<button onClick={attackMonster}>Attack Monster</button> }
                {getKilled ? <div><button onClick={() => {navigate("/shop")}}>Back to shop</button><button onClick={selectMonster}>New Monster</button></div> : ""}
            </div>
            {getEnemyButton ? "" : <div>

                <img src={getMonster.image}/>
                <div>HP BAR</div>
                <h1>{getMonster.name}</h1>
                <p>Health: {getMonster.health}</p>
                <p>Max Damage:{getMonster.maxDamage}</p>
                <p>Max Items:{getMonster.maxItemsDrop}</p>
            </div>}
            {getKilled === true && <EnemyArenaDrop getMonsterDrops={getMonster.maxItemsDrop}/>}
        </div>
    );
};

export default EnemyArena;