import React from 'react';
import { Link } from "gatsby"
import ModalVideo from 'react-modal-video';

import BannerImage2 from '../../assets/images/banner-img2.jpg'
import BannerImage3 from '../../assets/images/banner-img3.jpg'
import Shape1 from "../../assets/images/shape/shape1.png"
import Shape2 from "../../assets/images/shape/shape2.png"
import Shape3 from "../../assets/images/shape/shape3.png"
import Shape4 from "../../assets/images/shape/shape4.png"
import Shape5 from "../../assets/images/shape/shape5.png"
import Shape6 from "../../assets/images/shape/shape6.png"
import Shape7 from "../../assets/images/shape/shape7.png"
import Shape8 from "../../assets/images/shape/shape8.png"
import Shape13 from "../../assets/images/shape/shape13.png"
import Shape14 from "../../assets/images/shape/shape14.png"

import Loadable from '@loadable/component'
const OwlCarousel = Loadable(() => import('react-owl-carousel3'))


const options = {
    loop: true,
    nav: true,
    dots: true,
    autoplayHoverPause: true,
    autoplay: true,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    margin: 5,
    items: 1,
    navText: [
        "<i class='flaticon-back'></i>",
        "<i class='flaticon-chevron'></i>"
    ]
};

const MainBanner = () => {
    // Popup Video
	const [isOpen, setIsOpen] = React.useState(true);
    const openModal = () => {
        setIsOpen(!isOpen);
    }

    // Carousel
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])

    return (
        <React.Fragment>
            <div className="home-wrapper-area">
                <div className="container-fluid">
                    {display ? <OwlCarousel 
                        className="home-slides owl-carousel owl-theme"
                        {...options}
                    > 
                        <div className="single-banner-item">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-12">
                                    <div className="banner-content">
                                        <span className="sub-title">Growth Your Business</span>
                                        <h1>We Provide Best Digital Marketing Solutions</h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                        
                                        <div className="btn-box">
                                            <div className="d-flex align-items-center">
                                                <Link to="/contact" className="default-btn">
                                                    Get Started
                                                </Link>

                                                <div
                                                    onClick={e => {e.preventDefault(); openModal()}}
                                                    className="video-btn popup-youtube"
                                                > 
                                                    <i className="flaticon-play-button"></i> Watch Video
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-12">
                                    <div className="banner-image">
                                        <img src={BannerImage2} alt="Banner One" />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="single-banner-item">
                            <div className="row align-items-center">
                                <div className="col-lg-6 col-md-12">
                                    <div className="banner-content">
                                        <span className="sub-title">Seo Marketing</span>
                                        <h1>We Provide Best SEO Marketing Solutions</h1>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                        
                                        <div className="btn-box">
                                            <div className="d-flex align-items-center">
                                                <Link to="/contact" className="default-btn">
                                                    Get Started
                                                </Link>

                                                <div
                                                    onClick={e => {e.preventDefault(); openModal()}}
                                                    className="video-btn popup-youtube"
                                                > 
                                                    <i className="flaticon-play-button"></i> Watch Video
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-lg-6 col-md-12">
                                    <div className="banner-image">
                                        <img src={BannerImage3} alt="Banner Two" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </OwlCarousel> : ''}
                </div>

                <div className="shape1"><img src={Shape1} alt="Shape" /></div>
                <div className="shape2"><img src={Shape2} alt="Shape" /></div>
                <div className="shape3"><img src={Shape3} alt="Shape" /></div>
                <div className="shape4"><img src={Shape4} alt="Shape" /></div>
                <div className="shape5"><img src={Shape5} alt="Shape" /></div>
                <div className="shape6"><img src={Shape6} alt="Shape" /></div>
                <div className="shape7"><img src={Shape7} alt="Shape" /></div>
                <div className="shape8"><img src={Shape8} alt="Shape" /></div>
                <div className="shape13"><img src={Shape13} alt="Shape" /></div>
                <div className="shape14"><img src={Shape14} alt="Shape" /></div>
            </div>

            {/* If you want to change the video need to update videoID */}
            <ModalVideo 
                channel='youtube' 
                isOpen={!isOpen} 
                videoId='bk7McNUjWgw' 
                onClose={() => setIsOpen(!isOpen)} 
            />
        </React.Fragment>
    )
}

export default MainBanner;