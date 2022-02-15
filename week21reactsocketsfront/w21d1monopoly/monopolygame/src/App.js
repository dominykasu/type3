import React, {useEffect, useRef, useState} from 'react';
import './App.css';
import io from "socket.io-client"
const socket = io.connect("http://localhost:4000")

const App = () => {

    const [getMessage, setMessage] = useState([])
let msgArr = []

const message = useRef()

    function sendMessage(){
    socket.emit("myMessage", message.current.value)
    }

    useEffect(()=>{
        socket.on("response", (msg) => {
            setMessage([...getMessage,msg])
            // msgArr.push(msg)
            // console.log(msgArr)

        })



    },[getMessage])

    useEffect(()=>{
        socket.on("getId", (test) => {
            console.log(test)
        })

    },[getMessage])


    return (
        <div>
            <div className="textChat">

                {getMessage.map((x,index) => <p key={index}> {x} </p>)}
            </div>
<input type="text" ref={message}/>
            <button onClick={sendMessage}>Send</button>
        </div>
    );
};

export default App;