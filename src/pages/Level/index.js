import React from 'react';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { styled } from '../../stitches.config';
import { GetUser } from '../../context/user';
import { getQuestions } from '../../api';
import Button from '../../atoms/Button';
import Loading from '../../atoms/Loading';
import Learn from '../../organisms/Learn';
import Answers from '../../organisms/Answers';
import Article from '../../molecules/Article';
import Congrats from '../../organisms/Congrats';
import config from '../../config';
import { colors } from '../../tokens';

export default function Level() {
  const [isLoading, setIsLoading] = useState(true);
  const [levelQuestions, setLevelQuestions] = useState([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showAnswers, setShowAnswers] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(false);

  const { level } = useParams();
  const { user, userLevel } = GetUser();

  const thisLevel = config[level];
  const navigate = useNavigate();

  useEffect(() => {
    setCurrentQuestion(0);
  }, [level, user])

  useEffect(() => {
    let isMounted = true;
    getQuestions(level)
      .then(({ questions }) => {
        if (isMounted) setLevelQuestions(questions);
      })
      .then(() => {
        setIsLoading(false);
      })
      .catch((err) => {
        if (err) setError(true);
      })
    return () => { isMounted = false };
  }, [level]);

  const handleCorrectAnswer = () => {
    setCurrentQuestion(currentQuestion + 1);
    setProgress((currentQuestion + 1) * 20);
    setShowAnswers(false);
  }

  const thisQuestion = levelQuestions[currentQuestion];

  if (level > user.level + 1) return (
    <Article
      color={colors.sensei}
      title={`I'm sorry, ${user.username}.`}
      subtitle="Oops..."
    >
      <p>You need more training before you can attempt this level.</p>
      <Button
        color={colors.sensei}
        onClick={() => navigate('/profile')}
      >
        Return to your profile
      </Button>
    </Article>
  );

  if (isLoading) return <Loading />;
  if (!isLoading && error) return <p>Error</p>;
  if (levelQuestions.length > 0 && currentQuestion === levelQuestions.length) return <Congrats />;

  const StyledLevel = styled('article', {
    width: '100%',

    'section.guidance': {
      display: 'grid',
      gridTemplateColumns: '1fr 2fr',
      gap: '1rem',
      maxWidth: '768px',
    },

    aside: {
      gridColumn: '1 / 2',
      display: 'flex',
      flexFlow: 'row nowrap',
      alignItems: 'center',
    },

    article: {
      gridColumn: '2 / 3',
    },

    'section.progress': {
      margin: '0 0 1rem',
      padding: '1rem 0',
      position: 'relative',

      img: {
        position: 'absolute',
        top: '0',
        left: `calc(${progress}% - 0.5rem)`,
        height: '3rem',
      },

      progress: {
        width: '100%',
        height: '1rem',
        borderRadius: '0.5rem',
      },

      'progress[value]::-webkit-progress-bar': {
        backgroundColor: '#ddd',
        borderRadius: '0.5rem',
      },

      'progress[value]::-webkit-progress-value': {
        backgroundColor: config[thisLevel.lvlNum].lvlColor,
        borderRadius: '0.5rem',
      }
    }
  });

  return (
    <StyledLevel id={`level-${level} question-${currentQuestion}`}>

      <section className="progress">
        <progress
          value={currentQuestion * 20}
          max={100}
        />
        <img src={userLevel.lvlNinja} alt={`${userLevel.lvlBelt}-belt ninja`} />
      </section>

      {showAnswers ? (
        <Answers
          thisLevel={thisLevel}
          thisQuestion={thisQuestion}
          showAnswers={showAnswers}
          setShowAnswers={setShowAnswers}
          handleCorrectAnswer={handleCorrectAnswer}
        />
      ) : (
        <Learn
          isLoading={isLoading}
          thisLevel={thisLevel}
          thisQuestion={thisQuestion}
          showAnswers={showAnswers}
          setShowAnswers={setShowAnswers}
        />
      )}
    </StyledLevel>
  )
}
