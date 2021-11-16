import React from 'react';
import { useParams } from 'react-router';
import { useUser } from '../hooks/useUser';
import UserItem from './UserItem';

function User() {
  const onSuccess = data => {
    console.log('성공적으로 유저의 정보를 받았습니다.', data);
  };
  const onError = error => {
    console.log('유저 정보를 받아오는 데 실패했습니다.', error);
  };
  const { id } = useParams();
  const { isLoading, isError, data: user } = useUser(onSuccess, onError, id);

  if (!id) return <div>유저 페이지입니다.</div>;
  if (isLoading) return <div>로딩 중...</div>;
  if (isError) return <div>에러...!</div>;

  return (
    <div>
      {user && (
        <UserItem
          key={user.id}
          id={user.id}
          name={user.name}
          nickName={user.username}
          email={user.email}
        />
      )}
    </div>
  );
}

export default User;
