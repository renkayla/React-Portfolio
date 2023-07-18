import React from 'react';
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';
import Contact from './Contact';
import Resume from './Resume';

function Content({ section }) {
  return (
    <div className="content">
      {section === 'about' && <AboutMe />}
      {section === 'portfolio' && <Portfolio />}
      {section === 'contact' && <Contact />}
      {section === 'resume' && <Resume />}
    </div>
  );
}

export default Content;
