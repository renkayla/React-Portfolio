import React from 'react';

function Project({ title, image, deployLink, githubLink }) {
  return (
<div className="bg-rose-200 dark:bg-rose-900 p-5 rounded-md shadow-sm">
      <img className="w-full max-w-md mx-auto rounded-md mb-2.5" src={image} alt={title} />
      <h3 className="text-lg font-medium mb-2.5 text-gray-800 dark:text-white">{title}</h3>
      <div className="flex justify-center space-x-4">
        <a 
          href={deployLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="block text-gray-700 dark:text-gray-200 hover:underline"
        >
          Deployed App
        </a>
        <a 
          href={githubLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="block text-gray-700 dark:text-gray-200 hover:underline"
        >
          GitHub Repository
        </a>
      </div>
    </div>
  );
}

export default Project;
