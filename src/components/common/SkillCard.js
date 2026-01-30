import React from 'react';

function SkillCard({ skill }) {
  return (
    <div className="skill-thumbnail">
      <div className="thumbnail-image-s">
        <img src={skill.image} alt={skill.title} />
      </div>
      <div className="skill-details">
        <h2>{skill.title}</h2>
        <p className="xp">{skill.xp}</p>
        <p className="level">{skill.level}</p>
      </div>
    </div>
  );
}

export default SkillCard;
