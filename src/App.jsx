import Navbar from './components/Navbar';
import Footer from './components/Footer';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './pages/Home';
import Login from './pages/Login';
import Admin from './pages/Admin';

import { Route, Routes } from 'react-router-dom';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/admin" element={(sessionStorage.getItem("pass_key") !== import.meta.env.VITE_PASS_KEY)?<Admin/>:<Login/>} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App