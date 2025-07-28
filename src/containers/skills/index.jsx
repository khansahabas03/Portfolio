import React from 'react'
import { Line } from 'rc-progress'
import PageHeaderContent from '../../components/pageHeaderContent'
import { Animate, AnimateKeyframes } from 'react-simple-animate'
import { skillsData } from './utils'
import './styles.scss'
import { FaTools } from 'react-icons/fa';

const Skills = () => {
    return (
        <section id='skills' className='skills'>
            <PageHeaderContent
                headerText='My Skills'
                icon={<FaTools size={40} />}
            />

            <div className="skills__content-wrapper">
                {skillsData.map((item, i) => (
                    <div key={i}
                        className='skills__content-wrapper__inner-content'

                    >
                        <Animate
                            play
                            duration={1}
                            delay={0.3}
                            start={{ transform: 'translateX(-200px)' }}
                            end={{ transform: 'translateX(0px)' }}
                        >
                            <h3 className='skills__content-wrapper__inner-content__category-text'>
                                {item.label}
                            </h3>

                            <div className='skills__content-wrapper__inner-content__progressbar-container'>
                                {item.data.map((skillItem, j) => (
                                    <AnimateKeyframes
                                        key={`${item.label}-${skillItem.skillName}`}
                                        play
                                        duration={1}
                                        keyframes={["opacity:1", "opacity:0"]}
                                        iterationCount="1"
                                    >
                                        <div className='progressbar-wrapper' key={j}>
                                            <div className="progressbar-label">
                                                <p>{skillItem.skillName}</p>
                                                <span className="percentage">{skillItem.percentage}%</span>
                                            </div>
                                            <Line
                                                percent={skillItem.percentage}
                                                strokeWidth='2'
                                                strokeColor="var(--yellow-theme-main-color)"
                                                trailWidth={'2'}
                                                strokeLinecap="square"
                                            />
                                        </div>
                                    </AnimateKeyframes>

                                ))}
                            </div>
                        </Animate>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Skills
