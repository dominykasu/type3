import React from 'react';
import {useContext} from "react";
import context from "../context/context";
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {updateInventory} from "../features/inventory";

const Potions = () => {
    const {trader} = useContext(context)
    console.log(trader)
    let inventory = useSelector((state)=> state.inventory.value)
    const inventorySlots = useSelector((state)=> state.character.value.inventorySlots)
    const dispatch = useDispatch()

    function buyPotion(x){
        console.log(x)
        console.log(inventory.length, inventorySlots)
        if (inventory.length < inventorySlots){
            dispatch(updateInventory([...inventory,x]))
        }
        console.log(inventory)
    }

    return (
        <div className="d-flex f-wrap" >
            {trader.potions.map((x,index)=><div  onClick={() => buyPotion(x,index)} key={index}>
                <img src={x.image}/>

            </div>)}
        </div>
    );
};

export default Potions;