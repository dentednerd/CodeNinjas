import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Link, useLocation } from 'react-router-dom';
import { styled } from '../../stitches.config';
import { GetUser } from '../../context/user';
import Avatar from '../../atoms/Avatar';
import { sizes } from '../../tokens';

const Menu = ({ isMenuOpen, userLevel }) => {
  if (!userLevel) return null;

  const StyledMenu = styled('ul', {
    display: 'block',
    position: 'absolute',
    top: '4.5rem',
    right: '1rem',
    width: 'fit-content',
    backgroundColor: '$highlight',
    border: `solid 3px ${userLevel.lvlColor}`,
    borderRadius: '0.5rem',
    listStyleType: 'none',
    padding: '0.5rem',
    transform: 'scaleY(0)',

    '&.active': {
      transform: 'scaleY(1)',

      li: {
        padding: '0.25rem',
      }
    }
  });

  return (
    <StyledMenu className={isMenuOpen && 'active'}>
      <li>
        <Link to="/profile">
          Profile
        </Link>
      </li>
      <li>
        <Link to="/credits">
          Credits
        </Link>
      </li>
      <li>
        <Link to="/login">
          Log out
        </Link>
      </li>
    </StyledMenu>
  )
}

Menu.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  userLevel: PropTypes.object
}

export default function Nav() {
  const [isLoading, setIsLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user, userLevel } = GetUser();
  const location = useLocation();

  useEffect(() => {
    if (user && userLevel) {
      setIsLoading(false);
    }
  }, [user, userLevel]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location])

  const StyledNav = styled('nav', {
    position: 'fixed',
    top: '0',
    left: '0',
    width: 'calc(100% - 2rem)',
    height: sizes.navHeight,
    display: 'flex',
    flexFlow: 'row nowrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0 0.25rem 0.5rem $colors$0',
    padding: '0 1rem',
    backgroundColor: '$highlight',
    zIndex: '3',
  });

  const User = styled('section', {
    display: 'flex',
    flexFlow: 'row nowrap',
    alignItems: 'center',
    gap: '1.5rem',
    cursor: 'pointer',

    span: {
      display: 'none',
    },

    '@media(min-width: 768px)': {
      span: {
        display: 'inline'
      }
    }
  });

  return (
    <StyledNav>
      <Link to="/">
        <h1>Code Ninjas</h1>
      </Link>

      {!isLoading && (
        <>
          <User onClick={() => setIsMenuOpen(!isMenuOpen)}>
            <span>{user.username}</span>
            <Avatar user={user} />
          </User>

          <Menu isMenuOpen={isMenuOpen} userLevel={userLevel} />
        </>
      )}
    </StyledNav>
  );
}
