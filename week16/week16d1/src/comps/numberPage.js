import React from 'react';
import MainContext from "../context/MainContext";
import {useContext} from "react";

const NumberPage = () => {

const {setNumber} = useContext(MainContext)

    function Number() {
        const newNumber=5
        setNumber(newNumber)
    }
    return (
        <div>
            <h1>This is number page</h1>
<button onClick={Number}>Number</button>
        </div>
    );
};

export default NumberPage;