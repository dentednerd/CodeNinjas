import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '../../stitches.config';

export default function BeltHeading({ color, text }) {
  if (!color) color = "#FFFFFF";

  const StyledBeltHeading = styled('header', {
      gridColumn: '1 / 4',
      backgroundColor: 'white',
      border: `double 9px ${color}`,
      borderRadius: '1rem',
      padding: '1rem',
      textAlign: 'center',
  })
  return (
    <StyledBeltHeading>
      <h2>{text}</h2>
    </StyledBeltHeading>
  )
}

BeltHeading.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string.isRequired
}
