import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './Navbar.css';

const Navbar = () => {
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <a href="/" className="navbar-logo" onClick={() => scrollToSection('top')}>
          M&T
        </a>
      </div>
      <div className="navbar-middle">
        <a href="#" onClick={() => scrollToSection('Hero')}>
          About
        </a>
        <a href="#" onClick={() => scrollToSection('Project')}>
          Projects
        </a>
        <a href="#" onClick={() => scrollToSection('Blogs')}>
          Blogs
        </a>
      </div>
      <div className="navbar-right">
        <a href="https://github.com/MAYANK-TRIPATH" target="_blank" rel="noopener noreferrer" className="social-link">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://www.linkedin.com/in/mayanktripathii/" target="_blank" rel="noopener noreferrer" className="social-link">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://twitter.com/_mayanktripathi" target="_blank" rel="noopener noreferrer" className="social-link">
          <FontAwesomeIcon icon={faTwitter} />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
