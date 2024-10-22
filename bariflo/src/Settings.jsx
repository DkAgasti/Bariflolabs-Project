import React, { useEffect, useState } from 'react'; // Import useEffect and useState
import { Link } from 'react-router-dom';
import Nav from './Nav';

const Settings = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  return (
    <>
    <Nav/>
      <div className="h-screen w-screen flex flex-col items-center p-4">
        <h1 className="text-3xl font-bold mb-4">Settings Page</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {users.map(user => (
            <Link key={user.id} to={`/user/${user.id}`}>
              <div className="bg-white p-4 rounded-md shadow-md hover:shadow-lg">
                <h2 className="text-2xl font-bold">{user.name}</h2>
                <p className="text-gray-600">{user.username}</p>
                <p className="text-gray-600">{user.email}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Settings;
