import React from 'react';
import { motion } from 'framer-motion';
import '../Styles/Certifications.css';
const certifications = [
  { name: "C - Spoken Tutorial IIT Bombay"},
  { name: "Python - Spoken Tutorial IIT Bombay"},
  { name: "Java - Spoken Tutorial IIT Bombay"},
  { name: "Arduino - Spoken Tutorial IIT Bombay"},
  { name: "Java (NPTEL)"},
  { name: "Data Analytics with Python (NPTEL)"},
  { name: "Organizational Behavior (NPTEL)"},
];

function Certifications() {
  return (
    <div className="certifications-container">
      {certifications.map((cert, index) => (
        <motion.div
          key={index}
          className="cert-card"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <h3 className="cert-title">{cert.name}</h3>
        </motion.div>
      ))}
    </div>
  );
}

export default Certifications;
