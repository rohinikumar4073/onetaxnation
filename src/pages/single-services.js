import React from 'react';
import Layout from "../components/App/Layout"
import SEO from "../components/App/SEO"
import NavbarStyleTwo from '../components/App/NavbarStyleTwo';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/App/Footer';
import SEOAnalysisForm from '../components/Common/SEOAnalysisForm';
import Pricing from '../components/Common/Pricing';
import StartProjectWithUs from '../components/Common/StartProjectWithUs';

import ServicesImg1 from '../assets/images/services/services-img1.png'
import ServicesImg2 from '../assets/images/services/services-img2.png'

const SingleServices = () => {
    return (
        <Layout>
            <SEO title="Single Services" />

			<NavbarStyleTwo />

			<PageBanner 
                pageTitle="Services Details" 
            /> 

            <div className="overview-area ptb-100">
                <div className="container">
                    <div className="overview-box">
                        <div className="overview-content">
                            <div className="content">
                                <span className="sub-title">Digital Marketing</span>
                                <h2>Creative Solutions, Creative Results</h2>
                                <p>We believe brand interaction is key in communication. Real innovations and a positive customer experience are the heart of successful communication.</p>
                                <div className="features-text">
                                    <h4>Core Development</h4>
                                    <p>No fake products and services. The customer is king, their lives and needs are the inspiration.</p>
                                </div>
                                <div className="features-text">
                                    <h4>Define Your Choices</h4>
                                    <p>No fake products and services. The customer is king, their lives and needs are the inspiration.</p>
                                </div>
                            </div>
                        </div>

                        <div className="overview-image">
                            <div className="image">
                                <img src={ServicesImg1} alt="image" />
                            </div>
                        </div>
                    </div>

                    <div className="overview-box">
                        <div className="overview-image">
                            <div className="image">
                                <img src={ServicesImg2} alt="image" />
                            </div>
                        </div>
                        
                        <div className="overview-content">
                            <div className="content right-content">
                                <span className="sub-title">Social Media Marketing</span>
                                <h2>Solving Problems, Building Brands</h2>
                                <p>We believe brand interaction is key in communication. Real innovations and a positive customer experience are the heart of successful communication.</p>
                                <ul className="features-list">
                                    <li><span><i className='bx bx-check'></i> Recommender Systems</span></li>
                                    <li><span><i className='bx bx-check'></i> Demand Prediction</span></li>
                                    <li><span><i className='bx bx-check'></i> Omnichannel Analytics</span></li>
                                    <li><span><i className='bx bx-check'></i> Lead Generation</span></li>
                                    <li><span><i className='bx bx-check'></i> Dedicated Developers</span></li>
                                    <li><span><i className='bx bx-check'></i> 24/7 Support</span></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="services-area bg-f9f9f9 pt-100 pb-70">
                <div className="container">
                    <div className="section-title">
                        <span className="sub-title">Digital Marketing</span>
                        <h2>Core Business Areas</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon">
                                    <i className="flaticon-content"></i>
                                    <div className="circles-box">
                                        <div className="circle-one"></div>
                                        <div className="circle-two"></div>
                                    </div>
                                </div>
                                <h3>Informative Content</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon">
                                    <i className="flaticon-darts"></i>
                                    <div className="circles-box">
                                        <div className="circle-one"></div>
                                        <div className="circle-two"></div>
                                    </div>
                                </div>
                                <h3>Visitor Growth</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon">
                                    <i className="flaticon-bar-chart"></i>
                                    <div className="circles-box">
                                        <div className="circle-one"></div>
                                        <div className="circle-two"></div>
                                    </div>
                                </div>
                                <h3>Google Analytics</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon">
                                    <i className="flaticon-megaphone"></i>
                                    <div className="circles-box">
                                        <div className="circle-one"></div>
                                        <div className="circle-two"></div>
                                    </div>
                                </div>
                                <h3>Innovative Strategies</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon">
                                    <i className="flaticon-link"></i>
                                    <div className="circles-box">
                                        <div className="circle-one"></div>
                                        <div className="circle-two"></div>
                                    </div>
                                </div>
                                <h3>Link Building</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-services-box">
                                <div className="icon">
                                    <i className="flaticon-reputation"></i>
                                    <div className="circles-box">
                                        <div className="circle-one"></div>
                                        <div className="circle-two"></div>
                                    </div>
                                </div>
                                <h3>Reputation Management</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <SEOAnalysisForm />

            <Pricing />

            <StartProjectWithUs />
			  
			<Footer />
		</Layout>
    )
}

export default SingleServices;