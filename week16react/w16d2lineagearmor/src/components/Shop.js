import {useContext} from "react";
import context from "../context/context";
const Shop = () => {
    const {helmet} = useContext(context)
    const {armor} = useContext(context)
    const {gloves} = useContext(context)
    const {boots} = useContext(context)


    return (
        <div>
            <h1>This is shop</h1>

            {helmet.map((x, index) => (<img src={x} key={index}></img>))}
            {armor.map((x, index) => (<img src={x} key={index}></img>))}
            {gloves.map((x, index) => (<img src={x} key={index}></img>))}
            {boots.map((x, index) => (<img src={x} key={index}></img>))}
        </div>
    );
};

export default Shop;