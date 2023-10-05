import React from 'react';
import PropTypes from 'prop-types';

const levelNames = ['Academy', 'Gennin', 'Chunnin', 'Jounin', 'Special Jounin', 'Kage', 'ANBU', 'S-Class', 'Ninja'];

function Question({ question, questionIndex, handleCorrectAnswer }) {
  return (
    <div className="question columns">
      <div className="column is-two-thirds sensei">
        <h2>
          Sensei Says:&nbsp;
          {question.title}
        </h2>
        <div className="background">
          <img
            className="senseiSays"
            src={`${process.env.PUBLIC_URL}/Images/Sensei1.jpeg`}
            alt="Sensei"
          />
          {question.background}
        </div>
        <div className="example">{question.example}</div>
        <hr />

        <h2>{question.question}</h2>
        <div className="answers">
          {question.answers.map((answer) => {
            const handler = answer === question.correct
              ? handleCorrectAnswer
              : () => {};
            return (
              <button
                type="button"
                key={answer}
                className="button"
                onClick={handler}
              >
                {answer}
              </button>
            );
          })}
        </div>
      </div>
      <div className="column sidebar">
        <span>
          Current level:&nbsp;
          {levelNames[question.level]}
        </span>
        <progress className="progress is-warning" value={questionIndex} max="5" />
      </div>
    </div>
  );
}

Question.propTypes = {
  question: PropTypes.object.isRequired,
  questionIndex: PropTypes.number.isRequired,
  handleCorrectAnswer: PropTypes.func.isRequired,
};

export default Question;
