import React from 'react';
import { styled } from '../../stitches.config';
import { keyframes } from '@stitches/react';
import { colors } from '../../tokens';

const rotation = keyframes({
  '0%': { transform: 'rotate(0deg)' },
  '100%': { transform: 'rotate(360deg)' }
})

const StyledLoading = styled('div', {
  display: 'block',
  width: '6rem',
  height: '6rem',
  border: 'solid 9px #FFF',
  borderBottomColor: colors.sensei,
  borderRadius: '50%',
  boxSizing: 'border-box',
  animation: `${rotation} 1s linear infinite`,
  marginInline: 'auto'
})

const Loading = () => (
  <StyledLoading />
);

export default Loading;