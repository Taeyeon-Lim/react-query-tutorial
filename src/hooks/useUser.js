import axios from 'axios';
import { useQuery, useQueryClient } from 'react-query';

const fetchUser = ({ queryKey }) => {
  return axios.get(`https://jsonplaceholder.typicode.com/users/${queryKey[1]}`);
};

export const useUser = (onSuccess, onError, userId) => {
  const queryClient = useQueryClient();

  return useQuery(['user', userId], fetchUser, {
    onSuccess,
    onError,
    select: data => {
      const { id, name, username, email } = data.data;
      return { id, name, username, email };
    },
    // users 쿼리의 캐시 데이터의 일부를 초기 데이터로 설정
    initialData: () => {
      const user = queryClient
        .getQueryData('users')
        ?.data?.find(user => user.id === parseInt(userId));

      return user ? { data: user } : undefined;
    },
  });
};
