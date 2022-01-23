import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import {updateInventory} from "../features/inventory";
import {useDispatch} from "react-redux";
import {updateCharacter} from "../features/character";
import {updateWeapon} from "../features/weapon";
import {removeInventory} from "../features/inventory";
import {useState} from "react";
import {useLocation} from "react-router-dom";
const Inventory = () => {
    //char total inv slots
    // const inventorySlots = useSelector((state)=> state.character.value.inventorySlots)
    //show inventory slots
    let weapon = useSelector((state)=> state.weapon.value)
    let inventory = useSelector((state)=> state.inventory.value)
    const dispatch = useDispatch()
    let location = useLocation()
// if weapon is null do not equip


    function equipWeapon(myWeapon, index){
        console.log(weapon)
        if(location.pathname === "/main" && myWeapon.hasOwnProperty("maxDamage") && Object.keys(weapon).length === 0){
        dispatch(updateWeapon(myWeapon))

        dispatch(removeInventory(index))
    }else {
            console.log("selling items from inv to shop")
            console.log("or item doesnt equipt to char because its a potion")
            console.log("or weapon already exists")
        }

    }


    return (
        <div>
<h1>Inventory</h1>
            <div className="d-flex">
            {inventory.map((x,index) => <div className="inventorySlot" onClick={() => equipWeapon(x, index)} key={index}><img src={x.image}/><h3>{x.maxDamage}</h3> </div>)}

            </div></div>
    );
};

export default Inventory;