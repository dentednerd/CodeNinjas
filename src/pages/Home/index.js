import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { GetUser, UpdateUser } from '../../context/user';
import Button from '../../atoms/Button';
import Article from '../../molecules/Article';
import Loading from '../../atoms/Loading';
import { colors } from '../../tokens';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
  const { user } = GetUser();
  const setUsername = UpdateUser();

  const storedUsername = window.localStorage.getItem('currentUser');

  useEffect(() => {
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, [storedUsername, setUsername])

  useEffect(() => {
    if (user) {
      setIsLoading(false);
    }
  }, [user]);

  if (isLoading) return <Loading />;

  return (
    <Article
      color={colors.sensei}
      title="Welcome!"
      subtitle="Sensei Says..."
    >

      <p>Welcome, student! I am Sensei, here to guide you on your coding journey. Together we shall be studying JavaScript, a language that many of your favourite games are written in, including this one!</p>

      <p>Are you ready to study hard, earn your ninja belts, and become a true Code Ninja?</p>

      {user && (
        <ul>
          <li>
            <Button color="$sensei" onClick={() => navigate('/profile')}>
              Visit your profile
            </Button>
          </li>
          <li>
            <Button color="$sensei" onClick={() => navigate('/levels/0')}>
              Train at Level 1
            </Button>
          </li>
          {(user.level > 0 && user.level < 9) && (
            <li>
            <Button color="$sensei" onClick={() => navigate(`/levels/${user.level - 1}`)}>
              Train at Level {user.level + 1}
            </Button>
          </li>
          )}
        </ul>
      )}

    </Article>
  );
}
