import React from 'react';
import Project from './Project';
import project1Image from '../images/Screenshot 2023-07-18 172621.png';
import project2Image from '../images/Screenshot 2023-07-18 172536.png';

function Portfolio() {
  return (
    <section className="portfolio">
      <h2>Portfolio</h2>
      <div className="projects">
        <Project
          title="Asteria Application"
          image={project1Image}
          deployLink="https://marshallpeters5.github.io/asteria-app/"
          githubLink="https://github.com/marshallpeters5/asteria-app"
        />
        <Project
          title="Moody Application"
          image={project2Image}
          deployLink="https://tranquil-wildwood-45278.herokuapp.com/login"
          githubLink="https://github.com/Sabplpz/Moody"
        />
        {/* Add more Project components as needed */}
      </div>
    </section>
  );
}

export default Portfolio;
