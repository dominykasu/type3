// import React from 'react';
// import context from "../context/context";
// import {useContext} from "react";
// import {useEffect} from "react";
// import {useState} from "react";
// const EnemyArenaDrop = ({getMonsterDrops}) => {
//
// const [getItems,setItems] = useState([])
//
//     const {dropItems} = useContext(context)
//
//
//
//
//
//     for (let i = 0; i < getMonsterDrops; i++) {
//         // let randomDropNum = Math.round(Math.random()*10)
//         // let selectRandomDrop = Math.round(Math.random()*79)
//         // console.log(randomDropNum, selectRandomDrop, getMonsterDrops, getItems)
//         // console.log(randomDropNum)
//
//         if (Math.round(Math.random()*10) > 5) {
//             setItems([dropItems[Math.round(Math.random()*79)]])
//             console.log("aa")
//         }
//
//
//     }
//
//
//     console.log(getItems)
//
//     return (
//         <div>
//             <h1>ARENADROP</h1>
//             {getItems.map((x,index)=><div key={index}>
//             <img src={x.image}/>
//             <p>{x.price}</p>
//             </div>)}
//         </div>
//     );
// };
//
// export default EnemyArenaDrop;