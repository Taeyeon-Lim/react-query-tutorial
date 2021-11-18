import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';

const fetchUsers = () => {
  return axios.get('https://jsonplaceholder.typicode.com/users');
};

const fetchPosts = () => {
  return axios.get('https://jsonplaceholder.typicode.com/posts');
};

function UsersPosts() {
  const {
    isLoading: isLoadingUsers,
    isError: isErrorUsers,
    data: users,
  } = useQuery('users', fetchUsers);
  const {
    isLoading: isLoadingPosts,
    isError: isErrorPosts,
    data: posts,
  } = useQuery('posts', fetchPosts);

  if (isLoadingUsers || isLoadingPosts) return <div>로딩 중...</div>;
  if (isErrorUsers || isErrorPosts) return <div>에러...!</div>;

  console.log(users);
  console.log(posts);

  return <div>병렬 쿼리 페이지입니다.</div>;
}

export default UsersPosts;
