// Navigation.js
import React from 'react';

function Navigation({ currentSection, handleSectionChange, toggleDarkMode, isDarkMode }) {

  return (
    <nav className="bg-rose-500 p-4 dark:bg-rose-700">
      <div className="container mx-auto flex justify-between items-center">
        <ul className="flex justify-center space-x-5 md:space-x-4">
          {['about', 'portfolio', 'contact', 'resume'].map(section => (
            <li
              key={section}
              className={`cursor-pointer p-2 ${currentSection === section ? 'text-white' : 'text-pink-200'} hover:text-white`}
              onClick={() => handleSectionChange(section)}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </li>
          ))}
        </ul>
        <button 
          onClick={toggleDarkMode} 
          className="bg-pink-700 p-2 rounded text-white hover:bg-pink-600 dark:bg-gray-600 dark:hover:bg-gray-500"
        >
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </div>
    </nav>
  );
}

export default Navigation;
