import React from 'react';
import './Blogs.css';
import Hash from '../Components/Hash';
import Server from '../Assets/Server.jpg';
import Code from '../Assets/Code.jpg';
import tic from '../Assets/tic.jpg';

function Blogs() {
  const blogs = [
    {
      title: 'Connecting Frontend with Backend',
      imageUrl: Code,
      body: "Developed a full-stack AI Image Generator using MERN stack for generating unique images based on user inputs and pre-defined styles.", 
      BlogLink: 'https://mayankt.hashnode.dev/connecting-frontend-with-backend-mern', 
    },
    {
      title: 'Web Servers: The Backbone of the Internet',
      imageUrl: Server,
      body: 'Develop a fully functional YouTube clone web application using modern front-end technologies and Rapid API.',
      BlogLink: 'https://mayankt.hashnode.dev/web-servers-the-backbone-of-the-internet',
    },
    {
      title: 'Building Tic-Tac-Toe by React',
      imageUrl: tic,
      body: 'Designed and developed a Real Estate application using ReactJS and TailwindCSS. User-friendly and intuitive application',
      BlogLink: 'https://mayankt.hashnode.dev/understanding-props-hooks-usestate-useeffect-by-building-tic-tac-toe',
    },

  ];

  return (
    <div className='project-container'>
      <h1>Blogs</h1>
      <div className="cards-container">
        {blogs.map((blog, index) => (
          <Hash
            key={index}
            title={blog.title}
            imageUrl={blog.imageUrl}
            body={blog.body}
            BlogLink={blog.BlogLink}
           
          />
        ))}
      </div>
    </div>
  );
}

export default Blogs;
