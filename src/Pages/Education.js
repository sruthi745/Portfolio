import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import "react-vertical-timeline-component/style.min.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMessage, faLink, faBook, faSoccerBall, faGraduationCap } from '@fortawesome/free-solid-svg-icons'


function Education() {
    return (
        <div className='dp education'>

            <VerticalTimeline lineColor='#d2e3d2'>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ color: '#000000',borderRadius: '1rem',
                    boxShadow: '0.3rem 0.3rem 0.6rem #c8d0e7, -0.2rem -0.2rem 0.5rem #ffffff', background:"#e6e6e6", padding: '1rem' }}
                    contentArrowStyle={{ borderRight: '7px solid  #e6e6e6' }}
                    date="2023 - 2024"
                    iconStyle={{ background: '#e6e6e6', color: 'darkcyan', boxShadow: '0.3rem 0.3rem 0.6rem #c8d0e7, -0.2rem -0.2rem 0.5rem #ffffff' }}
                    icon={<FontAwesomeIcon icon={faGraduationCap}  />}
                >
                    <h3 className="vertical-timeline-element-title">Master of Science in Computer Science</h3>
                    <h4 className="vertical-timeline-element-subtitle">Bridgewater State University, MA, USA</h4>
                    <p>
                       GPA: 3.8/4.0
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ color: '#000000',borderRadius: '1rem',
                    boxShadow: '0.3rem 0.3rem 0.6rem #c8d0e7, -0.2rem -0.2rem 0.5rem #ffffff', background:"#e6e6e6", padding: '1rem' }}
                    contentArrowStyle={{ borderRight: '7px solid  #e6e6e6' }}
                    date="2022 - 2023"
                    iconStyle={{ background: '#e6e6e6', color: 'darkcyan', boxShadow: '0.3rem 0.3rem 0.6rem #c8d0e7, -0.2rem -0.2rem 0.5rem #ffffff' }}
                    icon={<FontAwesomeIcon icon={faGraduationCap}  />}
                >
                    <h3 className="vertical-timeline-element-title">Master of Science in Computer Science </h3>
                    <h4 className="vertical-timeline-element-subtitle">University of Massachusetts Boston, MA, USA</h4>
                    <p>
                       GPA: 3.1/4.0
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ color: '#000000',borderRadius: '1rem',
                    boxShadow: '0.3rem 0.3rem 0.6rem #c8d0e7, -0.2rem -0.2rem 0.5rem #ffffff', background:"#e6e6e6", padding: '1.1rem' }}
                    contentArrowStyle={{ borderRight: '7px solid  #e6e6e6' }}
                    date="2018 - 2022"
                    iconStyle={{ background: '#e6e6e6', color: 'darkcyan', boxShadow: '0.3rem 0.3rem 0.6rem #c8d0e7, -0.2rem -0.2rem 0.5rem #ffffff' }}
                    icon={<FontAwesomeIcon icon={faGraduationCap}  />}
                >
                    <h3 className="vertical-timeline-element-title">Bachelors in Bachelors in Computer Science and Engineering</h3>
                    <h4 className="vertical-timeline-element-subtitle">RVR & JC College of Engineering, India</h4>
                    <p>
                       GPA: 3.6/4.0
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    )
}

export default Education