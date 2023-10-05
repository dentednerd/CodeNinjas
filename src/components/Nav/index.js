import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import shortid from 'shortid';
import config from '../../config';

function Nav() {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <nav>
      <Link to="/"><h1>Code Ninjas</h1></Link>
        {menuActive && (
          <ul className="level-list">
            {config.levels.map((level, i) => (
              <li key={shortid.generate()}>
                <Link to={`/levels/${i}`}>{level.levelName}</Link>
              </li>
            ))}
          </ul>
        )}
      <button className="button" onClick={() => setMenuActive(!menuActive)}>Levels</button>
    </nav>
  );
}

export default Nav;
