import React from 'react';
import profileImage from '../images/000365790028.jpg';

function Header() {
  return (
    <header className="bg-pink-300 p-5 flex items-center dark:bg-pink-500">
      <h1 className="text-xl font-bold mr-5 md:text-2xl">Kayla Nichols</h1>
      <img className="w-12 h-12 rounded-full md:w-14 md:h-14" src={profileImage} alt="Profile" />
      <p className="text-white ml-2.5 md:text-lg">Problem Solving Nerd</p>
    </header>
  );
}

export default Header;
