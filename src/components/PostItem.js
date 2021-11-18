import React from 'react';

function PostItem({ id, title, content }) {
  return (
    <li>
      <b>
        {id}: {title}
      </b>
      <p>{content}</p>
    </li>
  );
}

export default PostItem;
