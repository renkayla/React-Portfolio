import React from 'react';
import './Navigation.css';

function Navigation({ currentSection, handleSectionChange }) {
  return (
    <nav className="navigation">
      <ul className="navigation-list">
        <li
          className={`navigation-item ${currentSection === 'about' ? 'active' : ''}`}
          onClick={() => handleSectionChange('about')}
        >
          About Me
        </li>
        <li
          className={`navigation-item ${currentSection === 'portfolio' ? 'active' : ''}`}
          onClick={() => handleSectionChange('portfolio')}
        >
          Portfolio
        </li>
        <li
          className={`navigation-item ${currentSection === 'contact' ? 'active' : ''}`}
          onClick={() => handleSectionChange('contact')}
        >
          Contact
        </li>
        <li
          className={`navigation-item ${currentSection === 'resume' ? 'active' : ''}`}
          onClick={() => handleSectionChange('resume')}
        >
          Resume
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
