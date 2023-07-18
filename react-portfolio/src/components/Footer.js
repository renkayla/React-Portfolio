import React from 'react';

function Footer() {
  return (
    <footer>
      <p>© {new Date().getFullYear()} Your Name</p>
      <ul>
        <li>
          <a href="https://github.com/renkayla">GitHub</a>
        </li>
        <li>
          <a href="https://linkedin.com/in/">LinkedIn</a>
        </li>
        {/* Add other links as needed */}
      </ul>
    </footer>
  );
}

export default Footer;
