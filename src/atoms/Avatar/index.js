import React from 'react';
import { styled } from '../../stitches.config';
import { GetUser } from '../../context/user';
import { lighten } from '../../utils';

export default function Avatar() {
  const { user, userLevel } = GetUser();
  if (!user || !userLevel) return null;

  const beltColor = user.level === 0 ? '#FFFFFF' : userLevel.lvlColor;

  const StyledAvatar = styled('figure', {
    position: 'relative',

    'section.avatar': {
      backgroundColor: lighten(userLevel.lvlColor, 20),
      backgroundImage: `url(${user.avatar})`,
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      height: '3rem',
      aspectRatio: '1',
      margin: '3px',
      borderRadius: '50%',
      border: `solid 3px ${beltColor}`
    },

    'img.ninja': {
      position: 'absolute',
      bottom: '-0.125rem',
      left: '-0.5rem',
      height: '3rem',
    },

    '&:hover': {
      cursor: 'pointer'
    }
  });

  return (
    <StyledAvatar>
      <section className="avatar" />
      <img
        className="ninja"
        src={userLevel.lvlNinja}
        alt="ninja"
      />
    </StyledAvatar>
  );
}
