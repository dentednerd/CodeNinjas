import React from 'react';
import { Link } from 'react-router-dom';
import sensei from '../../assets/images/Sensei1.jpeg';
import config from '../../config';
import './Home.css';

const Home = () => {
  return (
    <div id="home">
      <div className="welcome">
        <img src={sensei} alt="Sensei" />
        <div className="welcome-text">
          <p>Welcome, student! I am Sensei, here to guide you on your coding journey. Together we shall be studying JavaScript, a language that many of your favourite games are written in, including this one!</p>
          <p>Are you ready to study hard, level up and become a true Code Ninja? Click the button when you&apos;re ready to begin!</p>
          <p className="center"><Link className="button begin" to="/levels/0" style={{ backgroundColor: config.levels[0].levelButtonColor }}>Begin Level 1: Academy</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Home;
