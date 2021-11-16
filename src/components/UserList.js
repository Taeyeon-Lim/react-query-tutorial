import React from 'react';
import { useUserList } from '../hooks/useUserList';
import UserItem from './UserItem';

function UserList() {
  const onSuccess = data => {
    console.log(
      '데이터를 가져온 다음에 실행되는 사이드 이펙트를 수행합니다',
      data
    );
  };
  const onError = error => {
    console.log(
      '데이터 페칭이 실패한 다음에 실행되는 사이드 이펙트를 수행합니다',
      error
    );
  };

  const {
    isLoading,
    isError,
    data: users,
    isFetching,
    refetch,
  } = useUserList(onSuccess, onError);

  if (isLoading || isFetching) return <div>로딩 중...</div>;
  if (isError) return <div>에러...!</div>;

  return (
    <>
      <button onClick={refetch}>데이터 가져오기</button>
      <ul>
        {users.map(user => (
          <UserItem
            key={user.id}
            id={user.id}
            name={user.name}
            nickName={user.username}
            email={user.email}
          />
        ))}
      </ul>
    </>
  );
}

export default UserList;
