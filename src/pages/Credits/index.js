import React from 'react';
import { Link } from 'react-router-dom';
import sensei from '../../assets/images/Sensei1.jpeg';
import './Credits.css';

const Credits = () => {
  return (
    <div id="credits">
      <div className="sensei">
        <p>Code Ninjas is created by Team JSKids:<br />Joy, Janet, Ash and Joey<br /><br /></p>
        <p>Concept: Joy<br />Questions: Joy and Janet<br />Ninja research: Ash<br />This reskinned version: Joey<br /><br /></p>
        <p>Team JSKids graduated from <a href="https://www.northcoders.com">Northcoders</a> in July 2017.<br />Code Ninjas is their final project.</p>
        <img src={sensei} alt="Sensei" />
      </div>
      <Link to="/"><button className="button">Home</button></Link>
    </div>
  );
};

export default Credits;
