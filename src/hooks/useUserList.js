import axios from 'axios';
import { useMutation, useQuery, useQueryClient } from 'react-query';

const fetchUserList = () => axios.get('http://localhost:4000/users');

const addUser = user => axios.post('http://localhost:4000/users', user);

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
    // enabled: false,
  });
};

export const useAddUser = () => {
  const queryClient = useQueryClient();

  // useMutation 은 반드시 키를 필요로 하지 않습니다.
  return useMutation(addUser, {
    onSuccess: () => {
      // 쿼리 클라리언트의 무효화 쿼리를 'users"인 쿼리 키에 사용합니다.
      // 따라서, 기존 "users"로 호출된 쿼리는 무효화되고 다시 가져옵니다.
      queryClient.invalidateQueries('users');
    },
  });
};
