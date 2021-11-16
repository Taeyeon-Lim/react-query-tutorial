import React from 'react';
import { Link } from 'react-router-dom';

function UserItem({ id, name, nickName, email }) {
  return (
    <li>
      <Link to={`/user/${id}`}>
        <b>
          {id}&nbsp;{nickName}
        </b>
      </Link>
      <p>
        이름:{name}&nbsp;&nbsp;&nbsp;이메일:{email}
      </p>
    </li>
  );
}

export default UserItem;
