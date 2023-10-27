import { createStitches } from '@stitches/react';
import { colors, sizes } from './tokens';

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: colors,
  },
  media: {
    bp1: '(min-width: 768px)',
  },
  shadows: {
    box: '0 0.5rem 1rem $text'
  },
  sizes: sizes,
});
