import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '../../stitches.config';
import { colors } from '../../tokens';

export default function Button({ onClick, children }) {
  const StyledButton = styled('button', {
    backgroundColor: colors.accent,
    color: colors.highlight,
    padding: '0.5rem',
    border: 'none',
    borderRadius: '0.5rem',
    transition: 'all 0.2s',
    cursor: 'pointer',

    '&:hover': {
      boxShadow: '0 0 0.5rem $colors$glow',
      mixBlendMode: 'exclusion',
      transition: 'all 0.2s',
    }
  });

  return (
    <StyledButton onClick={onClick}>
      {children}
    </StyledButton>
  );
}

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array
  ]).isRequired
}
