import React from 'react';
import { Link } from "gatsby"

import AboutImg from "../../assets/images/about-img2.png"
import Shape15 from "../../assets/images/shape/shape15.png"

const AboutSection = () => {
    return (
        <div className="about-area pb-100">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="about-img">
                            <img src={AboutImg} alt="About" />
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="about-content">
                            <div className="text">
                                <span className="sub-title">About Us</span>
                                <h2>Enjoy Full-Service Digital Marketing Expertise</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                
                                <ul className="funfacts-list">
                                    <li>
                                        <div className="list">
                                            <i className="flaticon-menu-1"></i>
                                            <h3>376</h3>
                                            <p>Completed projects</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="list">
                                            <i className="flaticon-web-settings"></i>
                                            <h3>7548</h3>
                                            <p>Working hours were spent</p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="list">
                                            <i className="flaticon-conversation"></i>
                                            <h3>350</h3>
                                            <p>Expert team members</p>
                                        </div>
                                    </li>
                                </ul>

                                <Link to="/about-us-2" className="default-btn">
                                    More About Us
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="shape15">
                <img src={Shape15} alt="Shape" />
            </div>
        </div>
    )
}

export default AboutSection;