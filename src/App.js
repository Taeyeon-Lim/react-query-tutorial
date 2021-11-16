import React from 'react';
import { Link, Route, Routes } from 'react-router-dom';
import User from './components/User';
import UserList from './components/UserList';

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
      </ul>
      <Routes>
        <Route path='/' element={<UserList />} />
        <Route path='/user/:id' element={<User />} />
        <Route path='/user/' element={<User />} />
      </Routes>
    </>
  );
}

export default App;
