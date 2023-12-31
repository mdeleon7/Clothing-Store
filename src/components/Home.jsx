import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/home.css';
import heroVideo from '/videos/z.mp4';

const Home = () => {
  return (
    <div id="home">
      <video muted autoPlay loop id="hero-video">
        <source src={heroVideo} type="video/mp4" />
      </video>
      <NavLink className="hero-button-link" to="/women">
        <button className="hero-button">SS23 Collection</button>
      </NavLink>
      <NavLink className="hero-button-link" to="/women">
        <button className="hero-button">FW22 Collection</button>
      </NavLink>
    </div>
  );
};


export default Home