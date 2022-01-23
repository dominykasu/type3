import React from 'react';
import {useContext} from "react";
import context from "../context/context";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {updateInventory} from "../features/inventory";
const Weapons = () => {
    const {trader} = useContext(context)

    const dispatch = useDispatch()

    const inventorySlots = useSelector((state)=> state.character.value.inventorySlots)

    let inventory = useSelector((state)=> state.inventory.value)
    function buyWeapon(x){
        if (inventory.length < inventorySlots){
                dispatch(updateInventory([...inventory,x]))
    }

}



    return (

        <div className="d-flex f-wrap" >

            {trader.weapons.map((x,index)=><div key={index} onClick={() => buyWeapon(x,index)}>
                <img src={x.image}/>
                <p>Price: {x.price}</p>
                <p>Max Damage: {x.maxDamage}</p>
                <p>Energy Per hit: {x.energyPerHit}</p>
                <div className="d-flex">
                     Effects: {x.effects.map((x,index)=>
                <div key={index}>{x} </div>
                )}</div>


            </div>)}
        </div>
    );
};

export default Weapons;

// maxDamage: 4,
//     price: 50,
//     energyPerHit: 20,
//     effects: []