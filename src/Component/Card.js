import React from 'react';
import '../Styles/Card.css';

function Card(props) {
  return (
    <div className='card'>
      <div className='box'>
        {/* Project Name (Bold & Large) */}
        <h2 className='project-name'>{props.projectName}</h2>

        {/* Project Description */}
        <p className='project-description'>{props.projectDescription}</p>

        {/* Skills Section */}
        <div className='skills-container'>
          {props.skills.map((skill, index) => (
            <span key={index} className="skill-name" title={skill}>
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Card;
