import React from 'react';

function Resume() {
  return (
<section className="bg-rose-200 p-5 dark:bg-rose-900">
      <h2 className="text-2xl font-bold mb-4">Resume</h2>
      <div className="mb-4 md:mb-10">
        <a className="text-black hover:underline dark:text-white" href="/path/to/resume.pdf" target="_blank" rel="noopener noreferrer">
          Download Resume
        </a>
      </div>
      <ul className="list-disc pl-5 md:pl-10">
        <li className="mb-2 md:mb-4">
          Proficiency 1
        </li>
        <li className="mb-2 md:mb-4">
          Proficiency 2
        </li>
        {/* Add more proficiencies as needed */}
      </ul>
    </section>
  );
}

export default Resume;
