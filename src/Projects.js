import React from 'react';
import './Projects.css'; // Assurez-vous de créer ce fichier CSS pour le style


// Définissez vos projets sous forme de tableau d'objets
const projects = [
  {
    id: 1,
    title: 'Email Client',
    lang: ['js.png', 'html.png'],
    subtitle: 'Semester 1',
    text: 'This is a project',
    image: 'project1.png',
    link: '/projet1' // Lien vers les détails du projet
  },
  {
    id: 2,
    title: 'Enigma',
    lang: ['java.png'],
    subtitle: 'Semester 2',
    text: 'This is a project',
    image: 'project2.png',
    link: '/projet2'
  },
  {
    id: 3,
    title: 'Resume Website',
    lang: ['react.png'],
    subtitle: 'Semester 3 - Personal Project',
    text: 'This is a project',
    image: 'project3.png',
    link: '/projet2'
  },
  {
    id: 4,
    title: 'Subway',
    lang: ['java.png'],
    subtitle: 'Semester 2',
    text: 'This is a project',
    image: 'subway.png',
    link: '/projet2'
  },
  {
    id: 5,
    title: 'Mail Server',
    lang: ['js.png', 'node.png', 'html.png'],
    subtitle: 'Semester 1',
    text: 'This is a project',
    image: 'mail-server.png',
    link: '/projet2'
  },
  {
    id: 6,
    title: 'Ducky Script',
    lang: ['ducky-script.png'],
    subtitle: 'Semester 2 - Personal Project',
    text: 'This is a project',
    image: 'ducky.png',
    link: '/projet2'
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
            <p>{project.subtitle}</p>
            <p>{project.text}</p>
          </div>

        </a>
      ))}
    </div>
  );
}

export default Projects;