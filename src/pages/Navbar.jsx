import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="/" className="navbar-logo">M&T</a>
      </div>
      <div className="navbar-middle">
        <a href="/Hero">About</a>
        <a href="/">Projects</a>
        <a href="/">Blog</a>
        <a href="/">Connect</a>
      </div>
      <div className="navbar-right">
        <a href="https://github.com/MAYANK-TRIPATH" target="_blank" className="social-link"><FontAwesomeIcon icon={faGithub} /></a>
        <a href="https://www.linkedin.com/in/mayanktripathii/" target="_blank" className="social-link"><FontAwesomeIcon icon={faLinkedin} /></a>
        <a href="https://twitter.com/_mayanktripathi" target="_blank" className="social-link"><FontAwesomeIcon icon={faTwitter} /></a>
      </div>
    </nav>
  );
};

export default Navbar;
