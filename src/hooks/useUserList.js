import axios from 'axios';
import { useQuery } from 'react-query';

const fetchUserList = () => {
  return axios.get('https://jsonplaceholder.typicode.com/users');
};

export const useUserList = (onSuccess, onError) => {
  return useQuery('users', fetchUserList, {
    onSuccess,
    onError,
    select: data => {
      const newArrData = data.data.reduce((acc, cur) => {
        const { id, name, username, email } = cur;
        return acc.concat({ id, name, username, email });
      }, []);
      return newArrData;
    },
  });
};
