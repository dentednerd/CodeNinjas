import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Question from '../components/Question';
import LevelUp from './LevelUp';

import { fetchQuestionsByLevel } from '../utils/api';

const backgroundImage = {
  0: 'level0.jpg',
  1: 'level1.jpg',
  2: 'level2.jpg',
  3: 'level3.jpg',
  4: 'level4.jpg',
  5: 'level5.png',
  6: 'level6.jpg',
  7: 'level7.png',
  8: 'level8.png',
  9: 'level9.jpg',
};

function Level({ match }) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);

  const { level } = match.params;

  const changeBackground = (thisLevel) => {
    document.getElementsByTagName('body')[0].style.backgroundImage = `url("/Images/backgrounds/${backgroundImage[thisLevel]}")`;
  };

  useEffect(() => {
    let isMounted = true;
    setIsLoading(true);
    fetchQuestionsByLevel(level)
      .then((data) => { if (isMounted) { setQuestions(data.questions); } })
      .then(() => { setQuestionIndex(0); })
      .then(() => { changeBackground(level); })
      .then(() => { setIsLoading(false); })
      .catch((err) => { if (err) setError(true); });
    return () => { isMounted = false; };
  }, [level]);

  const content = () => {
    if (error) return <p>{error}</p>;
    if (isLoading || questions.length === 0) return <p>Loading...</p>;
    if (!isLoading && questions.length) {
      if (questionIndex === questions.length) return <LevelUp level={level} />;
      return (
        <Question
          question={questions[questionIndex]}
          questionIndex={questionIndex}
          handleCorrectAnswer={() => { setQuestionIndex(questionIndex + 1); }}
        />
      );
    }
    return <p>If you can read this, things are broken.</p>;
  };

  return (
    <div className="Level">
      {content()}
    </div>
  );
}

Level.propTypes = {
  match: PropTypes.object,
};

export default Level;
