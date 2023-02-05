import React from 'react';
import Megaphone from '../assets/megaphone.png';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="text">
        <h1 className="welcome-text">
          Welcome to PES Open House '22!
        </h1>
        <div className="description">
          <img className="megaphone-img" alt="Megaphone Illustration" src={Megaphone} />
        </div>
      </div>
      <div className="illustration">
        
      </div>
    </div>
  )
}

export default Hero;