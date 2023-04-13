import React from 'react';
import Megaphone from '../assets/megaphone.png';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero-section">
      <div className="text">
        <div className="welcome-text-wrapper">
          <h1 className="welcome-text">
            Welcome to PES Open House '23!
          </h1>
          <div className="description">
            <img className="megaphone-img" alt="Megaphone Illustration" src={Megaphone} />
          </div>
        </div>
        <div>
          <p className="tagline">LET YOUR VOICE BE HEARD!</p>
        </div>
      </div>
      <div className="guidelines">
        <header>Guidelines</header>
        <ol className="list">
          <li>In order to be eligible to vote you must be a Pehchaan member</li>
          <li>Arrive at the venue timely and join the queue for voting</li>
          <li>On your turn kindly show your Pehchaan ID to the election committee</li>
          <li>You shall then receive a secret token on your registered email ID</li>
          <li>Once received, you may proceed to the polling station</li>
          <li>The secret token is case sensitive, please double check while entering</li>
          <li>Cast your vote securely and confidentially</li>
        </ol>
      </div>
    </div>
  )
}

export default Hero;