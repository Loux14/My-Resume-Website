import React from 'react';
import './Projects.css';



const projects = [
  {
    id: 1,
    title: 'Top App',
    lang: ['swift.png'],
    subtitle: 'Semester 4 - Personal',
    text: 'Ranking App',
    image: 'top.png',
    link: 'https://apps.apple.com/ca/app/top-ranking/id6743449298'
  },
  {
    id: 2,
    title: 'Facial Measurement App',
    lang: ['swift.png'],
    subtitle: 'Semester 4 - Professional',
    text: 'Optical Glasses measurements',
    image: 'lavue.png',
    link: 'https://github.com/Loux14/Facial-Measurement-iOS-App/tree/main'
  },
  {
    id: 3,
    title: 'Email Client',
    lang: ['js.png', 'html.png'],
    subtitle: 'Semester 1',
    text: 'First project ever, a simple email client able to send and display emails or contacts. Fake emails and contacts are in the local storage just for the exemple.',
    image: 'project1.png',
    link: 'https://github.com/Loux14/Mail-Client'
  },
  {
    id: 4,
    title: 'Resume Website',
    lang: ['react.png'],
    subtitle: 'Semester 3 - Personal',
    text: 'This website is a first project to learn React.js basics.',
    image: 'project3.png',
    link: 'https://github.com/Loux14/My-Resume-Website'
  },
  {
    id: 5,
    title: 'Login System',
    lang: ['php.png', 'mysql.png', 'html.png', 'js.png'],
    subtitle: 'Semester 3',
    text: 'Login system with a database, able to create new users, log in, and log out. The database stores information about the users and logs, with hash and salt for the password.',
    image: 'new_user.png',
    link: 'https://github.com/Loux14/logged'
  },
  {
    id: 6,
    title: 'Mail Server',
    lang: ['js.png', 'node.png', 'html.png'],
    subtitle: 'Semester 1',
    text: 'The goal of the project was to serve the mail client with a server. The server is able to store encrypted emails, and display them to the client.',
    image: 'mail-server.png',
    link: 'https://github.com/Loux14/Mail-Server'
  },
  {
    id: 7,
    title: 'Enigma',
    lang: ['java.png'],
    subtitle: 'Semester 2',
    text: 'Simplified Enigma Machine, without a GUI. The machine is able to encrypt and decrypt messages. The rotors positions are customizable.',
    image: 'project2.png',
    link: 'https://github.com/Loux14/Enigma'
  },

  {
    id: 8,
    title: 'Ducky Script',
    lang: ['ducky-script.png'],
    subtitle: 'Semester 2 - Personal',
    text: 'Small script to try out a Raspberry Pi Pico turned into a bad USB Rubber Ducky, hidden inside an iPhone 7',
    image: 'ducky.png',
    link: 'https://github.com/Loux14/duckyScript'
  },
  {
    id: 9,
    title: 'BattleShip',
    lang: ['python.png'],
    subtitle: 'Semester 4 - Personal',
    text: 'Terminal BattleShip Game',
    image: 'bataillenavale.png',
    link: 'https://github.com/Loux14/Bataille-Navale'
  },




];

function Projects() {
  return (
    <div className="projects-container">
      {projects.map(project => (
        <a key={project.id} className="project-thumbnail" href={project.link} target="_blank" rel="noopener noreferrer">
          <div className="thumbnail-image-p">
            <img src={project.image} alt={project.title} />
          </div>
          <div className="project-details">
            <h1>{project.title}</h1>
            <div className="lang-images">
              {project.lang.map((image, index) => (
                <img key={index} src={image} alt={`Vignette ${index}`} className='lang' />
              ))}
            </div>
            <p style={{ fontSize: '1.2em' }}><strong>{project.subtitle}</strong></p>
            <p>{project.text}</p>
          </div>

        </a>
      ))}
    </div>
  );
}

export default Projects;