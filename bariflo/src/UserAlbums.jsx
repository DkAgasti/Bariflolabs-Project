import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Nav from './Nav';

function UserAlbums() {
  const [albums, setAlbums] = useState([]);
  
  
  const { id } = useParams();

  useEffect(() => {
    
    fetch(`https://jsonplaceholder.typicode.com/users/${id}/albums`)
      .then(response => response.json())
      .then(data => setAlbums(data))
      .catch(error => console.error('Error fetching albums:', error));
  }, [id]);

  return (
    <>
    <Nav/>
    <div className="h-screen w-screen flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold mb-4">User  Albums</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {albums.map(album => (
          <div key={album.id} className="bg-white p-4 rounded-md shadow-md hover:shadow-lg">
            <h2 className="text-2xl font-bold">{album.title}</h2>
          </div>
        ))}
      </div>
    </div>
    </>
  );
}

export default UserAlbums;