import './App.css';

import {BrowserRouter, Routes, Route} from "react-router-dom";
import RegisterPage from "./Pages/RegisterPage";
import LoginPage from "./Pages/LoginPage";
import ProfilePage from "./Pages/ProfilePage";
import Header from "./components/header";
import SingleAuctionPage from "./Pages/SingleAuctionPage";
import UserAuctions from "./components/userAuctions";
import UserBids from "./components/UserBids";
function App() {


  return (
      <div>
        <BrowserRouter>
            <Header/>
          <Routes>
            <Route path="/register" element={<RegisterPage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/info" element={<ProfilePage/>}/>
              <Route path="/auction/:id" element={<SingleAuctionPage/>}/>
              <Route path="/myauctions" element={<UserAuctions/>}/>
              <Route path="/mybids" element={<UserBids/>}/>
          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
