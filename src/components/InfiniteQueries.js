import axios from 'axios';
import React, { Fragment } from 'react';
import { useInfiniteQuery } from 'react-query';

function fetchAlbums({ pageParam = 1 }) {
  return axios.get(
    `https://jsonplaceholder.typicode.com/albums?_limit=2&_page=${pageParam}`
  );
}

function InfiniteQueries() {
  const {
    isLoading,
    isError,
    data: albums,
    hasNextPage,
    fetchNextPage,
    isFetching,
    isFetchingNextPage,
  } = useInfiniteQuery('albums', fetchAlbums, {
    getNextPageParam: (_lastPage, pages) =>
      pages.length < 5 ? pages.length + 1 : undefined,
  });

  if (isLoading) return <div>로딩 중...</div>;
  if (isError) return <div>에러...!</div>;

  return (
    <>
      <div style={{ marginLeft: 16 }}>
        <h2>(Id) Title</h2>
        {albums?.pages.map((group, index) => {
          return (
            <Fragment key={index}>
              {group.data.map(album => (
                <p key={album.id}>
                  ({album.id}){album.title}
                </p>
              ))}
            </Fragment>
          );
        })}
      </div>
      <div>
        <button onClick={fetchNextPage} disabled={!hasNextPage}>
          Next Page
        </button>
        <div>{isFetching && !isFetchingNextPage ? '페칭 중!' : null}</div>
      </div>
    </>
  );
}

export default InfiniteQueries;
