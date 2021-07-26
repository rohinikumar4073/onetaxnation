import React from 'react';
import Layout from "../components/App/Layout"
import SEO from "../components/App/SEO"
import NavbarStyleTwo from '../components/App/NavbarStyleTwo';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/App/Footer';
import StartProjectWithUs from '../components/Common/StartProjectWithUs';
import { Link } from "gatsby"

const Pricing = () => {
    return (
        <Layout>
            <SEO title="Pricing" />

			<NavbarStyleTwo />

			<PageBanner 
                pageTitle="Pricing" 
            />  

            <div className="pricing-area bg-f9f9f9 pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-pricing-box">
                                <div className="pricing-header">
                                    <div className="icon">
                                        <i className="flaticon-paper-plane"></i>
                                        <div className="circles-box">
                                            <div className="circle-one"></div>
                                        </div>
                                    </div>
                                    <h3>Starter Plan</h3>
                                </div>

                                <div className="pricing-features">
                                    <ul>
                                        <li>10GB Bandwidth Internet</li>
                                        <li>Business & Financ Analysing</li>
                                        <li>25 Social Media Reviews</li>
                                        <li>Customer Managemet</li>
                                        <li>24/7 Support</li>
                                    </ul>
                                </div>

                                <div className="price">
                                    $49.99
                                    <span>Per Month</span>
                                </div>

                                <Link to="/#" className="default-btn">
                                    Book Now
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-pricing-box">
                                <div className="pricing-header">
                                    <div className="icon">
                                        <i className="flaticon-jigsaw"></i>
                                        <div className="circles-box">
                                            <div className="circle-one"></div>
                                        </div>
                                    </div>
                                    <h3>Advance Plan</h3>
                                </div>

                                <div className="pricing-features">
                                    <ul>
                                        <li>15GB Bandwidth Internet</li>
                                        <li>Business & Financ Analysing</li>
                                        <li>30 Social Media Reviews</li>
                                        <li>Customer Managemet</li>
                                        <li>24/7 Support</li>
                                    </ul>
                                </div>

                                <div className="price">
                                    $69.99
                                    <span>Per Month</span>
                                </div>

                                <Link to="/#" className="default-btn">
                                    Book Now
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
                            <div className="single-pricing-box">
                                <div className="pricing-header">
                                    <div className="icon">
                                        <i className="flaticon-diamond"></i>
                                        <div className="circles-box">
                                            <div className="circle-one"></div>
                                        </div>
                                    </div>
                                    <h3>Premium Plan</h3>
                                </div>

                                <div className="pricing-features">
                                    <ul>
                                        <li>50GB Bandwidth Internet</li>
                                        <li>Business & Financ Analysing</li>
                                        <li>35 Social Media Reviews</li>
                                        <li>Customer Managemet</li>
                                        <li>24/7 Support</li>
                                    </ul>
                                </div>

                                <div className="price">
                                    $99.99
                                    <span>Per Month</span>
                                </div>

                                <Link to="/#" className="default-btn">
                                    Book Now
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <StartProjectWithUs />

			<Footer />
		</Layout>
    )
}

export default Pricing;