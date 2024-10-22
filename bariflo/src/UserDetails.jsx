import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Nav from './Nav';

const UserDetails = () => {
  const { id } = useParams();
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => response.json())
      .then(data => setUser(data));
  }, [id]);

  return (
    <>
      <Nav />
      <div className="min-h-screen w-full flex flex-col items-center p-4">
        <h1 className="text-3xl font-bold mb-4 text-center">User Details</h1>
        
        <div className="bg-white p-6 rounded-md shadow-md w-full max-w-md md:max-w-lg lg:max-w-xl">
          <h2 className="text-2xl font-bold mb-2 text-center">{user.name}</h2>
          <p className="text-gray-600 text-center mb-1">Username: {user.username}</p>
          <p className="text-gray-600 text-center mb-1">Email: {user.email}</p>
          <p className="text-gray-600 text-center mb-1">Phone: {user.phone}</p>
          <p className="text-gray-600 text-center mb-1">Company: {user.company?.name}</p>
        </div>
        
        <div className="flex justify-center space-x-4 mt-6 w-full max-w-md">
          <Link
            to={`/user/${id}/posts`}
            className="bg-blue-500 px-4 py-2 rounded-md text-white hover:text-gray-200 transition-all text-center w-full md:w-auto">
            See Posts
          </Link>
          <Link
            to={`/user/${id}/albums`}
            className="bg-blue-500 px-4 py-2 rounded-md text-white hover:text-gray-200 transition-all text-center w-full md:w-auto">
            See Albums
          </Link>
        </div>
      </div>
    </>
  );
};

export default UserDetails;
