import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../atoms/Button';
import Article from '../../molecules/Article';
import { colors } from '../../tokens';

const Credits = () => {
  const navigate = useNavigate();

  return (
    <Article
      color={colors.sensei}
      title="Thanks for visiting!"
      subtitle="Sensei Says..."
    >
      <p>Code Ninjas is created by Team JSKids:</p>

      <p>Joy: concept and questions</p>

      <p>Janet: questions</p>

      <p>Ash: design and ninja research</p>

      <p>Joey: design, including this reskin</p>

      <p>Team JSKids graduated from <a href="https://www.northcoders.com">Northcoders</a> in July 2017. Code Ninjas is their final project.</p>

      <ul>

        <li>
            <Button onClick={() => navigate('/')}>
              Home
            </Button>
        </li>

        <li>
            <Button onClick={() => navigate('/profile')}>
              Profile
            </Button>
        </li>

        <li>
          <Button onClick={() => location.href = "https://joeyimlay.dev"}>
            joeyimlay.dev
          </Button>
        </li>

      </ul>
    </Article>
  );
}

export default Credits;
