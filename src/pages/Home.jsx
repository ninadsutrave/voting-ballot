import React from 'react'
import ShapeDivider from '../components/ShapeDivider';
import Hero from '../components/Hero';
import './Home.css';

const Home = () => {
  return (
    <div className="Home">
      <div className="Intro">
        <Hero/>
      </div>
      <ShapeDivider/>
    </div>
  )
}

export default Home