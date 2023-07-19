import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <p className="footer-text">© {new Date().getFullYear()} Your Name</p>
      <ul className="footer-links">
        <li>
          <a href="https://github.com/renkayla" className="footer-link">GitHub</a>
        </li>
        <li>
          <a href="https://linkedin.com/in/" className="footer-link">LinkedIn</a>
        </li>
        {/* Add other links as needed */}
      </ul>
    </footer>
  );
}

export default Footer;
