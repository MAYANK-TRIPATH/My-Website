import React from 'react';
import './Project.css';
import Card from '../Components/Card';
import Project2 from '../Assets/Project2.jpg';
import Project1 from '../Assets/Project1.jpg';
import Project3 from '../Assets/Project3.jpg';
import Project4 from '../Assets/Project4.jpg';
import Project5 from '../Assets/Project5.jpg';
import tic from '../Assets/tic.jpg';

function Project() {
  const projects = [
    {
      title: 'AI-Image Generator',
      imageUrl: Project1,
      body: "Developed a full-stack AI Image Generator using MERN stack for generating unique images based on user inputs and pre-defined styles.", 
      githubLink: 'https://github.com/MAYANK-TRIPATH/AI-Image-generator',
      liveLink: 'https://github.com/MAYANK-TRIPATH/AI-Image-generator',  
    },
    {
      title: 'Youtube_clone',
      imageUrl: Project2,
      body: 'Develop a fully functional YouTube clone web application using modern front-end technologies and Rapid API.',
      githubLink: 'https://github.com/MAYANK-TRIPATH/YOUTUBE-clone',
      liveLink: 'https://g2syoutube.netlify.app/',
    },
    {
      title: 'Real-Estate Site',
      imageUrl: Project3,
      body: 'Designed and developed a Real Estate application using ReactJS and TailwindCSS. User-friendly and intuitive application',
      githubLink: 'https://github.com/MAYANK-TRIPATH/RealEstateApp',
      liveLink: 'https://realestateassign.netlify.app/',
    },
    {
      title: 'Crypto-Trans.',
      imageUrl: Project4,
      body: 'It\'s a WEB 3.0 based WebApp that has a feature of transaction of Ethereum. UI is made by using ReactJS, Tailwind CSS, Metamask Wallet',
      githubLink: 'https://github.com/MAYANK-TRIPATH/Web-3.O-Eth-trans',
      liveLink: 'https://github.com/MAYANK-TRIPATH/Web-3.O-Eth-trans',  
    },
    {
      title: 'MoviePlus++',
      imageUrl: Project5,
      body: 'It is a WebApp which fetches Movie with all its details and image from API, UI is is implemented by Reactjs and TailwindCSS , fully responsive application.',
      githubLink: 'https://github.com/MAYANK-TRIPATH/MoviePLUS-',
      liveLink: 'https://github.com/MAYANK-TRIPATH/MoviePLUS-',
    },
    {
      title: 'Tic-Tac-Toe',
      imageUrl: tic,
      body: 'Tic-Tac-Toe game using React which works on web, Hook(useState, UseEffect concepts)and leverage the power of a 2-D array to create the games logic ',
      githubLink: 'https://github.com/MAYANK-TRIPATH/Tic-Tac',
      liveLink: 'https://tic-tic-toe.netlify.app',
    },
  ];

  return (
    <div className='project-container'>
      <h1>Projects</h1>
      <div className="cards-container">
        {projects.map((project, index) => (
          <Card
            key={index}
            title={project.title}
            imageUrl={project.imageUrl}
            body={project.body}
            githubLink={project.githubLink}
            LiveLink={project.liveLink}
          />
        ))}
      </div>
    </div>
  );
}

export default Project;
