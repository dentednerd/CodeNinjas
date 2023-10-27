import React from 'react';
import PropTypes from 'prop-types';
import { styled } from '@stitches/react';
import Avatar from '../../atoms/Avatar';
import sensei from '../../assets/Sensei1.jpeg';
import { colors } from '../../tokens';
import { lighten } from '../../utils';

export default function Heading({ color, hasAvatar, title, subtitle }) {
  const StyledHeading = styled('header', {
    position: 'relative',
    width: 'calc(100%-1rem)',
    height: 'fit-content',
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: '0 0 auto',
    backgroundColor: '$highlight',
    borderRadius: '2.5rem',
    border: `double 9px ${color}`,
    marginInline: 'auto',

    'img.sensei': {
      height: '3.75rem',
      aspectRatio: '1',
      margin: '0.5rem 0',
      borderRadius: '50%',
    },

    p: {
      fontSize: '0.75rem'
    },

    h2: {
      fontSize: 'min(6vw, 1.5rem)',
      padding: '0.5rem min(2vw, 0.75rem)',

      '&.has-avatar': {
        display: 'block !important',
        justifyContent: 'flex-start',
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        textOverflow: 'ellipsis',
        maxWidth: '12ch',
      }
    },

    '@media(min-width: 768px)': {
      width: 'fit-content',
      maxWidth: '100%',

      'h2.has-avatar': {
        maxWidth: 'fit-content'
      }
    },

    '&::before': {
      display: subtitle ? 'block' : 'none',
      content: subtitle ? subtitle : '',
      position: 'absolute',
      top: '-0.75rem',
      left: '3rem',
      backgroundColor: lighten(colors.sensei, 20),
      fontSize: '0.75rem',
      padding: '0.06125rem 0.5rem',
      borderRadius: '0.5rem',
    }
  })

  return (
    <StyledHeading>

      {hasAvatar
        ? <Avatar />
        : <img className="sensei" src={sensei} alt="Sensei" />
      }

      <h2 className={hasAvatar && 'has-avatar'}>{title}</h2>

    </StyledHeading>
  );
}

Heading.defaultProps = {
  color: colors.sensei,
  hasAvatar: false,
  subtitle: null
}

Heading.propTypes = {
  color: PropTypes.string,
  hasAvatar: PropTypes.bool,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string
}
