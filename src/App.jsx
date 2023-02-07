import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Login from './pages/Login';
import Admin from './pages/Admin';

import { Route, Routes } from 'react-router-dom';
import dotenv from "dotenv";

import './App.css';

const App = () => {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/admin" element={(sessionStorage.getItem("pass_key") === "V55WxiB(J%utJc^Yzp5rt^&p$S9ji!XOsk4n7JLrf-2iWroX9kAsifPYjSVtu5JJ&&WF-XjCcsBh58vrdfOzXpbp^IcpsBr$EsHJ8V3itJ2uz99YikcnJu-n2M4-JWcVecrj%gc5o-IW74LVJg0M")?<Admin/>:<Login/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App