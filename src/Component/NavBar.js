import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/NavBar.css';

function NavBar({ toggleMenu }) {
  return (
    <div className="nav">
      <div className="nav-profile">
        {/* Profile Image and Name */}
        <div className="profile-image"></div>
      </div>
      <div className="nav-options-cont">
        <Link to="/about" onClick={toggleMenu}>
          <div className="div-option">About</div>
        </Link>
        <Link to="/education" onClick={toggleMenu}>
          <div className="div-option">Education</div>
        </Link>
        <Link to="/skills" onClick={toggleMenu}>
          <div className="div-option">Skills</div>
        </Link>
        <Link to="/experience" onClick={toggleMenu}>
          <div className="div-option">Professional Experience</div>
        </Link>
        <Link to="/projects" onClick={toggleMenu}>
          <div className="div-option">Project Experience</div>
        </Link>
        <Link to="/certifications" onClick={toggleMenu}>
          <div className="div-option">Certifications</div>
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
