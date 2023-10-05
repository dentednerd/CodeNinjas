import React from 'react';
import { Link } from 'react-router-dom';

const Success = () => {
  return (
    <div className="Success">
      <h3>Congratulations! You are a code ninja!</h3>
      <Link to="/question"><button className="button is-primary is-outlined is-large">Continue</button></Link>
    </div>
  );
};

export default Success;
