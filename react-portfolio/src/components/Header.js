import React from 'react';
import './Header.css';
import profileImage from '../images/profile-image.jpg';

function Header() {
  return (
    <header className="header">
      <h1 className="header-name">Kayla Nichols</h1>
      <img className="header-image" src={profileImage} alt="Profile" />
      <p className="header-title">Problem Solving Nerd</p>
    </header>
  );
}

export default Header;


