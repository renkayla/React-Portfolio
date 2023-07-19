import React from 'react';
import aboutMeImage from '../images/about-me-image.jpg';
import './AboutMe.css';

function AboutMe() {
  return (
    <section className="about-me">
      <div className="about-me-content">
        <div className="about-me-image">
          <img src={aboutMeImage} alt="About Me" />
        </div>
        <div className="about-me-text">
          <h2>About Me</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc accumsan
            semper ligula, vel scelerisque mauris finibus ut. Morbi mollis purus ac
            magna gravida cursus. Integer eu felis ut nisi finibus pretium.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
