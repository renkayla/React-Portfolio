import React from 'react';
import profileImage from '../images/000365790028.jpg';

function AboutMe() {
  return (
    <section className="bg-cbeef3 dark:bg-rose-700 p-5 text-center">
      <img className="w-48 h-48 rounded-full mb-5 object-cover" src={profileImage} alt="Profile" />
      <h2 className="text-2xl font-bold mb-2.5 text-rose-800 dark:text-white">Your Name</h2>
      <p className="text-lg text-rose-900 dark:text-white">Your job title or brief description about yourself.</p>
    </section>
  );
}

export default AboutMe;
