import React from 'react';
import { projects } from '../../data';
import { ProjectCard } from '../common';
import '../../styles/Projects.css';

function Projects() {
  return (
    <div className="projects-container">
      {projects.map(project => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
}

export default Projects;
