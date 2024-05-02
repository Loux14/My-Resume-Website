import React from 'react';
import './Skills.css'; // Assurez-vous de créer ce fichier CSS pour le style

function Skills() {
  // Tableau de compétences
  const skills = [
    { id: 2, title: 'Java', description: 'Description de la compétence 2', xp: '18 months', level: 'Advanced', image: 'java.png' },
    { id: 1, title: 'JavaScript', description: 'Description de la compétence 1', xp: '2 years', level: 'Intermediate', image: 'js.png' },
    { id: 10, title: 'Python', description: 'Description de la compétence 3', xp: '0 month', level: 'Novice', image: 'python.png' },
    { id: 6, title: 'C', description: 'Description de la compétence 3', xp: '3 months', level: 'Beginner', image: 'c.png' },

    { id: 12, title: 'HTML', description: 'Description de la compétence 3', xp: '2 years', level: 'Beginner', image: 'html.png' },
    { id: 9, title: 'PHP', description: 'Description de la compétence 3', xp: '3 months', level: 'Novice', image: 'php.png' },
    { id: 4, title: 'React.js', description: 'Description de la compétence 1', xp: '6 months', level: 'Beginner', image: 'react.png' },
    { id: 11, title: 'Node.js', description: 'Description de la compétence 3', xp: '3 months', level: 'Novice', image: 'node.png' },


    { id: 5, title: 'MySQL', description: 'Description de la compétence 2', xp: '1 year', level: 'Beginner', image: 'mysql.png' },
    { id: 3, title: 'Kali', description: 'Description de la compétence 3', xp: '3 years', level: 'Moderate', image: 'kali.png' },
    { id: 7, title: 'Git', description: 'Description de la compétence 3', xp: '1 year', level: 'Beginner', image: 'git.png' },
    { id: 8, title: 'Bash', description: 'Description de la compétence 3', xp: '2 years', level: 'Beginner', image: 'linux.png' },

  ];

  return (
    <div className="skills-container">
      <div className="skill-thumbnails">
        {skills.map(skill => (
          <div key={skill.id} className="skill-thumbnail">
            <div className="thumbnail-image-s">
              <img src={skill.image} alt={skill.title} />
            </div>
            <div className="skill-details">
              <h2>{skill.title}</h2>
              <p className='xp'>{skill.xp} </p>
              <p className='level'>{skill.level} </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;
