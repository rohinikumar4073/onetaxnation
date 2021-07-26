import React from 'react';
import Layout from "../components/App/Layout"
import SEO from "../components/App/SEO"
import NavbarStyleTwo from '../components/App/NavbarStyleTwo';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/App/Footer';
import { Link } from "gatsby"

import PortfolioImg1 from '../assets/images/portfolio/portfolio-img1.jpg'
import PortfolioImg2 from '../assets/images/portfolio/portfolio-img2.jpg'
import PortfolioImg3 from '../assets/images/portfolio/portfolio-img3.jpg'
import PortfolioImg4 from '../assets/images/portfolio/portfolio-img4.jpg'
import PortfolioImg5 from '../assets/images/portfolio/portfolio-img5.jpg'
import PortfolioImg6 from '../assets/images/portfolio/portfolio-img6.jpg'

const PortfolioOne = () => {
    return (
        <Layout>
            <SEO title="Portfolio" />

			<NavbarStyleTwo />

			<PageBanner 
                pageTitle="Portfolio 2 Columns" 
            />  

            <div className="portfolio-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="single-portfolio-item">
                                <Link to="/single-portfolio" className="image d-block">
                                    <img src={PortfolioImg1} alt="Portfolio" />
                                </Link>

                                <div className="content">
                                    <h3>
                                        <Link to="/single-portfolio">
                                            Customer Satisfaction for a Digital Marketing Agency
                                        </Link>
                                    </h3>

                                    <Link to="/single-portfolio" className="link-btn">
                                        <i className="flaticon-next-button"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="single-portfolio-item">
                                <Link to="/single-portfolio" className="image d-block">
                                    <img src={PortfolioImg2} alt="Portfolio" />
                                </Link>

                                <div className="content">
                                    <h3>
                                        <Link to="/single-portfolio">
                                            Return on Investment for Various Digital Marketing
                                        </Link>
                                    </h3>
                                    
                                    <Link to="/single-portfolio" className="link-btn">
                                        <i className="flaticon-next-button"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="single-portfolio-item">
                                <Link to="/single-portfolio" className="image d-block">
                                    <img src={PortfolioImg3} alt="Portfolio" />
                                </Link>

                                <div className="content">
                                    <h3>
                                        <Link to="/single-portfolio">
                                            Google Search Engine Marketing Case Study Analysis
                                        </Link>
                                    </h3>
                                    
                                    <Link to="/single-portfolio" className="link-btn">
                                        <i className="flaticon-next-button"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="single-portfolio-item">
                                <Link to="/single-portfolio" className="image d-block">
                                    <img src={PortfolioImg4} alt="Portfolio" />
                                </Link>

                                <div className="content">
                                    <h3>
                                        <Link to="/single-portfolio">
                                            Analysis of New Product Launch Using Google Double
                                        </Link>
                                    </h3>
                                    
                                    <Link to="/single-portfolio" className="link-btn">
                                        <i className="flaticon-next-button"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="single-portfolio-item">
                                <Link to="/single-portfolio" className="image d-block">
                                    <img src={PortfolioImg5} alt="Portfolio" />
                                </Link>

                                <div className="content">
                                    <h3>
                                        <Link to="/single-portfolio">
                                            Customer Satisfaction for a Digital Marketing Agency
                                        </Link>
                                    </h3> 
                                    
                                    <Link to="/single-portfolio" className="link-btn">
                                        <i className="flaticon-next-button"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="single-portfolio-item">
                                <Link to="/single-portfolio" className="image d-block">
                                    <img src={PortfolioImg6} alt="Portfolio" />
                                </Link>

                                <div className="content">
                                    <h3>
                                        <Link to="/single-portfolio">
                                            Report on Tools to Analyze Digital Marketing Content
                                        </Link>
                                    </h3>
                                    
                                    <Link to="/single-portfolio" className="link-btn">
                                        <i className="flaticon-next-button"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-12 col-md-12">
                            <div className="pagination-area text-center">
                                <a href="#" className="prev page-numbers"><i className='bx bx-chevrons-left'></i></a>
                                <span className="page-numbers current" aria-current="page">1</span>
                                <a href="#" className="page-numbers">2</a>
                                <a href="#" className="page-numbers">3</a>
                                <a href="#" className="page-numbers">4</a>
                                <a href="#" className="next page-numbers"><i className='bx bx-chevrons-right'></i></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

			<Footer />
		</Layout>
    )
}

export default PortfolioOne;