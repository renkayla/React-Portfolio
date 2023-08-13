import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Navigation from './components/Navigation';
import Content from './components/Content';
import Footer from './components/Footer';
import './App.css'; 

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [currentSection, setCurrentSection] = useState('about');  // Adding this state to manage the current section

  useEffect(() => {
    const savedTheme = localStorage.getItem('dark-mode') || '';
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(prev => !prev);
    if (!isDarkMode) {
      localStorage.setItem('dark-mode', 'dark');
      document.documentElement.classList.add('dark');
    } else {
      localStorage.setItem('dark-mode', 'light');
      document.documentElement.classList.remove('dark');
    }
  };

  const handleSectionChange = (section) => {
    setCurrentSection(section);
  };

  return (
    <div className={`App ${isDarkMode ? 'dark' : ''} text-center dark:bg-gray-800 dark:text-white`}>
      <div className="h-[40vmin] pointer-events-none animate-spin duration-5000 linear infinite">
        {/* Logo */}
      </div>
      <Header />
      <Navigation 
        toggleDarkMode={toggleDarkMode} 
        currentSection={currentSection} 
        handleSectionChange={handleSectionChange}
      />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
