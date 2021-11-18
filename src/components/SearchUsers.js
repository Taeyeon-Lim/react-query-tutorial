import axios from 'axios';
import React from 'react';
import { useQueries } from 'react-query';
import UserItem from './UserItem';

function fetchUsers({ queryKey }) {
  return axios.get(`https://jsonplaceholder.typicode.com/users/${queryKey[1]}`);
}

function SearchUsers({ userIds }) {
  console.log(userIds);
  const result = useQueries(
    userIds.map(userId => {
      return {
        queryKey: ['users', userId],
        queryFn: fetchUsers,
        select: response => {
          const { id, name, username, email } = response.data;
          return { id, name, username, email };
        },
      };
    })
  );

  const users = result.map(({ isLoading, isError, data }) => {
    return { isLoading, isError, data };
  });

  return (
    <ul>
      {users.map(({ isLoading, isError, data: user }) => {
        return isLoading ? (
          <li>로딩 중...</li>
        ) : isError ? (
          <li>에러...!</li>
        ) : (
          <UserItem
            id={user.id}
            name={user.name}
            nickName={user.username}
            email={user.email}
          />
        );
      })}
    </ul>
  );
}

export default SearchUsers;
