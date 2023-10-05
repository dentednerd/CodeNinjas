import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import { Line } from 'rc-progress';
import sensei from '../../assets/images/Sensei1.jpeg';
import config from '../../config';
import './Question.css';

class Question extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      flipped: false,
    };
    this.handleFlip = this.handleFlip.bind(this);
  }

  componentWillReceiveProps() {
    this.setState({ 
      flipped: false
    });
  }

  handleFlip() {
    this.setState({ flipped: !this.state.flipped });
  }

  renderContent(question, handleCorrectAnswer) {
    if (!this.state.flipped) {
      return (
        <div>
          <h2>Sensei Says: {question.title}</h2>
          <div className="sensei" style={{ border: `solid 3px ${config.levels[question.level].levelColor}` }}>
            <img className="senseiSays" src={sensei} alt="Sensei" />
            <p>{question.background}</p>
          </div>
          <div className="example">
            {question.example}
          </div>
          <button
            className="button flipper"
            onClick={this.handleFlip}
            style={{ backgroundColor: config.levels[question.level].levelColor, color: config.levels[question.level].levelTitleColor }}
          >
            Your turn!
          </button>
        </div>
      );
    }
    return (
      <div>
        <div className="your-turn" style={{ backgroundColor: config.levels[question.level].levelColor }}>
          <h2 style={{ color: config.levels[question.level].levelTitleColor }}>Your turn! {question.question}</h2>
          <div className="answers">
            {question.answers.map((answer) => {
              const correctClass = answer === question.correct ? 'correct' : null;
              const handler = answer === question.correct ? handleCorrectAnswer : () => { };
              return (
                <button
                  key={shortid.generate()}
                  className={`button ${correctClass}`}
                  onClick={handler}
                >
                  {answer}
                </button>
              );
            })}
          </div>

        </div>
        <button
          className="button flipper"
          onClick={this.handleFlip}
          style={{ backgroundColor: config.levels[question.level].levelColor, color: config.levels[question.level].levelTitleColor }}
        >
          What did Sensei say?
        </button>
      </div>
    );
  }

  render() {
    const { question, questionIndex, handleCorrectAnswer } = this.props;
    console.log('WE WANT THIS: ', config.levels[question.level].levelAvatar)
    const levelAvatar = config.levels[question.level].levelAvatar
    const avatar = require(`../../assets/images/${levelAvatar}`);
    return (
      <div className="question">
        <div className="progress-bar">
          <span style={{ color: config.levels[question.level].levelTitleColor }}>{config.levels[question.level].levelName}</span>
          <img src={avatar} alt={config.levels[question.level].levelName} />
          <Line
            strokeColor={config.levels[question.level].levelColor}
            percent={questionIndex * 20}
            style={{
              height: '2em',
              width: '100%',
              borderRadius: '1em',
            }}
          />
        </div>
        {this.renderContent(question, handleCorrectAnswer)}
      </div>
    );
  }
}

Question.propTypes = {
  question: PropTypes.object.isRequired,
  questionIndex: PropTypes.number.isRequired,
  handleCorrectAnswer: PropTypes.func.isRequired,
};

export default Question;
