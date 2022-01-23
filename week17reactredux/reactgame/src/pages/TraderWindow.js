import React from 'react';
import Toolbar from "../components/Toolbar";
import Weapons from "../components/Weapons";
import Potions from "../components/Potions";
import {useState} from "react";
import Inventory from "../components/Inventory";
import CharacterInfo from "../components/CharacterInfo";
const TraderWindow = () => {

const [getShop, setShop] = useState(true)

    return (
        <div>
            <Toolbar/>
            Trader Window

            <div className="d-flex">
                <div onClick={()=>setShop(true)}>Weapons</div>
                <div onClick={()=>setShop(false)}>Potions</div>
            </div>
<div className="d-flex">
            <div className="w-50">
                {getShop ? <Weapons/> : <Potions/>}
            </div>
            <div className="w-50">
            <Inventory/>
            </div>
</div>
</div>

    );
};

export default TraderWindow;