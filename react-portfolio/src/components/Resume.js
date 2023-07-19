import React from 'react';
import './Resume.css';

function Resume() {
  return (
    <section className="resume">
      <h2>Resume</h2>
      <p>Download my resume:</p>
      <a href="resume.pdf" download>
        Download Resume
      </a>
      <ul>
        <li>Proficiency 1</li>
        <li>Proficiency 2</li>
        {/* Add more proficiencies */}
      </ul>
    </section>
  );
}

export default Resume;

