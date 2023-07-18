import React from 'react';
import Project from './Project';

function Portfolio() {
  return (
    <section className="portfolio">
      <h2>Portfolio</h2>
      <div className="projects">
        <Project
          title="Asteria Application"
          image="project1.jpg"
          deployLink="https://marshallpeters5.github.io/asteria-app/"
          githubLink="https://github.com/marshallpeters5/asteria-app"
        />
        <Project
          title="Moody Application"
          image="project2.jpg"
          deployLink="https://tranquil-wildwood-45278.herokuapp.com/login"
          githubLink="https://github.com/Sabplpz/Moody"
        />
        {/* Add more Project components as needed */}
      </div>
    </section>
  );
}

export default Portfolio;

