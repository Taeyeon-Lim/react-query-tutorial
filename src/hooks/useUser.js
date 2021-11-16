import axios from 'axios';
import { useQuery } from 'react-query';

const fetchUser = ({ queryKey }) => {
  return axios.get(`https://jsonplaceholder.typicode.com/users/${queryKey[1]}`);
};

export const useUser = (onSuccess, onError, userId) => {
  return useQuery(['users', userId], fetchUser, {
    onSuccess,
    onError,
    select: data => {
      const { id, name, username, email } = data.data;
      return { id, name, username, email };
    },
  });
};
