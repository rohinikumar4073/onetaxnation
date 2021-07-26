import React from 'react';

import FeedbackImg1 from '../../assets/images/feedback-img1.jpg'
import FeedbackImg2 from '../../assets/images/feedback-img2.jpg'
import FeedbackImg3 from '../../assets/images/feedback-img3.jpg'
import FeedbackImg4 from '../../assets/images/feedback-img4.jpg'

import User1 from '../../assets/images/user1.jpg'
import User2 from '../../assets/images/user2.jpg'
import User3 from '../../assets/images/user3.jpg'
import Shape16 from '../../assets/images/shape/shape16.png'

import Loadable from '@loadable/component'
const OwlCarousel = Loadable(() => import('react-owl-carousel3'))

const options = {
    loop: true,
    nav: false,
    dots: true,
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

const TestimonialStyleTwo = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])

    return (
        <div className="feedback-area ptb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="feedback-image">
                            <img src={FeedbackImg1} alt="Feedback" />
                            <img src={FeedbackImg2} alt="Feedback" />
                            <img src={FeedbackImg3} alt="Feedback" />
                            <img src={FeedbackImg4} alt="Feedback" />
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="feedback-content">
                            <span className="sub-title">Feedback</span>
                            <h2>What Our Clients Are Saying?</h2>

                            {display ? <OwlCarousel 
                                className="feedback-slides owl-carousel owl-theme"
                                {...options}
                            > 
                                <div className="single-feedback-item">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>

                                    <div className="client-info">
                                        <div className="d-flex align-items-center">
                                            <img src={User1} alt="User" />
                                            <div className="title">
                                                <h3>John Smith</h3>
                                                <span>Python Developer</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="single-feedback-item">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>

                                    <div className="client-info">
                                        <div className="d-flex align-items-center">
                                            <img src={User2} alt="User" />
                                            <div className="title">
                                                <h3>Sarah Taylor</h3>
                                                <span>Web Developer</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="single-feedback-item">
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>

                                    <div className="client-info">
                                        <div className="d-flex align-items-center">
                                            <img src={User3} alt="User" />
                                            <div className="title">
                                                <h3>James Anderson</h3>
                                                <span>Web Designer</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </OwlCarousel> : ''}
                        </div>
                    </div>
                </div>
            </div>

            <div className="shape16">
                <img src={Shape16} alt="Shape" />
            </div>
        </div>
    )
}

export default TestimonialStyleTwo;