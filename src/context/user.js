import React, {
  createContext,
  useState,
  useContext,
  useEffect
} from "react";
import PropTypes from 'prop-types';
import { getUserByUsername } from '../api';
import config from "../config";
import ninjas from '../assets/ninjas';

const defaultUser = {
  user: {
    avatar: "https://i.pinimg.com/736x/3d/14/d7/3d14d7d215992bbedce4b5753081367f.jpg",
    level: 0,
    username: "mastersplinter",
    name: "Splinter"
  },
  userLevel: {
    lvlNum: 0,
    lvlName: 'Data Types',
    lvlColor: '#B9BA57',
    description: 'New ninjas learn about data in JavaScript. How many types of data are there?',
    lvlNinja: ninjas.ninja,
    lvlBelt: 'no',
    nextLvlBelt: 'white',
  }
}

const UserContext = createContext(defaultUser);
const UpdateUserContext = createContext();

export function GetUser() {
  return useContext(UserContext);
}

export function UpdateUser() {
  return useContext(UpdateUserContext);
}

export default function UserProvider({ children }) {
  const storedUsername = window.localStorage.getItem('currentUser');
  const [username, setUsername] = useState(storedUsername || 'ninjabrian');
  const [loggedInUser, setLoggedInUser] = useState();

  useEffect(() => {
    if (username) {
      getUserByUsername(username)
      .then((user) => {
        setLoggedInUser({
          user: user,
          userLevel: config[user.level]
        });
      })
      .catch((err) => {
        setLoggedInUser({
          user: {},
          userLevel: {} });
        window.localStorage.setItem('currentUser', '');
        console.log(err);
      });
    }
  }, [username])

  if (!loggedInUser) return;

  return (
    <UserContext.Provider value={loggedInUser}>
      <UpdateUserContext.Provider value={setUsername}>
        {children}
      </UpdateUserContext.Provider>
    </UserContext.Provider>
  )
}

UserProvider.propTypes = {
  children: PropTypes.object.isRequired
}
