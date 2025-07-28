import React from 'react';
import './styles.scss';

const ImageSlider = () => {
    return (
        <div className="slider">
            <div className="slide"><img src="/images/1.png" alt="Slide 1" /></div>
            <div className="slide"><img src="/images/2.jpeg" alt="Slide 2" /></div>
            <div className="slide"><img src="/images/3.jpg" alt="Slide 3" /></div>
            <div className="slide"><img src="/images/4.jpg" alt="Slide 4" /></div>
            <div className="slide"><img src="/images/5.jpg" alt="Slide 1" /></div>
            <div className="slide"><img src="/images/6.jpg" alt="Slide 2" /></div>
            <div className="slide"><img src="/images/7.jpg" alt="Slide 3" /></div>
            <div className="slide"><img src="/images/8.jpeg" alt="Slide 4" /></div>
        </div>
    );
};

export default ImageSlider;
