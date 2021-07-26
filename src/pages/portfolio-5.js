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

const PortfolioFive = () => {
    return (
        <Layout>
            <SEO title="Portfolio" />

			<NavbarStyleTwo />

			<PageBanner 
                pageTitle="Portfolio 3 Columns" 
            />  
			
            <div className="portfolio-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-portfolio-box">
                                <Link to="/single-portfolio" className="image d-block">
                                    <img src={PortfolioImg1} alt="Portfolio" />
                                </Link>
        
                                <div className="content">
                                    <h3>
                                        <Link to="/single-portfolio">
                                            Movie Recommendation
                                        </Link>
                                    </h3>
                                    <span>System Project</span>

                                    <Link to="/single-portfolio" className="link-btn">
                                        <i className="flaticon-next-button"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
        
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-portfolio-box">
                                <Link to="/single-portfolio" className="image d-block">
                                    <img src={PortfolioImg2} alt="Portfolio" />
                                </Link>
        
                                <div className="content">
                                    <h3>
                                        <Link to="/single-portfolio">
                                            Customer Segmentation
                                        </Link>
                                    </h3>
                                    <span>Machine Learning</span>
                                    
                                    <Link to="/single-portfolio" className="link-btn">
                                        <i className="flaticon-next-button"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
        
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-portfolio-box">
                                <Link to="/single-portfolio" className="image d-block">
                                    <img src={PortfolioImg3} alt="Portfolio" />
                                </Link>
        
                                <div className="content">
                                    <h3>
                                        <Link to="/single-portfolio">
                                            Data Analysis
                                        </Link>
                                    </h3>
                                    <span>Web Project</span>
                                    
                                    <Link to="/single-portfolio" className="link-btn">
                                        <i className="flaticon-next-button"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
        
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-portfolio-box">
                                <Link to="/single-portfolio" className="image d-block">
                                    <img src={PortfolioImg4} alt="Portfolio" />
                                </Link>
        
                                <div className="content">
                                    <h3>
                                        <Link to="/single-portfolio">
                                            Detection Project
                                        </Link>
                                    </h3>
                                    <span>Programming</span>
                                    
                                    <Link to="/single-portfolio" className="link-btn">
                                        <i className="flaticon-next-button"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
        
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-portfolio-box">
                                <Link to="/single-portfolio" className="image d-block">
                                    <img src={PortfolioImg5} alt="Portfolio" />
                                </Link>
        
                                <div className="content">
                                    <h3>
                                        <Link to="/single-portfolio">
                                            Data Scientist
                                        </Link>
                                    </h3>
                                    <span>Data Science</span>
                                    
                                    <Link to="/single-portfolio" className="link-btn">
                                        <i className="flaticon-next-button"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>
        
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-portfolio-box">
                                <Link to="/single-portfolio" className="image d-block">
                                    <img src={PortfolioImg6} alt="Portfolio" />
                                </Link>
        
                                <div className="content">
                                    <h3>
                                        <Link to="/single-portfolio">
                                            Benefits Research
                                        </Link>
                                    </h3>
                                    <span>Science Projects</span>
                                    
                                    <Link to="/single-portfolio" className="link-btn">
                                        <i className="flaticon-next-button"></i>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-12 col-md-12">
                            <div className="pagination-area text-center">
                                <a href="#" className="prev page-numbers">
                                    <i className='bx bx-chevrons-left'></i>
                                </a>
                                <span className="page-numbers current" aria-current="page">1</span>
                                <a href="#" className="page-numbers">2</a>
                                <a href="#" className="page-numbers">3</a>
                                <a href="#" className="page-numbers">4</a>
                                <a href="#" className="next page-numbers">
                                    <i className='bx bx-chevrons-right'></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

			<Footer />
		</Layout>
    )
}

export default PortfolioFive;