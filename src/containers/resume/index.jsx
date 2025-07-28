import React from 'react'
import PageHeaderContent from '../../components/pageHeaderContent';
import { data } from './utils';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import './styles.scss'
import { MdWork, MdSchool, MdVerified } from 'react-icons/md'
import { FaDownload, FaEye, FaFileAlt } from 'react-icons/fa';

const Resume = () => {
    return (
        <section id='resume' className='resume'>
            <PageHeaderContent headerText='Resume' icon={<FaFileAlt size={40} />} />

            <div className="timeline">

                {/* Experience */}
                <div className="timeline__exp">
                    <h3 className='timeline__exp__header-text'>Experience</h3>
                    <VerticalTimeline layout="1-column" lineColor="var(--yellow-theme-main-color)">
                        {
                            data.experience.map((item, i) => (
                                <VerticalTimelineElement
                                    key={i}
                                    className='timeline__exp__vertical-timeline-element'
                                    contentStyle={{
                                        background: 'none',
                                        color: 'var(--yellow-theme-sub-text-color)',
                                        border: '1.5px solid var(--yellow-theme-main-color)'
                                    }}
                                    date={item.date}
                                    icon={<MdWork />}
                                    iconStyle={{
                                        background: '#181818',
                                        color: 'var(--yellow-theme-main-color)',
                                    }}
                                >
                                    <div className="vertical-timeline-element-title-wrapper">
                                        <h3>{item.title}</h3>
                                        <h4>{item.subTitle}</h4>
                                    </div>
                                    <p>{item.description}</p>
                                </VerticalTimelineElement>
                            ))
                        }
                    </VerticalTimeline>
                </div>

                {/* Education */}
                <div className="timeline__edu">
                    <h3 className='timeline__edu__header-text'>Education</h3>
                    <VerticalTimeline layout="1-column" lineColor="var(--yellow-theme-main-color)">
                        {
                            data.education.map((item, i) => (
                                <VerticalTimelineElement
                                    key={i}
                                    className='timeline__edu__vertical-timeline-element'
                                    contentStyle={{
                                        background: 'none',
                                        color: 'var(--yellow-theme-sub-text-color)',
                                        border: '1.5px solid var(--yellow-theme-main-color)'
                                    }}
                                    date={item.date}
                                    icon={<MdSchool />}
                                    iconStyle={{
                                        background: '#181818',
                                        color: 'var(--yellow-theme-main-color)',
                                    }}
                                >
                                    <div className="vertical-timeline-element-title-wrapper">
                                        <h3>{item.title}</h3>
                                        <h4>{item.subTitle}</h4>
                                    </div>
                                    <p>{item.description}</p>
                                </VerticalTimelineElement>
                            ))
                        }
                    </VerticalTimeline>
                </div>

                {/* Certifications */}
                <div className="timeline__cert">
                    <h3 className='timeline__cert__header-text'>Certifications</h3>
                    <VerticalTimeline layout="1-column" lineColor="var(--yellow-theme-main-color)">
                        {
                            data.certifications.map((item, i) => (
                                <VerticalTimelineElement
                                    key={i}
                                    className='timeline__cert__vertical-timeline-element'
                                    contentStyle={{
                                        background: 'none',
                                        color: 'var(--yellow-theme-sub-text-color)',
                                        border: '1.5px solid var(--yellow-theme-main-color)'
                                    }}
                                    date={item.date}
                                    icon={<MdVerified />}
                                    iconStyle={{
                                        background: '#181818',
                                        color: 'var(--yellow-theme-main-color)',
                                    }}
                                >
                                    <div className="vertical-timeline-element-title-wrapper">
                                        <h3>{item.title}</h3>
                                        <h4>{item.subTitle}</h4>
                                    </div>
                                    <p>{item.description}</p>
                                </VerticalTimelineElement>
                            ))
                        }
                    </VerticalTimeline>
                </div>
            </div>
            <div className="resume__buttons">
                <a
                    href="/SahabasKhan_Resume1.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="resume__btn view"
                >
                    <FaEye className="icon" />
                    View Resume
                </a>
                <a
                    href="/SahabasKhan_Resume1.pdf"
                    download
                    className="resume__btn download"
                >
                    <FaDownload className="icon" />
                    Download Resume
                </a>
            </div>
        </section>
    )
}


export default Resume
