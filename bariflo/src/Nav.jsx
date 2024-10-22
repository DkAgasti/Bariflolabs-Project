import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>

      <nav className="bg-black p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-2xl font-bold">
            <Link to="/">Bariflolabs</Link>
          </div>

          <div className="hidden md:flex space-x-6">
            <Link to="/" className="text-white hover:text-gray-400">
            <i class="fa-solid fa-house"></i>Home
            </Link>
            <Link to="/settings" className="text-white hover:text-gray-400">
            <i class="fa-solid fa-wrench"></i>settings
            </Link>
          </div>
         
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden bg-black text-white space-y-2 p-4">
            <Link to="/" className="block hover:text-gray-400">
              Home
            </Link>
            <Link to="/settings" className="block hover:text-gray-400">
              Setting
            </Link>
          </div>
        )}
      </nav>

    </>


  );
};

export default Nav;
