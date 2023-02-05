import { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Footer from './components/Footer';

import './App.css';

const App = () => {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Footer/>
    </div>
  )
}

export default App