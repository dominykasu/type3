import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import './App.css';
import Shop from "./components/Shop";
import Inventory from "./components/Inventory";
import context from "./context/context";
import {useState} from "react";
function App() {

    const helmet = ["https://lineage.pmfun.com/data/img/armor_leather_helmet_i00_0.png","https://lineage.pmfun.com/data/img/armor_helmet_i00_0.png",
        "https://lineage.pmfun.com/data/img/armor_helmet_i00_0.png","https://lineage.pmfun.com/data/img/armor_leather_helmet_i00_0.png"]
    const armor = ["https://lineage.pmfun.com/data/img/armor_t89_ul_i00.png","https://lineage.pmfun.com/data/img/armor_t90_ul_i00_0.png",
        "https://lineage.pmfun.com/data/img/armor_t77_ul_i00_0.png","https://lineage.pmfun.com/data/img/armor_t85_ul_i00_0.png" ]
    const gloves = ["https://lineage.pmfun.com/data/img/armor_t89_g_i00_0.png","https://lineage.pmfun.com/data/img/armor_t90_g_i00_0.png",
        "https://lineage.pmfun.com/data/img/armor_t77_g_i00_0.png","https://lineage.pmfun.com/data/img/armor_t85_g_i00_0.png"]
    const boots = ["https://lineage.pmfun.com/data/img/armor_t89_b_i00_0.png","https://lineage.pmfun.com/data/img/armor_t90_b_i00_0.png",
        "https://lineage.pmfun.com/data/img/armor_t77_b_i00_0.png","https://lineage.pmfun.com/data/img/armor_t85_b_i00_0.png"]
  // const allItems =[
  //     {
  //     draconic: {
  //       armor: "https://lineage.pmfun.com/data/img/armor_t89_ul_i00.png",
  //       helmet: "https://lineage.pmfun.com/data/img/armor_leather_helmet_i00_0.png",
  //       gloves: "https://lineage.pmfun.com/data/img/armor_t89_g_i00_0.png",
  //       boots: "https://lineage.pmfun.com/data/img/armor_t89_b_i00_0.png"
  //     }
  //     ,
  //     arcana: {
  //       armor: "https://lineage.pmfun.com/data/img/armor_t90_ul_i00_0.png",
  //       helmet: "https://lineage.pmfun.com/data/img/armor_helmet_i00_0.png",
  //       gloves: "https://lineage.pmfun.com/data/img/armor_t90_g_i00_0.png",
  //       boots: "https://lineage.pmfun.com/data/img/armor_t90_b_i00_0.png"
  //     }
  //     ,
  //     tallum: {
  //       armor: "https://lineage.pmfun.com/data/img/armor_t77_ul_i00_0.png",
  //       helmet: "https://lineage.pmfun.com/data/img/armor_helmet_i00_0.png",
  //       gloves: "https://lineage.pmfun.com/data/img/armor_t77_g_i00_0.png",
  //       boots: "https://lineage.pmfun.com/data/img/armor_t77_b_i00_0.png"
  //     }
  //     ,
  //     majestic: {
  //         armor: "https://lineage.pmfun.com/data/img/armor_t85_ul_i00_0.png",
  //         helmet: "https://lineage.pmfun.com/data/img/armor_leather_helmet_i00_0.png",
  //         gloves: "https://lineage.pmfun.com/data/img/armor_t85_g_i00_0.png",
  //         boots: "https://lineage.pmfun.com/data/img/armor_t85_b_i00_0.png"
  //     }
  //   }]


  return (
      <context.Provider value={{helmet, armor, gloves, boots}}>
      <BrowserRouter>
    <div className="App">
      <Link to="/shop">Shop</Link>
      <Link to="/inventory">Inventory</Link>
        <div className="char"></div>
    </div>
        <Routes>
          <Route path="/shop" element={<Shop/>}>
          </Route>
          <Route path="/inventory" element={<Inventory/>}>
          </Route>
        </Routes>
      </BrowserRouter>
      </context.Provider>
  );
}

export default App;
