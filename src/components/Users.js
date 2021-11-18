import React, { useState } from 'react';
import SearchUsers from './SearchUsers';

function Users() {
  const [ids, setIds] = useState('');
  const [userIds, setUserIds] = useState([]);

  const onChange = e => setIds(e.target.value);
  const onClick = () => {
    setUserIds(ids.split('').map(user => parseInt(user)));
    setIds('');
  };

  return (
    <div style={{ marginLeft: 16 }}>
      <input
        type='number'
        placeholder='userId를 입력해주세요'
        onChange={onChange}
        value={ids}
      />
      <button onClick={onClick}>Users fetching</button>
      <SearchUsers userIds={userIds} />
    </div>
  );
}

export default Users;
