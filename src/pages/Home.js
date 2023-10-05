import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="Home">
      <img
        // eslint-disable-next-line
        src={process.env.PUBLIC_URL + '/Images/Sensei1.jpeg'}
        alt="Sensei"
      />
      <p>Welcome, new student! I am Sensei, here to guide you on your coding journey.</p>
      <br />
      <Link className="button is-success" to="/levels/0">Train</Link>
    </div>
  );
}

export default Home;
