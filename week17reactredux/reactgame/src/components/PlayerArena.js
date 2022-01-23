import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import Inventory from "./Inventory";
import {useState} from "react";
import {updateInventory} from "../features/inventory";
import {updateWeapon} from "../features/weapon";
const PlayerArena = () => {

    const character = useSelector((state)=> state.character.value)
    const weapon = useSelector((state)=> state.weapon.value)
    const inventory = useSelector((state)=> state.inventory.value)
    const inventorySlots = useSelector((state)=> state.character.value.inventorySlots)

    const dispatch = useDispatch()

    console.log(weapon)
    console.log(Object.keys(weapon).length)


    function loseWeapon(){
        if(inventory.length < inventorySlots){
            console.log(weapon)
            dispatch(updateInventory([...inventory,weapon]))
            dispatch(updateWeapon([]))

        }
        else {
            console.log("inv full")
        }
    }

    return (
        <div>
            <h1 className="align-c">Your Character</h1>
            <div className="d-flex f-wrap">



                <div className="align-c mainCard">
                    <div className="d-flex">
                        <img src={character.image}/>
                        <h2>Weapon Slot</h2>
                        {Object.keys(weapon).length === 0 ? "" : <img onClick={loseWeapon} src={weapon.image}/>}

                    </div>
                    <div>HP BAR</div>
                    <div>Energy bar</div>
                    <h1>{character.race}</h1>
                    { Object.keys(weapon).length > 0 && <div>

                        {weapon.effects.map((x,index) =><div key={index}> Effects: {x}</div>)}
                    </div>}
                    <p>Damage: {character.damage} {Object.keys(weapon).length > 0 && <span>+ 0 ~ {weapon.maxDamage}</span>}</p>
                    <p>Health: {character.health}</p>
                    <p>Energy: {character.energy} {Object.keys(weapon).length > 0 && <span>- {weapon.energyPerHit} per hit</span>}</p>
                    <p>Stamina: {character.stamina}</p>
                    <p>Strength: {character.strength}</p>
                    <p>Inventory Slots: {character.inventorySlots}</p>
                    <p>Your Gold: {character.gold}</p>
<Inventory/>
                </div>
            </div>
        </div>
    );
};

export default PlayerArena;