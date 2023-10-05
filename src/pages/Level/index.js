import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Question from '../../components/Question';
import LevelUp from '../LevelUp';
import { fetchQuestionsByLevel } from '../../utils/api';

function Level({ match }) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0);

  const { level } = match.params;

  useEffect(() => {
    let isMounted = true;
    setIsLoading(true);
    fetchQuestionsByLevel(level)
      .then((data) => { if (isMounted) { setQuestions(data.questions); } })
      .then(() => { setQuestionIndex(0); })
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
