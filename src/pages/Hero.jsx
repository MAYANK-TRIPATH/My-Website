import React from 'react';
import './Hero.css';
import Mayank from '../Assets/Mayank.jpeg';

const HeroPage = () => {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <div className="hero-image">
          <img src={Mayank} alt="Mayank" />
        </div>
        <div className="hero-info">
          <h1>Mayank Tripathi</h1>
          <h3>Fullstack Developer</h3>
          <p>Welcome to my website! I'm Mayank Tripathi, a passionate full-stack MERN developer
            with expertise in frontend and backend technologies. With practical
            experience gained through project development, I excel at creating robust
            web applications that integrate powerful features and captivating designs.
            I thrive in collaborative environments and am eager to contribute my skills to new
            projects. Let's connect and bring your ideas to life!

          </p>
          <a href="https://drive.google.com/file/d/1UdrVaW98cV1Eg6ZjcvedJv8bhJBYFDh7/view?usp=drive_link" target="_blank">
            <button>Download Resume</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroPage;
