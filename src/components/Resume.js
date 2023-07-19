import React from 'react';
import './Resume.css';

function Resume() {
  return (
    <section className="resume">
      <h2 className="resume-title">Resume</h2>
      <div className="resume-download">
        <a className="resume-link" href="/path/to/resume.pdf" target="_blank" rel="noopener noreferrer">
          Download Resume
        </a>
      </div>
      <ul className="resume-list">
        <li className="resume-list-item">
          Proficiency 1
        </li>
        <li className="resume-list-item">
          Proficiency 2
        </li>
        {/* Add more proficiencies as needed */}
      </ul>
    </section>
  );
}

export default Resume;

