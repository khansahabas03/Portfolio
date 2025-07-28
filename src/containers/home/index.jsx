import React from 'react'
import './styles.scss'
import { useNavigate } from 'react-router-dom'
import { Animate } from 'react-simple-animate'
//import profilePic from '../../assets/profile.png';
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
            {/* <div className="home__slider-wrapper">
                <ImageSlider />
            </div> */}

            {/* <Animate
                play
                duration={1.2}
                delay={0.3}
                start={{ opacity: 0, transform: 'scale(0.5)' }}
                end={{ opacity: 1, transform: 'scale(1)' }}
            >
                <img src={profilePic} alt="Profile" className="home__profile-pic" />
            </Animate> */}
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