
import {useContext} from "react";
import MainContext from "../context/MainContext";

const SecondPage = () => {
    const {getUser, setUser} = useContext(MainContext)
function newUser() {
        const user = {
            name:"Petras",
            age:19,
            city:"Kaunas"
        }
    setUser(user)
}
    return (
        <div>
            <div>cia antrasis komp - Pirmojo vaikas</div>
            {getUser.city} {getUser.name} {getUser.age}
            <button onClick={newUser}>Create User</button>
        </div>
    );
};

export default SecondPage;