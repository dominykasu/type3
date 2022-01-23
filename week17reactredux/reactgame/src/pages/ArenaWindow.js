import React from 'react';
import PlayerArena from "../components/PlayerArena";
import EnemyArena from "../components/EnemyArena";
import HpCalc from "../components/HpCalc";



const ArenaWindow = () => {




    return (
        <div className="d-flex">
           <div>
               <PlayerArena/>
           </div>

            <div>
            <EnemyArena/>
        </div>
        </div>
    );
};

export default ArenaWindow;