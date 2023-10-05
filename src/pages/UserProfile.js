import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GetUser } from '../hooks/UserContext';
import './UserProfile.css';

const levelNames = [
  'Academy', 'Gennin', 'Chunnin', 'Jounin', 'Special Jounin', 'Kage', 'ANBU', 'S-Class', 'Ninja',
];

function UserProfile() {
  const [isLoading, setIsLoading] = useState(true);
  const user = GetUser();

  useEffect(() => {
    if (user) {
      setIsLoading(false);
    }
  }, [user]);

  return (
    <div>
      {isLoading
        ? <p>Loading...</p>
        : (
          <div className="UserProfile">
            <div className="userBox">
              <h1 className="title is-1">{user.username}</h1>
              <figure className="userImage">
                <img src={user.avatar_url} alt="Your ninja avatar" />
              </figure>
              <h2>
                Current level:&nbsp;
                {levelNames[user.level]}
              </h2>
            </div>
            <Link
              className="button is-success"
              to={`/levels/${user.level}/questions`}
            >
              Train
            </Link>
          </div>
        )}
    </div>
  );
}

export default UserProfile;
