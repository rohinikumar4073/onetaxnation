import React from 'react';
import { Link } from "gatsby"

import BannerImg6 from '../../assets/images/banner-img6.png'
import BannerImg7 from '../../assets/images/banner-img7.png'

import Shape2 from '../../assets/images/shape/shape2.png'
import Shape3 from '../../assets/images/shape/shape3.png'
import Shape5 from '../../assets/images/shape/shape5.png'
import Shape6 from '../../assets/images/shape/shape6.png'
import Shape7 from '../../assets/images/shape/shape7.png'
import Shape13 from '../../assets/images/shape/shape13.png'
import Shape8 from '../../assets/images/shape/shape8.png'

import Loadable from '@loadable/component'
const OwlCarousel = Loadable(() => import('react-owl-carousel3'))

const options = {
    loop: true,
    nav: true,
    dots: false,
    autoplayHoverPause: true,
    autoplay: true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    items: 1,
    navText: [
        "<i class='flaticon-back'></i>",
        "<i class='flaticon-chevron'></i>"
    ]
};

const MainBanner = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])

    return (
        <React.Fragment>
            {display ? <OwlCarousel 
                className="home-slides-two owl-carousel owl-theme"
                {...options}
            >
                <div className="banner-section">
                    <div className="container">
                        <div className="home-content">
                            <img src={BannerImg6} alt="image" />
                            <span className="sub-title">Digital Marketing</span>
                            <h1>Boots Your Website Traffic</h1>
                            <p>Get all kinds of hi-tech decesion making consulting services using Artificial Intelligence and Machine Learning from one umbrella.</p>

                            <Link to="/about-us-1" className="default-btn">
                                Learn More
                            </Link>
                        </div>
                    </div>

                    <div className="shape2"><img src={Shape2} alt="Shape" /></div>
                    <div className="shape3"><img src={Shape3} alt="Shape" /></div>
                    <div className="shape5"><img src={Shape5} alt="Shape" /></div>
                    <div className="shape6"><img src={Shape6} alt="Shape" /></div>
                    <div className="shape7"><img src={Shape7} alt="Shape" /></div>
                    <div className="shape13"><img src={Shape13} alt="Shape" /></div>
                    <div className="shape8"><img src={Shape8} alt="Shape" /></div>
                </div>

                <div className="banner-section">
                    <div className="container">
                        <div className="home-content">
                            <img src={BannerImg7} alt="image" />
                            <span className="sub-title">SEO Marketing</span>
                            <h1>Digital Marketing Specialists</h1>
                            <p>Get all kinds of hi-tech decesion making consulting services using Artificial Intelligence and Machine Learning from one umbrella.</p>
                            
                            <Link to="/about-us-1" className="default-btn">
                                Learn More
                            </Link>
                        </div>
                    </div>

                    <div className="shape2"><img src={Shape2} alt="Shape" /></div>
                    <div className="shape3"><img src={Shape3} alt="Shape" /></div>
                    <div className="shape5"><img src={Shape5} alt="Shape" /></div>
                    <div className="shape6"><img src={Shape6} alt="Shape" /></div>
                    <div className="shape7"><img src={Shape7} alt="Shape" /></div>
                    <div className="shape13"><img src={Shape13} alt="Shape" /></div>
                    <div className="shape8"><img src={Shape8} alt="Shape" /></div>
                </div>
            </OwlCarousel> : ''}
        </React.Fragment>
    )
}

export default MainBanner;