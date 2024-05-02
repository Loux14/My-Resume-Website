import React from 'react';
import './Projects.css'; // Assurez-vous de créer ce fichier CSS pour le style


// Définissez vos projets sous forme de tableau d'objets
const projects = [
  {
    id: 1,
    title: 'Email Client',
    lang: ['js.png', 'html.png'],
    subtitle: 'HTML CSS JAVASCRIPT ',
    text: 'This is a project',
    image: 'project1.png',
    link: '/projet1' // Lien vers les détails du projet
  },
  {
    id: 2,
    title: 'Enigma',
    lang: ['java.png'],
    subtitle: 'Description du Projet 2',
    text: 'This is a project',
    image: 'project2.png',
    link: '/projet2'
  },
  {
    id: 3,
    title: 'Resume Website',
    lang: ['react.png'],
    subtitle: 'Description du Projet 2',
    text: 'This is a project',
    image: 'project3.png',
    link: '/projet2'
  },
  {
    id: 4,
    title: 'Subway',
    lang: ['logo512.png', 'logo512.png', 'logo512.png'],
    subtitle: 'Description du Projet 2',
    text: 'This is a project',
    image: 'logo512.png',
    link: '/projet2'
  },
  {
    id: 5,
    title: 'Mail Server',
    lang: ['logo512.png', 'logo512.png', 'logo512.png'],
    subtitle: 'Description du Projet 2',
    text: 'This is a project',
    image: 'logo512.png',
    link: '/projet2'
  },
  {
    id: 6,
    title: 'Ducky Script',
    lang: ['ducky-script.png'],
    subtitle: 'Description du Projet 2',
    text: 'This is a project',
    image: 'ducky.png',
    link: '/projet2'
  },



];

function Projects() {
  return (
    <div className="projects-container">
      {projects.map(project => (
        <div key={project.id} className="project-thumbnail">
          <div className="thumbnail-image">
            <img src={project.image} alt={project.title} />
          </div>
          <div className="project-details">
            <h1>{project.title}</h1>
            <div className="lang-images">
              {project.lang.map((image, index) => (
                <img key={index} src={image} alt={`Vignette ${index}`} className='lang' />
              ))}
            </div>
            <p>{project.text}</p>
            <p>{project.subtitle}</p>
            <a href={project.link} className="project-link">GitHub</a>
          </div>

        </div>
      ))}
    </div>
  );
}

export default Projects;