import React from 'react'
import ShapeDivider from '../components/ShapeDivider';
import Hero from '../components/Hero';
import Form from '../components/Form';
import './Home.css';

const Home = () => {
  return (
    <div className="Home">
      <div className="Intro">
        <Hero/>
      </div>
      <ShapeDivider/>
      <Form/>
    </div>
  )
}

export default Home;