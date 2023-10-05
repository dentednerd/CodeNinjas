import React from 'react';
import { Link } from 'react-router-dom';
import ninja from '../../assets/images/ninja.png';
import sensei from '../../assets/images/Sensei1.jpeg';
import './Congrats.css';

const Congrats = () => {
  return (
    <div id="congrats">
      <h1>Congratulations!</h1>
      <div className="sensei">
        <img src={sensei} alt="You are a Code Ninja!" />
        <p>You have earned your black belt and become a Code Ninja! You have worked hard and practised for a long time to get this far. I am very proud of you!</p>
        <img className="codeninja" src={ninja} alt="You are a Code Ninja!" />
      </div>
      <Link to="/credits"><button className="button">Credits</button></Link>
    </div>
  );
};

export default Congrats;
