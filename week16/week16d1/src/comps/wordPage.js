import React from 'react';
import MainContext from "../context/MainContext";
import {useContext} from "react";

const WordPage = () => {
    const {setWord} = useContext(MainContext)
    function Word(){
        const newWord = "Partly sunny"
        setWord(newWord)
    }
    return (
        <div>
            <h1>This is word Page</h1>
<button onClick={Word}>Send Word</button>
        </div>
    );
};

export default WordPage;