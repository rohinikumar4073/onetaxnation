import React from 'react';
import Layout from "../components/App/Layout"
import SEO from "../components/App/SEO"
import NavbarStyleTwo from '../components/App/NavbarStyleTwo';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/App/Footer';

import TeamImg1 from '../assets/images/team/team-img1.jpg'
import TeamImg2 from '../assets/images/team/team-img2.jpg'
import TeamImg3 from '../assets/images/team/team-img3.jpg'
import TeamImg4 from '../assets/images/team/team-img4.jpg'
import TeamImg5 from '../assets/images/team/team-img5.jpg'
import TeamImg6 from '../assets/images/team/team-img6.jpg'
import TeamImg7 from '../assets/images/team/team-img7.jpg'
import TeamImg8 from '../assets/images/team/team-img8.jpg'
import TeamImg9 from '../assets/images/team/team-img9.jpg'
import TeamImg10 from '../assets/images/team/team-img10.jpg'
import TeamImg11 from '../assets/images/team/team-img11.jpg'
import TeamImg12 from '../assets/images/team/team-img12.jpg'

const Team2 = () => {
    return (
        <Layout>
            <SEO title="Team" />

			<NavbarStyleTwo />

			<PageBanner 
                pageTitle="Team Style Two" 
            />  
			
            <div className="team-area-two pt-100 pb-70">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-team-member">
                                <div className="image">
                                    <img src={TeamImg1} alt="Team" />

                                    <ul className="social-link">
                                        <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-facebook'></i></a></li>
                                        <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-twitter'></i></a></li>
                                        <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-instagram'></i></a></li>
                                        <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-linkedin'></i></a></li>
                                    </ul>
                                </div>

                                <div className="content">
                                    <h3>James Anderson</h3>
                                    <span>CEO</span>
                                    <i className="flaticon-share-icon"></i>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-team-member">
                                <div className="image">
                                    <img src={TeamImg2} alt="Team" />

                                    <ul className="social-link">
                                        <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-facebook'></i></a></li>
                                        <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-twitter'></i></a></li>
                                        <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-instagram'></i></a></li>
                                        <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-linkedin'></i></a></li>
                                    </ul>
                                </div>

                                <div className="content">
                                    <h3>Sarah Taylor</h3>
                                    <span>Marketing Lead</span>
                                    <i className="flaticon-share-icon"></i>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-team-member">
                                <div className="image">
                                    <img src={TeamImg3} alt="Team" />

                                    <ul className="social-link">
                                        <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-facebook'></i></a></li>
                                        <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-twitter'></i></a></li>
                                        <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-instagram'></i></a></li>
                                        <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-linkedin'></i></a></li>
                                    </ul>
                                </div>

                                <div className="content">
                                    <h3>Taylor Sopia</h3>
                                    <span>Web Designer</span>
                                    <i className="flaticon-share-icon"></i>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-team-member">
                                <div className="image">
                                    <img src={TeamImg4} alt="Team" />

                                    <ul className="social-link">
                                        <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-facebook'></i></a></li>
                                        <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-twitter'></i></a></li>
                                        <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-instagram'></i></a></li>
                                        <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-linkedin'></i></a></li>
                                    </ul>
                                </div>

                                <div className="content">
                                    <h3>Harry Steve</h3>
                                    <span>Web Developer</span>
                                    <i className="flaticon-share-icon"></i>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-team-member">
                                <div className="image">
                                    <img src={TeamImg5} alt="Team" />

                                    <ul className="social-link">
                                        <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-facebook'></i></a></li>
                                        <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-twitter'></i></a></li>
                                        <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-instagram'></i></a></li>
                                        <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-linkedin'></i></a></li>
                                    </ul>
                                </div>

                                <div className="content">
                                    <h3>Alina Smith</h3>
                                    <span>Advisor</span>
                                    <i className="flaticon-share-icon"></i>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-team-member">
                                <div className="image">
                                    <img src={TeamImg6} alt="Team" />

                                    <ul className="social-link">
                                        <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-facebook'></i></a></li>
                                        <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-twitter'></i></a></li>
                                        <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-instagram'></i></a></li>
                                        <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-linkedin'></i></a></li>
                                    </ul>
                                </div>

                                <div className="content">
                                    <h3>David Warner</h3>
                                    <span>Support</span>
                                    <i className="flaticon-share-icon"></i>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-team-member">
                                <div className="image">
                                    <img src={TeamImg7} alt="Team" />

                                    <ul className="social-link">
                                        <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-facebook'></i></a></li>
                                        <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-twitter'></i></a></li>
                                        <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-instagram'></i></a></li>
                                        <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-linkedin'></i></a></li>
                                    </ul>
                                </div>

                                <div className="content">
                                    <h3>Steven Smith</h3>
                                    <span>Support</span>
                                    <i className="flaticon-share-icon"></i>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-team-member">
                                <div className="image">
                                    <img src={TeamImg8} alt="Team" />

                                    <ul className="social-link">
                                        <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-facebook'></i></a></li>
                                        <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-twitter'></i></a></li>
                                        <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-instagram'></i></a></li>
                                        <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-linkedin'></i></a></li>
                                    </ul>
                                </div>

                                <div className="content">
                                    <h3>John Terry</h3>
                                    <span>Support</span>
                                    <i className="flaticon-share-icon"></i>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-team-member">
                                <div className="image">
                                    <img src={TeamImg9} alt="Team" />

                                    <ul className="social-link">
                                        <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-facebook'></i></a></li>
                                        <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-twitter'></i></a></li>
                                        <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-instagram'></i></a></li>
                                        <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-linkedin'></i></a></li>
                                    </ul>
                                </div>

                                <div className="content">
                                    <h3>Amelia Eva</h3>
                                    <span>Support</span>
                                    <i className="flaticon-share-icon"></i>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-team-member">
                                <div className="image">
                                    <img src={TeamImg10} alt="Team" />

                                    <ul className="social-link">
                                        <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-facebook'></i></a></li>
                                        <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-twitter'></i></a></li>
                                        <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-instagram'></i></a></li>
                                        <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-linkedin'></i></a></li>
                                    </ul>
                                </div>

                                <div className="content">
                                    <h3>Liam Noah</h3>
                                    <span>Support</span>
                                    <i className="flaticon-share-icon"></i>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-team-member">
                                <div className="image">
                                    <img src={TeamImg11} alt="Team" />

                                    <ul className="social-link">
                                        <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-facebook'></i></a></li>
                                        <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-twitter'></i></a></li>
                                        <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-instagram'></i></a></li>
                                        <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-linkedin'></i></a></li>
                                    </ul>
                                </div>

                                <div className="content">
                                    <h3>Olivia Emma</h3>
                                    <span>Support</span>
                                    <i className="flaticon-share-icon"></i>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-6 col-sm-6">
                            <div className="single-team-member">
                                <div className="image">
                                    <img src={TeamImg12} alt="Team" />

                                    <ul className="social-link">
                                        <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-facebook'></i></a></li>
                                        <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-twitter'></i></a></li>
                                        <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-instagram'></i></a></li>
                                        <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-linkedin'></i></a></li>
                                    </ul>
                                </div>

                                <div className="content">
                                    <h3>Lucas Silva</h3>
                                    <span>Support</span>
                                    <i className="flaticon-share-icon"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

			<Footer />
		</Layout>
    )
}

export default Team2;