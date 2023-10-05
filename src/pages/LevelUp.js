import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Congrats from './Congrats';

const levelNames = ['Academy', 'Gennin', 'Chunnin', 'Jounin', 'Special Jounin', 'Kage', 'ANBU', 'S-Class', 'Ninja'];

function LevelUp({ level }) {
  if (level === 8) {
    return <Congrats />;
  }
  return (
    <div className="levelUp">
      <span>
        Press Graduate to begin Level&nbsp;
        {+level + 1}
        :&nbsp;
        {levelNames[+level + 1]}
      </span>
      <Link to={`/levels/${+level + 1}/questions`}>
        <button className="button" type="button">
          Graduate
        </button>
      </Link>
      <Link to="/profile">
        <button className="button" type="button">
          Restart Training
        </button>
      </Link>
    </div>
  );
}

LevelUp.propTypes = {
  level: PropTypes.string.isRequired,
};

export default LevelUp;
