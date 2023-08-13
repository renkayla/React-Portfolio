import React from 'react';
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';

function Content({ section }) {
  return (
    <div className="bg-rose-500 dark:bg-rose-800 p-12 text-white text-center">
      {section === 'about' && (
        <div>
          <h2 className="text-2xl font-bold mb-5">About Me</h2>
          <AboutMe />
        </div>
      )}
      {section === 'portfolio' && (
        <div>
          <h2 className="text-2xl font-bold mb-5">Portfolio</h2>
          <Portfolio />
        </div>
      )}
      {section === 'contact' && (
        <div>
          <h2 className="text-2xl font-bold mb-5">Contact</h2>
          <Contact />
        </div>
      )}
      {section === 'resume' && (
        <div>
          <h2 className="text-2xl font-bold mb-5">Resume</h2>
          <Resume />
        </div>
      )}
    </div>
  );
}

export default Content;
