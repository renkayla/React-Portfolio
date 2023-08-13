import React from 'react';
import Project from './Project';
import project1Image from '../images/Screenshot 2023-07-18 172621.png';
import project2Image from '../images/Screenshot 2023-07-18 172536.png';
import project3Image from '../images/Screenshot 2023-08-11 180130.png'; 

function Portfolio() {
  return (
<section className="bg-rose-200 p-5 dark:bg-rose-900">
      <h2 className="text-center text-2xl font-bold mb-5">Portfolio</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
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
        <Project
          title="Nurture Navigator"
          image={project3Image}
          deployLink="https://nuturenagivator-7619fea4df9e.herokuapp.com/"
          githubLink="https://github.com/renkayla/NurtureNavigator"
        />
        {/* Add more Project components as needed */}
      </div>
    </section>
  );
}

export default Portfolio;
