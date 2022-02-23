import {useRef} from 'react';
import http from "../plugins/http"
import {useNavigate} from "react-router-dom"


const RegisterPage = () => {
    const emailRef = useRef()
    const pass1Ref = useRef()
    const pass2Ref = useRef()

    const nav = useNavigate()

    function registerUser() {
        const user = {
            email: emailRef.current.value,
            password: pass1Ref.current.value,
            passwordTwo: pass2Ref.current.value
        }

        http.post(user, "register").then(res => {
            console.log(res)
            if(res.success) {
                nav('/login')
            }
        })
    }

    return (
        <div>
            <input type="text" ref={emailRef} placeholder="email"/>
            <input type="text" ref={pass1Ref}  placeholder="pass one"/>
            <input type="text" ref={pass2Ref}  placeholder="pass two"/>

            <button onClick={registerUser}>Register</button>
        </div>
    );
};

export default RegisterPage;