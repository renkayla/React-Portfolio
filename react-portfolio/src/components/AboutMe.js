import React from 'react';
import './AboutMe.css';
import profileImage from '../images/profile-image.jpg';

function AboutMe() {
  return (
    <section className="about-me">
      <img className="about-me-image" src={profileImage} alt="Profile" />
      <h2 className="about-me-title">Your Name</h2>
      <p className="about-me-description">Your job title or brief description about yourself.</p>
    </section>
  );
}

export default AboutMe;

