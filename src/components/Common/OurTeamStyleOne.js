import React from 'react';
import { Link } from "gatsby"

import TeamImg1 from "../../assets/images/team/team-img1.jpg"
import TeamImg2 from "../../assets/images/team/team-img2.jpg"
import TeamImg3 from "../../assets/images/team/team-img3.jpg"
import TeamImg4 from "../../assets/images/team/team-img4.jpg"
import TeamImg5 from "../../assets/images/team/team-img5.jpg"
import TeamImg6 from "../../assets/images/team/team-img6.jpg"

const OurTeamStyleOne = () => {
    return (
        <div className="team-area ptb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="single-team-box">
                            <img src={TeamImg1} alt="team-image" />

                            <div className="content">
                                <h3>James Anderson</h3>
                                <span>CEO</span>
                            </div>

                            <ul className="social-link">
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-facebook'></i></a></li>
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-twitter'></i></a></li>
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-instagram'></i></a></li>
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-linkedin'></i></a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="single-team-box">
                            <img src={TeamImg2} alt="team-image" />

                            <div className="content">
                                <h3>Sarah Taylor</h3>
                                <span>Marketing Lead</span>
                            </div>

                            <ul className="social-link">
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-facebook'></i></a></li>
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-twitter'></i></a></li>
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-instagram'></i></a></li>
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-linkedin'></i></a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="section-title">
                            <span className="sub-title">Our Team</span>
                            <h2>We Help to Acheive Your Business Goal</h2>

                            <Link to="/team-1" className="learn-more-btn">
                                <i className="left-icon flaticon-next-button"></i> 
                                View All <i className="right-icon flaticon-next-button"></i>
                            </Link>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="single-team-box">
                            <img src={TeamImg3} alt="team-image" />

                            <div className="content">
                                <h3>Taylor Sopia</h3>
                                <span>Web Designer</span>
                            </div>

                            <ul className="social-link">
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-facebook'></i></a></li>
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-twitter'></i></a></li>
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-instagram'></i></a></li>
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-linkedin'></i></a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="single-team-box">
                            <img src={TeamImg4} alt="team-image" />

                            <div className="content">
                                <h3>Harry Steve</h3>
                                <span>Web Developer</span>
                            </div>

                            <ul className="social-link">
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-facebook'></i></a></li>
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-twitter'></i></a></li>
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-instagram'></i></a></li>
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-linkedin'></i></a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="single-team-box">
                            <img src={TeamImg5} alt="team-image" />

                            <div className="content">
                                <h3>Alina Smith</h3>
                                <span>Advisor</span>
                            </div>

                            <ul className="social-link">
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-facebook'></i></a></li>
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-twitter'></i></a></li>
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-instagram'></i></a></li>
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-linkedin'></i></a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-6">
                        <div className="single-team-box">
                            <img src={TeamImg6} alt="team-image" />

                            <div className="content">
                                <h3>David Warner</h3>
                                <span>Support</span>
                            </div>

                            <ul className="social-link">
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-facebook'></i></a></li>
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-twitter'></i></a></li>
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-instagram'></i></a></li>
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-linkedin'></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurTeamStyleOne;