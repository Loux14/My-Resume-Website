import React from 'react';
import './Skills.css'; // Assurez-vous de créer ce fichier CSS pour le style

function Skills() {
  // Tableau de compétences
  const skills = [
    { id: 1, title: 'Compétence 1', description: 'Description de la compétence 1', image: 'js.png' },
    { id: 2, title: 'Compétence 2', description: 'Description de la compétence 2', image: 'java.png' },
    { id: 4, title: 'Compétence 3', description: 'Description de la compétence 3', image: 'kali.png' },    { id: 1, title: 'Compétence 1', description: 'Description de la compétence 1', image: 'js.png' },
    { id: 5, title: 'Compétence 2', description: 'Description de la compétence 2', image: 'java.png' },
    { id: 6, title: 'Compétence 3', description: 'Description de la compétence 3', image: 'kali.png' },
    // Ajoutez les autres compétences ici
  ];

  return (
    <div className="skills-container">
      <div className="skill-thumbnails">
        {skills.map(skill => (
          <div key={skill.id} className="skill-thumbnail">
            <div className="thumbnail-image">
              <img src={skill.image} alt={skill.title} />
            </div>
            <div className="skill-details">
              <h2>{skill.title}</h2>
              <p>{skill.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
