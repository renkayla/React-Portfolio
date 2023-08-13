import React from 'react';

function Footer() {
  return (
    <footer className="bg-rose-500 p-20 text-center dark:bg-rose-700">
      <p className="text-white mb-2.5">© {new Date().getFullYear()} Your Name</p>
      <ul className="list-none p-0 m-0 space-x-2.5 inline-flex">
        <li>
          <a 
            className="text-white hover:underline dark:hover:text-pink-300" 
            href="https://github.com/renkayla" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </li>
        <li>
          <a 
            className="text-white hover:underline dark:hover:text-pink-300" 
            href="https://linkedin.com/in/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
        </li>
        {/* Add other links as needed */}
      </ul>
    </footer>
  );
}

export default Footer;
