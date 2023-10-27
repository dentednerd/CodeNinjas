import React from 'react';
import { styled } from '@stitches/react';
import PropTypes from 'prop-types';
import Code from '../../atoms/Code';
import Button from '../../atoms/Button';
import Article from '../../molecules/Article';
import Loading from '../../atoms/Loading';
import { lighten } from '../../utils';

export default function Learn({
  isLoading,
  thisLevel,
  thisQuestion,
  showAnswers,
  setShowAnswers
}) {
  if (isLoading) return <Loading />;
  if (!isLoading && !thisQuestion) return;

  const StyledLearn = styled('section', {
    textAlign: 'center',

    pre: {
      marginBottom: '1rem'
    }
  });

  return (
    <StyledLearn>
      <Article
        color={thisLevel.lvlColor}
        title={`${thisLevel.lvlName}: ${thisQuestion.title}`}
        subtitle="Sensei Says..."
      >
        <p>{thisQuestion.background}</p>
      </Article>
      <Code>
        {thisQuestion.example}
      </Code>
      <Button
        color={lighten(thisLevel.lvlColor, 40)}
        onClick={() => setShowAnswers(!showAnswers)}
      >
        Your turn!
      </Button>
    </StyledLearn>
  );
}

Learn.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  thisLevel: PropTypes.object.isRequired,
  thisQuestion: PropTypes.object,
  showAnswers: PropTypes.bool.isRequired,
  setShowAnswers: PropTypes.func.isRequired
}
