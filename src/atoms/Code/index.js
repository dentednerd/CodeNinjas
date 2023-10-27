import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '../../stitches.config';
import { Light as SyntaxHighlighter } from 'react-syntax-highlighter';
import { colors } from '../../tokens';
import { a11yLight } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import js from 'react-syntax-highlighter/dist/esm/languages/hljs/javascript';

SyntaxHighlighter.registerLanguage('javascript', js);

const Code = ({ children }) => {
  const StyledPre = styled(SyntaxHighlighter, {
    display: 'block',
    width: '100%',
    overflowX: 'auto',
    whiteSpace: 'pre-wrap',
    wordWrap: 'break-word',
    backgroundColor: colors.highlight,
    borderRadius: '1rem',
    font: '1rem "Jetbrains Mono", monospace',
    padding: '0 !important',

    code: {
      display: 'block',
      whiteSpace: 'pre-wrap !important',
      textAlign: 'left',
      borderRadius: '0.5rem',
      padding: '1rem',
      font: '1rem "Jetbrains Mono", monospace',
      marginBottom: '0',
      maxWidth: '100%',

      '&:hover': {
        backgroundColor: colors.glow,
        boxShadow: `0 0 0.5rem ${colors.glow}`
      },

      span: {
        font: '1rem "Jetbrains Mono", monospace !important',
      }
    },

    '&:hover': {
      backgroundColor: colors.glow,
      boxShadow: `0 0 0.5rem ${colors.glow}`
    }
  })

  return (
    <StyledPre language="javascript" className="javascript" style={a11yLight}>
      {children.toString()}
    </StyledPre>
  )
}

export default Code;

Code.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]).isRequired
}