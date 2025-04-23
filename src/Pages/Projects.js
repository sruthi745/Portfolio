import React, { useState } from 'react';
import '../Styles/Projects.css';
import { FaHtml5, FaCss3Alt, FaJs, FaBootstrap, FaNodeJs, FaDatabase, FaBlender, FaGithub, FaJava, FaTools } from 'react-icons/fa';
import { SiDjango, SiPostgresql, SiAngular, SiUnrealengine, SiJira, SiJenkins } from 'react-icons/si';

function Projects() {
  const [selected, setSelected] = useState(null);

  const projects = [
    {
      projectName: 'Metro Data Warehouse | Bridgewater State University',
      projectDescription: 'Developed a data warehouse for METRO stores, enhancing marketing strategies through real-time customer behavior analytics.',
      skills: ['Java', 'SQL'],
      date: 'Sep 2023 – Dec 2023',
      githubLink: 'https://github.com/sruthi745/Metro_Data_Warehouse',
    },
    {
      projectName: 'Customer Support Ticket System | Bridgewater State University',
      projectDescription: 'Created a web-based ticket system improving customer service efficiency via automated query handling.',
      skills: ['J2EE', 'JSP', 'Servlets', 'JDBC', 'MySQL'],
      date: 'Jan 2024 – Apr 2024',
      githubLink: 'https://github.com/sruthi745/Customer_Support_Ticket_System',
    },
    {
      projectName: 'Task Management System | Bridgewater State University',
      projectDescription: 'Enhances team productivity with integrated task tracking and reporting features.',
      skills: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'Django', 'PostgreSQL'],
      date: 'May 2024 – Aug 2024',
      githubLink: 'https://github.com/sruthi745/Task_Management_System',
    },
    {
      projectName: 'Expense Tracker | Bridgewater State University',
      projectDescription: 'Streamlines personal finance with automated expense tracking and analysis.',
      skills: ['Angular', 'Node.js', 'Express.js', 'MySQL'],
      date: 'Jan 2024 – Apr 2024',
      githubLink: 'https://github.com/sruthi745/Expense_Tracker',
    },
    {
      projectName: 'Spine Simulation | University of Massachusetts Boston',
      projectDescription: 'A 3D simulation of the spine for medical research, utilized by leading medical professionals.',
      skills: ['3D Slicer', 'Blender', 'Unreal Engine'],
      date: 'Jan 2023 – Apr 2023',
      githubLink: 'https://github.com/sruthi745/Spine_Simulation',
    },
  ];

  const iconMap = {
    HTML: <FaHtml5 style={{ color: '#e34c26' }} />,
    CSS: <FaCss3Alt style={{ color: '#1572b6' }} />,
    JavaScript: <FaJs style={{ color: '#f0db4f' }} />,
    Bootstrap: <FaBootstrap style={{ color: '#563d7c' }} />,
    Django: <SiDjango style={{ color: '#092e20' }} />,
    PostgreSQL: <SiPostgresql style={{ color: '#336791' }} />,
    Angular: <SiAngular style={{ color: '#dd1b16' }} />,
    'Node.js': <FaNodeJs style={{ color: '#68a063' }} />,
    Blender: <FaBlender style={{ color: '#f5792a' }} />,
    'Unreal Engine': <SiUnrealengine style={{ color: '#3c4a61' }} />,
    MySQL: <FaDatabase style={{ color: '#4479a1' }} />,
    Java: <FaJava style={{ color: '#f89820' }} />,
    SQL: <FaDatabase style={{ color: '#f89820' }} />,
    '3D Slicer': <FaTools style={{ color: '#6c757d' }} />,
    J2EE: <SiJira style={{ color: '#007396' }} />,
    JSP: <SiJira style={{ color: '#007396' }} />,
    Servlets: <SiJenkins style={{ color: '#d24939' }} />,
    JDBC: <FaJava style={{ color: '#f89820' }} />,
  };

  const toggleSelection = (index) => {
    setSelected(selected === index ? null : index);
  };

  return (
    <div className="dp project df">
      <div className="ofc-project">
        <div className="projects-grid">
          {projects.map((project, index) => (
            <div className={`project-card ${selected === index ? 'expand' : ''}`} key={index} onClick={() => toggleSelection(index)}>
              <h3 className="project-title">{project.projectName}</h3>
              <div className="project-date">{project.date}</div>
              <p>{project.projectDescription}</p>
              <div className="project-skills">
                <strong>Skills:</strong>
                {project.skills.map((skill, skillIndex) => (
                  <span key={skillIndex} className="skill-icon">
                    {iconMap[skill]} {skill}
                  </span>
                ))}
              </div>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="view-project">
                <FaGithub /> View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projects;
