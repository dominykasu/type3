import './App.css';

import {BrowserRouter, Routes, Route} from "react-router-dom";
import RegisterPage from "./Pages/RegisterPage";
import LoginPage from "./Pages/LoginPage";
import ProfilePage from "./Pages/ProfilePage";
import Header from "./components/header";
function App() {

  return (
      <div>
        <BrowserRouter>
            <Header/>
          <Routes>
            <Route path="/register" element={<RegisterPage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/info" element={<ProfilePage/>}/>

          </Routes>
        </BrowserRouter>
      </div>
  );
}

export default App;
