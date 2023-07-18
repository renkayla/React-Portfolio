import React from 'react';

function Navigation({ currentSection, handleSectionChange }) {
  return (
    <nav className="navigation">
      <ul>
        <li
          className={currentSection === 'about' ? 'active' : ''}
          onClick={() => handleSectionChange('about')}
        >
          About Me
        </li>
        <li
          className={currentSection === 'portfolio' ? 'active' : ''}
          onClick={() => handleSectionChange('portfolio')}
        >
          Portfolio
        </li>
        <li
          className={currentSection === 'contact' ? 'active' : ''}
          onClick={() => handleSectionChange('contact')}
        >
          Contact
        </li>
        <li
          className={currentSection === 'resume' ? 'active' : ''}
          onClick={() => handleSectionChange('resume')}
        >
          Resume
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;

