import React from 'react';
import { Link } from 'react-router-dom';

function Congrats() {
  return (
    <div className="levelUp">
      <span>Congratulations! You are now a Code Ninja!</span>
      <img
        // eslint-disable-next-line
        src={process.env.PUBLIC_URL + '/Images/Lucy_Ninja.png'}
        alt="You are a Code Ninja!"
      />
      <Link to="/levels/0/questions">
        <button className="button" type="button">
          Start over
        </button>
      </Link>
    </div>
  );
}

export default Congrats;
