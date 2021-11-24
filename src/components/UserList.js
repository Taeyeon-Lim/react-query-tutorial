import React, { useState } from 'react';
import { useAddUser, useUserList } from '../hooks/useUserList';
import UserItem from './UserItem';

function UserList() {
  const [name, setName] = useState('');
  const [nickname, setNickName] = useState('');
  const [email, setEmail] = useState('');

  const onChangeName = e => setName(e.target.value);
  const onChangeEmail = e => setEmail(e.target.value);
  const onChangeNickName = e => setNickName(e.target.value);

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

  const { mutate: addUser } = useAddUser();

  const onAddUser = () => {
    const user = { name, username: nickname, email };
    console.log(user);
    addUser(user);
  };

  if (isLoading || isFetching) return <div>로딩 중...</div>;
  if (isError) return <div>에러...!</div>;

  return (
    <>
      <div>
        <input
          type='text'
          placeholder='이름을 입력하세요.'
          value={name}
          onChange={onChangeName}
        />
        <input
          type='text'
          placeholder='닉네임을 입력하세요.'
          value={nickname}
          onChange={onChangeNickName}
        />
        <input
          type='text'
          placeholder='이메일을 입력하세요.'
          value={email}
          onChange={onChangeEmail}
        />
        <button type='button' onClick={onAddUser}>
          User 추가
        </button>
      </div>
      <button onClick={refetch}>데이터 가져오기</button>
      <ul>
        {users?.map(user => (
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
