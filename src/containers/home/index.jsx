import React from 'react'
import './styles.scss'
import { useNavigate } from 'react-router-dom'
import { Animate } from 'react-simple-animate'
import ImageSlider from '../../components/slider';
import { MdWavingHand } from 'react-icons/md';


const Home = () => {
    const navigate = useNavigate();
    // console.log(navigate);
    const handleNavigateToContactMePage = () => {
        navigate('/contact')
    }
    return (
        <section id='home' className='home'>

            <div className="home__text-wrapper">

                <h1>
                    <MdWavingHand size={24} style={{ marginRight: '8px' }} />
                    <span>Hello!</span>

                    <br />
                    I'm Sahabas Khan.<br />
                    Full Stack Software Developer.
                </h1>
            </div>
            <Animate play duration={1.5} delay={1} start={{ transform: 'translateY(550px)' }}
                end={{ transform: 'translatex(0px)' }}
            >
                <div className="home__contact-me">
                    <button onClick={handleNavigateToContactMePage}>Contact Me</button>
                </div>
            </Animate>
            <div className="home__slider-wrapper">
                <ImageSlider />
            </div>
        </section>
    )
}

export default Home;