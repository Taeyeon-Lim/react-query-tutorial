import axios from 'axios';
import React from 'react';
import { useQuery } from 'react-query';
import PostItem from './PostItem';

const fetchUserByNickName = ({ queryKey }) => {
  return axios.get(
    `https://jsonplaceholder.typicode.com/users?username=${queryKey[1]}`
  );
};
const fetchUserPosts = ({ queryKey }) => {
  return axios.get(
    `https://jsonplaceholder.typicode.com/posts?userId=${queryKey[1]}`
  );
};

function UserPosts({ nickName }) {
  const { data: user } = useQuery(['user', nickName], fetchUserByNickName);

  const userId = user?.data[0].id;

  const { data: posts } = useQuery(['posts', userId], fetchUserPosts, {
    enabled: !!userId,
    select: response => {
      return response.data;
    },
  });

  return (
    <div style={{ marginLeft: 16 }}>
      <h2>
        작성자 닉네임: {nickName} (ID: {userId})
      </h2>
      <h3>포스팅 목록</h3>
      <hr />
      <ul>
        {posts?.map(post => (
          <PostItem
            key={post.id}
            id={post.id}
            title={post.title}
            content={post.body}
          />
        ))}
      </ul>
    </div>
  );
}

export default UserPosts;
