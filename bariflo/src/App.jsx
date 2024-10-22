import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Settings from './Settings';
import UserDetails from './UserDetails';
import UserPosts from './UserPosts';
import UserAlbums from './UserAlbums';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/user/:id" element={<UserDetails />} />
        <Route path="/user/:id/posts" element={<UserPosts />} />
        <Route path="/user/:id/albums" element={<UserAlbums />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
