import React from 'react';
import headerImage from '../images/header-image.jpg';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="header-content">
        <div className="header-image">
          <img src={headerImage} alt="Header" />
        </div>
        <div className="header-text">
          <h2 className="header-name">Kayla Nichols</h2>
          <p className="header-job-title">Problem Solving Nerd</p>
        </div>
      </div>
      <nav className="navigation">
        {/* Navigation links */}
      </nav>
    </header>
  );
}

export default Header;

