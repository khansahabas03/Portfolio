import React from 'react';
import PageHeaderContent from '../../components/pageHeaderContent';
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { FaLaptopCode } from "react-icons/fa";
import "react-vertical-timeline-component/style.min.css";
import './styles.scss';

const projects = [
    {
        title: 'Medical Web Application',
        description:
            'Developed using Spring Boot and MySQL for managing patient records, appointments, and billing with RBAC and HIPAA compliance.',
        tech: ['Spring Boot', 'MySQL', 'Ext JS'],
    },
    {
        title: 'Event Management System',
        description:
            'Full-stack platform using React and Spring Boot for event tracking, live updates, and real-time notifications with PostgreSQL backend.',
        tech: ['React', 'Spring Boot', 'WebSockets', 'PostgreSQL'],
    },
    {
        title: 'Employee Management System',
        description:
            'Developed using Spring Boot and OracleDB for managing Employee records, adding, updatng, deleting etc.',
        tech: ['Spring Boot', 'OracleDB', 'React'],
    },
];

const Projects = () => {
    return (
        <section id="projects" className="projects">
            <PageHeaderContent headerText="Projects" icon={<FaLaptopCode size={40} />} />

            <VerticalTimeline layout="1-column" lineColor="var(--yellow-theme-main-color)">
                {projects.map((project, index) => (
                    <VerticalTimelineElement
                        key={index}
                        className="timeline__project"
                        contentStyle={{
                            background: 'transparent',
                            color: 'var(--yellow-theme-sub-text-color)',
                            border: '1.5px solid var(--yellow-theme-main-color)',
                        }}
                        contentArrowStyle={{ borderRight: '7px solid var(--yellow-theme-main-color)' }}
                        icon={<FaLaptopCode />}
                        iconStyle={{
                            background: '#181818',
                            color: 'var(--yellow-theme-main-color)',
                        }}
                    >
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div className="projects__tech">
                            {project.tech.map((tech, i) => (
                                <span key={i} className="projects__tech__tag">{tech}</span>
                            ))}
                        </div>
                    </VerticalTimelineElement>
                ))}
            </VerticalTimeline>
        </section>
    );
};

export default Projects;
