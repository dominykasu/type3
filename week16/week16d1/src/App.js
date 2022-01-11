
import './App.css';
// import MainContext from "./context/MainContext";
// import FirstPage from "./comps/firstPage";
// import {useState} from "react";
import { BrowserRouter, Routes, Route, Link} from "react-router-dom"
import WordMain from "./comps/wordMain";
import NumberMain from "./comps/numberMain";

import MainContext from "./context/MainContext";
import {useState} from "react";

function App() {

  // const [getUser, setUser] = useState({
  //   name:"Tomas",
  //   age:20,
  //   city:"Vilnius"
  // })
const [getNumber, setNumber] = useState()
    const [getWord, setWord] = useState()
  return (
//       <MainContext.Provider value={{getUser,setUser}}>
      <MainContext.Provider value={{setNumber, setWord}}>
    <div className="App">

        <h1>{getNumber}</h1><h1>{getWord}</h1>
      <BrowserRouter>
          <Link to="/">Home</Link>
          <Link to="/number">Number</Link>
          <Link to="/word">Word</Link>
        <Routes>
            <Route path="/"></Route>
          <Route path="number" element={<NumberMain/>}>
          </Route>
          <Route path="word" element={<WordMain/>}>
          </Route>
        </Routes>
{/*// <FirstPage/>*/}
      </BrowserRouter>
    </div>
</MainContext.Provider>
//       </MainContext.Provider>
  );
}

export default App;
