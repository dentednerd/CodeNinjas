import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { Line } from 'rc-progress';
import config from '../../config';
// import ninja from '../../assets/images/ninja.png';
import Congrats from '../Congrats';
import './LevelUp.css';

class LevelUp extends React.Component {
  render() {
    if (+this.props.level === 8) {
      return <Congrats />;
    }
    const levelAvatar = config.levels[+this.props.level + 1].levelAvatar
    const avatar = require(`../../assets/images/${levelAvatar}`);
    return (
      <div id="levelUp">
        <div className="progress-bar">
          <span style={{ color: config.levels[this.props.level].levelTitleColor }}>{config.levels[this.props.level].levelName}</span>
          <Line
            strokeColor={config.levels[this.props.level].levelColor}
            percent={100}
            style={{
              height: '2em',
              width: '100%',
              borderRadius: '1em',
            }}
          />
        </div>

        <div className="levelup-text">
          <img src={avatar} alt="Level up!" />
          <div>
            <h1>Level Up!</h1>
            <p>Congratulations! You&apos;ve completed {config.levels[this.props.level].levelName} training!</p>
          </div>
        </div>

        <Link
          to={`/levels/${+this.props.level + 1}/questions`}
          className="button next"
          style={{ backgroundColor: config.levels[+this.props.level + 1].levelButtonColor }}
        >
          Begin Level {(+this.props.level) + 2}: {config.levels[+this.props.level + 1].levelName}
        </Link>

        <Link
          to={`/levels/${+this.props.level}/questions`}
          className="button restart"
          style={{ backgroundColor: config.levels[+this.props.level].levelButtonColor }}
        >
          Restart This Level
        </Link>
      </div>
    );
  }
}

LevelUp.propTypes = {
  username: PropTypes.string.isRequired,
  questionIndex: PropTypes.number.isRequired,
  level: PropTypes.string.isRequired,
};

export default LevelUp;
