import React from 'react';
import '../Styles/Experience.css';
import { FaJava, FaReact, FaDatabase, FaAws } from 'react-icons/fa';
import {
  SiSpringboot, SiPostgresql, SiApachekafka, SiMongodb,
  SiRedux, SiHibernate, SiRedis, SiMysql, SiJavascript
} from 'react-icons/si';
import { motion } from 'framer-motion';
import { oldCompanyHistory } from '../Shared/Constant';

const updatedOldCompanyHistory = oldCompanyHistory.map(company => ({
  ...company,
  designation: 'Software Engineer'
}));

const techIcons = {
  'Fidelity Investments': [FaJava, SiSpringboot, FaReact, SiRedux, SiApachekafka, SiHibernate, SiRedis, SiMongodb, FaAws],
  'Capgemini': [SiPostgresql, FaDatabase, SiSpringboot, SiJavascript, FaReact],
  'Bridgewater State University': []
};

const newExperience = [
  {
    name: 'Bridgewater State University',
    designation: 'Graduate Assistant | Orientation Engagement Advisor',
    location: 'Bridgewater, Massachusetts, United States',
    startDate: 'Sep 2023',
    endDate: 'Apr 2024',
    skills: [
      'Leadership',
      'Team Management',
      'Communication',
      'Critical Thinking',
      'Mentorship',
      'Adaptability'
    ]
  }
];

const experienceList = [...newExperience, ...updatedOldCompanyHistory].sort((a, b) => {
  if (a.name === 'Fidelity Investments') return -1;
  if (a.name === 'Capgemini') return 1;
  return 0;
});

const getAnimation = (companyName) => {
  if (companyName === 'Fidelity Investments') {
    return { initial: { y: -100, opacity: 0 }, animate: { y: 0, opacity: 1 }, transition: { duration: 0.6 } };
  } else if (companyName === 'Bridgewater State University') {
    return { initial: { x: 100, opacity: 0 }, animate: { x: 0, opacity: 1 }, transition: { duration: 0.6 } };
  } else if (companyName === 'Capgemini') {
    return { initial: { y: 100, opacity: 0 }, animate: { y: 0, opacity: 1 }, transition: { duration: 0.6 } };
  }
  return { initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.6 } };
};

const Experience = () => {
  return (
    <div className='experience-container'>
      <div className='experience-wrapper'>
        <div className='company-history'>
          {experienceList.map((company, index) => (
            <motion.div
              key={index}
              className='company-card'
              initial={getAnimation(company.name).initial}
              animate={getAnimation(company.name).animate}
              transition={getAnimation(company.name).transition}
            >
              <div className='company-info'>
                <h2>{company.name}</h2>
                <p>{company.designation} | {company.location}</p>
                <p>{company.startDate} – {company.endDate || 'Present'}</p>
              </div>
              <div className='tech-stack'>
                {techIcons[company.name]?.length ? (
                  techIcons[company.name].map((Icon, i) => (
                    <Icon key={i} className='tech-icon' />
                  ))
                ) : (
                  <div className='skill-tags'>
                    {company.skills.map((skill, i) => (
                      <span key={i} className='skill-tag'>{skill}</span>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
