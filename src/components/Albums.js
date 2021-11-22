import axios from 'axios';
import React, { useState } from 'react';
import { useQuery } from 'react-query';

function fetchAlbums({ queryKey }) {
  return axios.get(
    `https://jsonplaceholder.typicode.com/albums?_limit=2&_page=${queryKey[1]}`
  );
}

function Albums() {
  const [page, setPage] = useState(1);
  const {
    isLoading,
    isError,
    data: albums,
    isFetching,
  } = useQuery(['albums', page], fetchAlbums, { keepPreviousData: true });

  const prePageButton = () => setPage(page => page - 1);
  const nextPageButton = () => setPage(page => page + 1);

  if (isLoading) return <div>로딩 중...</div>;
  if (isError) return <div>에러...!</div>;

  return (
    <>
      <ul style={{ marginLeft: 16 }}>
        <h2>(Id) Title</h2>
        {albums?.data.map(album => (
          <li key={album.id}>
            ({album.id}) {album.title}
          </li>
        ))}
      </ul>
      <div>
        <button onClick={prePageButton} disabled={page === 1}>
          이전 페이지
        </button>
        <button onClick={nextPageButton} disabled={page === 5}>
          다음 페이지
        </button>
      </div>
      {isFetching && '로딩 중...!'}
    </>
  );
}

export default Albums;
