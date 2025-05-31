import React from "react";
import { motion } from "framer-motion";
import "../Styles/Skills.css";
import {
  FaHtml5, FaCss3Alt, FaBootstrap, FaJs, FaReact, FaAngular,
  FaNodeJs, FaJava, FaPython, FaAws, FaServer
} from "react-icons/fa";
import {
  SiTypescript, SiNextdotjs, SiSpringboot, SiMongodb,
  SiPostgresql, SiMysql, SiOracle
} from "react-icons/si";

const skillCategories = [
  {
    title: "Front-End Technologies",
    animation: { x: -200, opacity: 0 },
    skills: [
      { icon: <FaHtml5 style={{ color: "#E34F26" }} />, name: "HTML5" },
      { icon: <FaCss3Alt style={{ color: "#1572B6" }} />, name: "CSS3" },
      { icon: <FaBootstrap style={{ color: "#563D7C" }} />, name: "Bootstrap" },
      { icon: <FaJs style={{ color: "#F7DF1E" }} />, name: "JavaScript" },
      { icon: <SiTypescript style={{ color: "#007ACC" }} />, name: "TypeScript" },
      { icon: <FaReact style={{ color: "#61DBFB" }} />, name: "React" },
      { icon: <FaAngular style={{ color: "#DD0031" }} />, name: "Angular" },
      { icon: <SiNextdotjs style={{ color: "#000000" }} />, name: "Next.js" }
    ]
  },
  {
    title: "Back-End Technologies",
    animation: { x: 200, opacity: 0 },
    skills: [
      { icon: <FaJava style={{ color: "#007396" }} />, name: "Java" },
      { icon: <FaPython style={{ color: "#306998" }} />, name: "Python" },
      { icon: <SiSpringboot style={{ color: "#6DB33F" }} />, name: "Spring Boot" },
      { icon: <FaNodeJs style={{ color: "#8CC84B" }} />, name: "Node.js" },
      { icon: <FaJava style={{ color: "#007396" }} />, name: "Spring MVC" },
      { icon: <FaJava style={{ color: "#007396" }} />, name: "Spring Data JPA" },
      { icon: <FaNodeJs style={{ color: "#8CC84B" }} />, name: "Express.js" }
    ]
  },
  {
    title: "Databases & Cloud",
    animation: { x: -200, opacity: 0 },
    skills: [
      { icon: <SiMongodb style={{ color: "#47A248" }} />, name: "MongoDB" },
      { icon: <SiPostgresql style={{ color: "#336791" }} />, name: "PostgreSQL" },
      { icon: <SiMysql style={{ color: "#4479A1" }} />, name: "MySQL" },
      { icon: <SiOracle style={{ color: "#F80000" }} />, name: "Oracle" },
      { icon: <FaAws style={{ color: "#FF9900" }} />, name: "AWS" },
      { icon: <FaServer style={{ color: "#009688" }} />, name: "SQL" }
    ]
  }
];

const Skills = () => {
  return (
    <div className="skills-container">
      {skillCategories.map((category, index) => (
        <motion.div
          key={index}
          className="skill-category"
          initial={category.animation}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h2>{category.title}</h2>
          <div className="skills-list">
            {category.skills.map((skill, idx) => (
              <div key={idx} className="skill-item">
                {skill.icon}
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Skills;
