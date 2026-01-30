import React from 'react';
import { programmingSkills, securitySkills } from '../../data';
import { SectionTitle, Divider, SkillCard } from '../common';
import '../../styles/Skills.css';

function Skills() {
  return (
    <div className="skills-container">
      <SectionTitle>Security</SectionTitle>
      <div className="skill-thumbnails">
        {securitySkills.map(skill => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </div>

      <Divider />

      <SectionTitle>Programming</SectionTitle>
      <div className="skill-thumbnails">
        {programmingSkills.map(skill => (
          <SkillCard key={skill.id} skill={skill} />
        ))}
      </div>
    </div>
  );
}

export default Skills;
