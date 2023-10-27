import { globalCss } from './stitches.config';
import { sizes } from './tokens';

const globalStyles = globalCss({
  '*, *::before, *::after': {
    margin: '0',
    padding: '0',
    fontFamily: "'OpenDyslexicAlta-Regular', sans-serif",
    fontSize: '16px',
    lineHeight: 'normal',
    color: '$text',
    tabSize: '2rem',
  },

  body: {
    backgroundColor: '$background',
    paddingTop: sizes.navHeight
  },

  a: {
    textDecoration: 'none'
  },

  main: {
    padding: '1rem 0',
    marginInline: 'auto',
    height: 'fit-content',
    width: '100vw',
    maxWidth: '768px',

    '@media(min-width: 768px)': {
      maxWidth: 'calc(768px - 2rem)',
    }
  },

  h1: {
    font: 'min(8vw, 2rem) "Karate", sans-serif'
  },

  h2: {
    font: '1.5rem "Reggae One", sans-serif',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1rem'
  },

  h3: {
    font: '1.25rem "Reggae One", sans-serif',
    marginBottom: '1rem'
  },

  p: {
    marginBottom: '1.2rem'
  },

  'p:last-child': {
    marginBottom: '0'
  }
});


export default globalStyles;
