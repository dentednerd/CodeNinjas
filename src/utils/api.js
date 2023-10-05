import axios from 'axios';

const api = axios.create({
  baseURL: 'https://codeninjas-api.fly.dev/api',
});

export const fetchUsers = async () => {
  const url = '/users';
  const { data } = await api.get(url);
  return data.users;
};

export const fetchUserByUsername = async () => {
  const url = '/users/loneninja1';
  const { data } = await api.get(url);
  return data.user;
};

export const fetchQuestionsByLevel = async (level) => {
  const url = `/levels/${level}/questions`;
  const { data } = await api.get(url);
  return data;
};
