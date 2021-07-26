import React from 'react';
import { Link } from "gatsby"

import PortfolioImg1 from "../../assets/images/portfolio/portfolio-img1.jpg"
import PortfolioImg2 from "../../assets/images/portfolio/portfolio-img2.jpg"
import PortfolioImg3 from "../../assets/images/portfolio/portfolio-img3.jpg"

const MoreProjects = () => {
    return (
        <div className="portfolio-area pb-70">
            <div className="container">
                <div className="section-title">
                    <h2>More Projects You Might Like</h2>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6">
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

                    <div className="col-lg-4 col-md-6">
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

                    <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                        <div className="single-portfolio-item">
                            <Link to="/single-portfolio" className="image d-block">
                                <img src={PortfolioImg3} alt="Portfolio" />
                            </Link>
    
                            <div className="content">
                                <h3>
                                    <Link to="/single-portfolio">
                                        Google Search Engine Marketing Case Study
                                    </Link>
                                </h3>
                                
                                <Link to="/single-portfolio" className="link-btn">
                                    <i className="flaticon-next-button"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MoreProjects;