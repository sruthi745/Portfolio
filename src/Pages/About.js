import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import "../Styles/About.css";

function About() {
  const [phoneLink, setPhoneLink] = useState('tel:+18577013596');

  useEffect(() => {
    const userAgent = navigator.userAgent;

    if (userAgent.includes('Mac OS')) {
      setPhoneLink('facetime:+18577013596');
    } else if (userAgent.includes('Win')) {
      setPhoneLink('tel:+18577013596');
    } else if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(userAgent)) {
      setPhoneLink('tel:+18577013596');
    }
  }, []);

  return (
    <div className="about-container">
      <div className="about-header">
        <h1 className="text-3d slide-in-left">Sruthi Chirumamilla</h1>
        <h2 className="text-3d slide-in-right">Software Engineer</h2>
      </div>

      <div className="about-wrapper">
        <p className="about-paragraph fade-in">
          Hello, I'm Sruthi Chirumamilla, a passionate Software Engineer with expertise in building dynamic and high-performing web applications.
          I specialize in both frontend and backend development, and I enjoy solving complex problems with creative and scalable solutions.
          I have experience working with modern technologies such as React, Angular, Node.js, Java, Spring Boot, and cloud platforms.
          I am constantly learning and evolving to stay at the forefront of technology, and I love collaborating with teams to deliver great products.
        </p>
      </div>

      <div className="social-box">
        <div className="social-links">
          <a href={phoneLink} className="social-icon blink" aria-label="Phone">
            <FontAwesomeIcon icon={faPhoneAlt} />
          </a>
          <a href="mailto:s.chirumamilla007@gmail.com" className="social-icon blink" aria-label="Email">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <a href="https://linkedin.com/in/sruthichirumamilla" target="_blank" rel="noopener noreferrer" className="social-icon blink" aria-label="LinkedIn">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com/sruthi745" target="_blank" rel="noopener noreferrer" className="social-icon blink" aria-label="GitHub">
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>
      </div>

      <div className="download-cv">
        <a href="${process.env.PUBLIC_URL}/Sruthi_Software_Engineer_Resume.pdf" download className="download-cv-btn pulse">
          Download CV
        </a>
      </div>
    </div>
  );
}

export default About;
