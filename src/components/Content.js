import React from 'react';
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';
import Project from './Project';

function Content({ section }) {
  return (
    <div className="content">
      {section === 'about' && (
        <div>
          <h2 className="content-heading">About Me</h2>
          <AboutMe />
        </div>
      )}
      {section === 'portfolio' && (
        <div>
          <h2 className="content-heading">Portfolio</h2>
          <Portfolio />
        </div>
      )}
      {section === 'contact' && (
        <div>
          <h2 className="content-heading">Contact</h2>
          <Contact />
        </div>
      )}
      {section === 'resume' && (
        <div>
          <h2 className="content-heading">Resume</h2>
          <Resume />
        </div>
      )}
    </div>
  );
}

export default Content;
