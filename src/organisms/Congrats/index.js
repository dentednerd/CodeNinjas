import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { styled } from '../../stitches.config';
import { GetUser } from '../../context/user';
import config from '../../config';
import Button from '../../atoms/Button';
import Heading from '../../molecules/Heading';
import { patchUser } from '../../api';
import { lighten } from '../../utils';
import ninjas from '../../assets/ninjas';

export default function Congrats() {
  const { user } = GetUser();
  const { level } = useParams();
  const navigate = useNavigate();

  const levelConfig = config[level];

  const userLevelUp = () => {
    patchUser(user.username)
    .then(() => {
      navigate(`/`)
    });
  }

  const StyledLevelUp = styled('section', {
    backgroundColor: levelConfig.lvlColor,
    padding: '1rem',
    borderRadius: '1rem',

    'header h2': {
      fontSize: 'min(4vw, 1rem)',
      display: 'block',
      overflowX: 'hidden',
      whiteSpace: 'pre-wrap',
      textOverflow: 'ellipsis',
    },

    'section.info': {
      marginTop: '1rem',
      backgroundColor: lighten(levelConfig.lvlColor, 40),
      padding: '1rem',
      borderRadius: '1rem',
    },

    'img.new-ninja': {
      display: 'block',
      width: '50%',
      marginInline: 'auto',
    },

    button: {
      marginInline: 'auto'
    }
  });

  const Grid = styled('section', {
    display: 'grid',

    '@media(min-width: 768px)': {
      gridTemplateColumns: 'repeat(2, 1fr)'
    }
  });

  const levelUpOrReturn = user.level > levelConfig.lvlNum
  ? (
    <section style={{ display: 'grid', placeItems: 'center', textAlign: 'center' }}>
      <p>You&apos;ve already claimed your {levelConfig.nextLvlBelt} belt.</p>
      <Button
        color={levelConfig.lvlColor}
        onClick={() => navigate('/profile')}
      >
        Return to your profile
      </Button>
    </section>
  ) : (
    <Button
      color={levelConfig.lvlColor}
      onClick={() => userLevelUp()}
    >
      Claim your {levelConfig.nextLvlBelt} belt!
    </Button>
  );

  return (
    <StyledLevelUp>
      <Heading title={`Congratulations, ${user.username}!`} subtitle="Wow!"/>
      <section className="info">
        <h3>You have completed the {levelConfig.lvlName} level!</h3>

        <Grid>
          <img src={ninjas[levelConfig.nextLvlBelt]} className="new-ninja" alt="Congratulations!" />
          {levelUpOrReturn}
        </Grid>

      </section>
    </StyledLevelUp>
  )
}
