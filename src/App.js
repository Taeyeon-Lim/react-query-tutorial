import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import Albums from './components/Albums';
import InfiniteQueries from './components/InfiniteQueries';
import User from './components/User';
import UserList from './components/UserList';
import UserPosts from './components/UserPosts';
import Users from './components/Users';
import UsersPosts from './components/UsersPosts';

function App() {
  return (
    <>
      <ul>
        <li>
          <Link to='/'>UserList 페이지</Link>
        </li>
        <li>
          <Link to='/user'>User 페이지</Link>
        </li>
        <li>
          <Link to='/usersPosts'>UsersPosts 페이지</Link>
        </li>
        <li>
          <Link to='/users'>Users 페이지</Link>
        </li>
        <li>
          <Link to='/userPosts'>userPosts 페이지</Link>
        </li>
        <li>
          <Link to='/paginatedQuery'>paginated-Query 페이지</Link>
        </li>
        <li>
          <Link to='/infiniteQueries'>infinite-Queries 페이지</Link>
        </li>
      </ul>
      <Routes>
        <Route path='/' element={<UserList />} />
        <Route path='/user/:id' element={<User />} />
        <Route path='/user/' element={<User />} />
        <Route path='/usersPosts' element={<UsersPosts />} />
        <Route path='/users' element={<Users />} />
        <Route path='/userPosts' element={<UserPosts nickName='Samantha' />} />
        <Route path='/paginatedQuery' element={<Albums />} />
        <Route path='/infiniteQueries' element={<InfiniteQueries />} />
      </Routes>
    </>
  );
}

export default App;
