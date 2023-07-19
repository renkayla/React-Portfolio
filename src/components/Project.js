import React from 'react';
import './Project.css';

function Project({ title, image, deployLink, githubLink }) {
  return (
    <div className="project">
      <img className="project-image" src={image} alt={title} />
      <h3 className="project-title">{title}</h3>
      <div className="project-links">
        <a className="project-link" href={deployLink} target="_blank" rel="noopener noreferrer">
          Deployed App
        </a>
        <a className="project-link" href={githubLink} target="_blank" rel="noopener noreferrer">
          GitHub Repository
        </a>
      </div>
    </div>
  );
}

export default Project;
