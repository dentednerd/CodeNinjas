import React from 'react';
import { styled } from '@stitches/react';
import PropTypes from 'prop-types';
import Button from '../../atoms/Button';
import Code from '../../atoms/Code';
import Heading from '../../molecules/Heading';
import { lighten } from '../../utils';

export default function Answers({
  thisLevel,
  thisQuestion,
  showAnswers,
  setShowAnswers,
  handleCorrectAnswer
}) {

  const StyledAnswers = styled('section', {
    textAlign: 'center',
  })

  const Question = styled('section', {
    backgroundColor: lighten(thisLevel.lvlColor, 40),
    padding: '1rem',
    borderRadius: '1rem',
    marginBottom: '1rem',
    textAlign: 'left',
  })

  const AnswersGrid = styled('section', {
    display: 'grid',
    width: '100%',
    height: 'fit-content',
    overflow: 'hidden',
    gap: '1rem',
    textAlign: 'center',
    marginBottom: '1rem',

    '@media(min-width: 768px)': {
      gridTemplateColumns: 'repeat(2, calc(50% - 0.5rem))',
    },

    pre: {
      cursor: 'pointer'
    }
  });

  return (
    <StyledAnswers id="answers">

      <Question>
        <Heading
          title={thisQuestion.question}
          subtitle="Your turn!"
        />
      </Question>

      <AnswersGrid>
        {thisQuestion.answers
          .map((answer) => {
            return (
              <section
                key={answer}
                onClick={() => {
                  answer === thisQuestion.correct && handleCorrectAnswer()
                }}
              >
                <Code>
                  {answer}
                </Code>
              </section>
            );
          }
        )}
      </AnswersGrid>

      <Button
        color={thisLevel.lvlColor}
        onClick={() => setShowAnswers(!showAnswers)}
      >
        Wait... what did Sensei say?
      </Button>

    </StyledAnswers>
  )
}

Answers.propTypes = {
  thisLevel: PropTypes.object.isRequired,
  thisQuestion: PropTypes.object.isRequired,
  showAnswers: PropTypes.bool.isRequired,
  setShowAnswers: PropTypes.func.isRequired,
  handleCorrectAnswer: PropTypes.func.isRequired
}
