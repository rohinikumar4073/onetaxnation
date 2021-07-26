import React from 'react';

import AboutImg2 from '../../assets/images/about-img2.png'

const AboutContentTwo = () => {
    return (
        <div className="about-area ptb-100">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="about-img">
                            <img src={AboutImg2} alt="About" />
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="about-content">
                            <div className="text">
                                <span className="sub-title">About Us</span>
                                <h2>Enjoy Full-Service Digital Marketing Expertise</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>

                                <ul className="features-list">
                                    <li>
                                        <i className="flaticon-speed"></i> 
                                        Learn new skills with our bite-sized video tutorials, then test your knowledge with a quick quiz.
                                    </li>
                                    <li>
                                        <i className="flaticon-speed"></i> Over 300,000 people have already gained this qualification, and are using it to develop and improve their careers.
                                    </li>
                                    <li>
                                        <i className="flaticon-speed"></i> In this introduction to Analytics, we'll show you how to collect and analyse user data and turn it into actionable insights.
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutContentTwo;