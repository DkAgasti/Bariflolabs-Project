import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; 
import Nav from './Nav';

function UserPosts() {
  const [posts, setPosts] = useState([]);
  

  const { id } = useParams();

  useEffect(() => {

    fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
      .then(response => response.json())
      .then((data) => {
        setPosts(data);
        console.log(data);
      })
      .catch(error => console.error('Error fetching posts:', error));
  }, [id]);

  return (
    <>
    <Nav/>
    <div className="h-screen w-screen flex flex-col items-center p-4">
      <h1 className="text-3xl font-bold mb-4">User {id} Posts</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.length > 0 ? (
          posts.map(post => (
            <div key={post.id} className="bg-white p-4 rounded-md shadow-md hover:shadow-lg">
              <h2 className="text-2xl font-bold">{post.title}</h2>
              <p className="text-gray-600">{post.body}</p>
            </div>
          ))
        ) : (
          <p>No posts available for this user.</p>
        )}
      </div>
    </div>
    </>
  );
}

export default UserPosts;
