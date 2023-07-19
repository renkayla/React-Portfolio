import React from 'react';
import './Resume.css';

function Resume() {
  return (
    <section className="resume">
      <div className="resume-link">
        <a href="#resume-pdf">Download Resume</a>
      </div>
      <div className="resume-proficiencies">
        <h3>Proficiencies</h3>
        <ul>
          <li>Proficiency 1</li>
          <li>Proficiency 2</li>
          <li>Proficiency 3</li>
        </ul>
      </div>
    </section>
  );
}

export default Resume;


