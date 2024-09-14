import React from 'react';
import './Hero.css';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Welcome to Smart Patient Card</h1>
        <p>Your health data, securely managed and accessible anytime, anywhere.</p>
        <Link to="/login"> <button className="cta-button">Get Started</button></Link>
      </div>
    </section>
  );
};

export default Hero;
