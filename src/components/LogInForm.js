import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { UpdateUser } from '../hooks/UserContext';
import { fetchUsers } from '../utils/api';

function LogInForm() {
  const [users, setUsers] = useState([]);
  const setUsername = UpdateUser();
  const history = useHistory();

  const logInNewUser = (username) => {
    setUsername(username);
    history.push('/');
  };

  useEffect(() => {
    fetchUsers().then((users) => {
      setUsers(users);
    });
  }, []);

  if (!users) return null;

  return (
    <section className="content">
      {users.map((user) => {
        return (
          <div key={user.username}>
            <h2>{user.username}</h2>
            <button
              type="button"
              onClick={() => { logInNewUser(user.username); }}
            >
              Log in
            </button>
          </div>
        );
      })}
    </section>
  );
}

export default LogInForm;
