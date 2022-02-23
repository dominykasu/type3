import React, {useRef} from 'react';
import {useNavigate} from "react-router-dom";
import http from "../plugins/http";

const LoginPage = () => {
    const emailRef = useRef()
    const pass1Ref = useRef()

    const nav = useNavigate()

    function auth() {
        const user = {
            email: emailRef.current.value,
            password: pass1Ref.current.value,
        }

        http.post(user, "login").then(res => {
            if(res.success) {
                nav('/info')
            }
        })
    }

    return (
        <div>
            <input type="text" ref={emailRef} placeholder="email"/>
            <input type="text" ref={pass1Ref}  placeholder="pass one"/>

            <button onClick={auth}>Login</button>
        </div>
    );
};

export default LoginPage;