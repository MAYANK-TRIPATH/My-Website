import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  return (
    <footer className='main'>
      <div className="footer-content">
        <div className="copyright">
          &copy; 2023 Your Company. All rights reserved.
        </div>
        <div className="social-icons">
          <a href="https://github.com/MAYANK-TRIPATH" target="_blank">
            <FontAwesomeIcon icon={faGithub} className="icon" />
          </a>
          <a href="https://www.linkedin.com/in/mayanktripathii/" target="_blank">
            <FontAwesomeIcon icon={faLinkedin} className="icon" />
          </a>
          <a href="https://twitter.com/_mayanktripathi" target="_blank">
            <FontAwesomeIcon icon={faTwitter} className="icon" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
