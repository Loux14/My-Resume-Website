import React from 'react';
import './Projects.css';



const projects = [
  {
    id: 1,
    title: 'Email Client',
    lang: ['js.png', 'html.png'],
    subtitle: 'Semester 1',
    text: 'First project ever, a simple email client able to send and display emails. Login and password are functionnal but not secure. Fake emails are in the local storage just for the exemple.',
    image: 'project1.png',
    link: 'https://github.com/Loux14/Mail-Client'
  },
  {
    id: 2,
    title: 'Enigma',
    lang: ['java.png'],
    subtitle: 'Semester 2',
    text: 'Simplified Enigma Machine, without a GUI. The machine is able to encrypt and decrypt messages. The rotors positions are customizable.',
    image: 'project2.png',
    link: 'https://github.com/Loux14/Enigma'
  },
  {
    id: 3,
    title: 'Resume Website',
    lang: ['react.png'],
    subtitle: 'Semester 3 - Personal',
    text: 'This website is a first project to learn React.js basics.',
    image: 'project3.png',
    link: '/projet2'
  },
  {
    id: 4,
    title: 'Subway',
    lang: ['java.png'],
    subtitle: 'Semester 2',
    text: 'Data structure project, to learn graphs. It replicates the Paris Subway, and give the shortest path between two preset stations (within the code). It uses 2 algorithms: Dijkstra and Bellman-Ford.',
    image: 'subway.png',
    link: 'https://github.com/Loux14/Paris-Subway'
  },
  {
    id: 5,
    title: 'Mail Server',
    lang: ['js.png', 'node.png', 'html.png'],
    subtitle: 'Semester 1',
    text: 'The goal of the project was to serve the mail client with a server. The server is able to store encrypted emails, and display them to the client.',
    image: 'mail-server.png',
    link: 'https://github.com/Loux14/Mail-Server'
  },
  {
    id: 6,
    title: 'Ducky Script',
    lang: ['ducky-script.png'],
    subtitle: 'Semester 2 - Personal',
    text: 'Small script to try out a Raspberry Pi Pico turned into a bad USB Rubber Ducky, hidden inside an iPhone 7',
    image: 'ducky.png',
    link: 'https://github.com/Loux14/duckyScript'
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