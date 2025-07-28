import React from 'react'
import PageHeaderContent from '../../components/pageHeaderContent';
import { BsInfoCircleFill } from 'react-icons/bs'
import { Animate } from 'react-simple-animate'
import './styles.scss'
import { DiJava, DiReact } from 'react-icons/di';
import { SiSpringboot } from 'react-icons/si';
import { FaDatabase } from 'react-icons/fa';

const personalDetails = [
  {
    label: "Name:",
    value: "Sahabas Khan",
  },
  {
    label: "Age:",
    value: "25",
  },
  {
    label: "Address:",
    value: "Kendrapara, Odisha, INDIA",
  },
  {
    label: "Email:",
    value: "khansahabas05@gmail.com",
  },
  {
    label: "Contact No:",
    value: "+91 7978131528",
  },
];
const jobsummary = `Associate Software Developer with two years of hands-on experience in building scalable and
maintainable Java-based web applications. Skilled in full-stack development using Java,
Spring Boot, React.js, RESTful APIs, and SQL. Strong understanding of backend architecture,
database integration, and front-end collaboration. Committed to writing clean, testable code 
and delivering on-time solutions.`;
const About = () => {
  return (
    <section id='about' className='about'>
      <PageHeaderContent headerText='About Me'
        icon={<BsInfoCircleFill size={40} />} />
      <div className="about__content">
        <div className="about__content__personalWrapper">
          <Animate play duration={0.75} delay={1} start={{ transform: 'translateX(-900px)' }}
            end={{ transform: 'translatex(0px)' }}
          >
            <h3>Full Stack Developer.</h3>
            <p>{jobsummary}</p>
          </Animate>
          <Animate play duration={1.5} delay={1} start={{ transform: 'translateX(500px)' }}
            end={{ transform: 'translatex(0px)' }}
          >
            <h3 className='personalInfo'>
              Personal Information
            </h3>
            <ul>
              {
                personalDetails.map((item, i) => (
                  <li key={i}>
                    <span className='title'>{item.label}</span>
                    <span className="value">{item.value}</span>
                  </li>
                ))
              }
            </ul></Animate>
        </div>
        <div className="about__content__servicesWrapper">
          <Animate play duration={1.5} delay={1} start={{ transform: 'translateX(600px)' }}
            end={{ transform: 'translatex(0px)' }}
          >
            <div className="about__content__servicesWrapper__innerContent">
              <div>
                <SiSpringboot size={60} color='var(--yellow-theme-main-color)' />
              </div>

              <div>
                <DiJava size={60} color='var(--yellow-theme-main-color)' />
              </div>
              <div>
                <FaDatabase size={60} color='var(--yellow-theme-main-color)' />
              </div>
              <div>
                <DiReact size={60} color='var(--yellow-theme-main-color)' />
              </div>
            </div>
          </Animate>

        </div>

      </div>
    </section>
  )
}

export default About;