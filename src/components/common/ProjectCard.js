import React from 'react';

function ProjectCard({ project }) {
  return (
    <a
      className="project-thumbnail"
      href={project.link}
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="thumbnail-image-p">
        <img src={project.image} alt={project.title} />
      </div>
      <div className="project-details">
        <h1>{project.title}</h1>
        <div className="lang-images">
          {project.lang.map((image, index) => (
            <img key={index} src={image} alt={`Tech ${index + 1}`} className="lang" />
          ))}
        </div>
        <p style={{ fontSize: '1.2em' }}>
          <strong>{project.subtitle}</strong>
        </p>
        <p>{project.text}</p>
      </div>
    </a>
  );
}

export default ProjectCard;
