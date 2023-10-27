import React, { useState, useEffect } from 'react';
import { styled } from '../../stitches.config';
import { useNavigate } from 'react-router-dom';
import { UpdateUser } from '../../context/user';
import { getUsers } from '../../api';
import Article from '../../molecules/Article';
import Loading from '../../atoms/Loading';
import Button from '../../atoms/Button';
import { colors } from '../../tokens';

export default function Login() {
  const [users, setUsers] = useState();
  const setUsername = UpdateUser();
  const navigate = useNavigate();

  useEffect(() => {
    getUsers().then((users) => {
      setUsers(users);
    });
    return;
  }, []);

  if (!users) return <Loading />;

  const logInNewUser = (username) => {
    window.localStorage.setItem('currentUser', username);
    setUsername(username);
    navigate(`/`);
    return;
  }

  const Grid = styled('section', {
    display: 'grid',
    gap: '1rem',
    width: '100%',

    '@media(min-width: 768px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },

    button: {
      fontSize: 'min(5vw, 1rem)'
    }
  })

  return (
    <Article color={colors.sensei} title="Logging out...">
      <p>Choose another mock profile to log in:</p>
      <Grid>
        {users.map((user) => (
          <Button key={user.username} onClick={() => logInNewUser(user.username)}>
            {user.name}
          </Button>
        ))}
      </Grid>
    </Article>
  )
}
