import React from 'react';
import { Link } from "gatsby"

import PortfolioImg1 from '../../assets/images/portfolio/portfolio-img1.jpg'
import PortfolioImg2 from '../../assets/images/portfolio/portfolio-img2.jpg'
import PortfolioImg3 from '../../assets/images/portfolio/portfolio-img3.jpg'
import PortfolioImg4 from '../../assets/images/portfolio/portfolio-img4.jpg'
import PortfolioImg5 from '../../assets/images/portfolio/portfolio-img5.jpg'

import Loadable from '@loadable/component'
const OwlCarousel = Loadable(() => import('react-owl-carousel3'))

const options = {
    loop: true,
    nav: true,
    dots: false,
    autoplayHoverPause: true,
    autoplay: true,
    margin: 30,
    navText: [
        "<i class='flaticon-back'></i>",
        "<i class='flaticon-chevron'></i>"
    ],
    responsive: {
        0: {
            items: 1,
        },
        576: {
            items: 2,
        },
        768: {
            items: 2,
        },
        992: {
            items: 3,
        },
        1200: {
            items: 4,
        }
    }
};

const CaseStudies = () => {
    const [display, setDisplay] = React.useState(false);

    React.useEffect(() => {
        setDisplay(true);
    }, [])

    return (
        <div className="portfolio-area pt-100 pb-70">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">Case Studies</span>
                    <h2>Check of Our Some Recent Works & Case Studies</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                </div>
            </div>

            <div className="container-fluid">
                {display ? <OwlCarousel 
                    className="portfolio-slides owl-carousel owl-theme"
                    {...options}
                >
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

                    <div className="single-portfolio-item">
                        <Link to="/single-portfolio" className="image d-block">
                            <img src={PortfolioImg2} alt="Portfolio" />
                        </Link>

                        <div className="content">
                            <h3>
                                <Link to="/single-portfolio">
                                    Return on Investment for Various Digital Marketing Strategies
                                </Link>
                            </h3>
                            <Link to="/single-portfolio" className="link-btn">
                                <i className="flaticon-next-button"></i>
                            </Link>
                        </div>
                    </div>

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

                    <div className="single-portfolio-item">
                        <Link to="/single-portfolio" className="image d-block">
                            <img src={PortfolioImg4} alt="Portfolio" />
                        </Link>

                        <div className="content">
                            <h3>
                                <Link to="/single-portfolio">
                                    Analysis of New Product Launch Using Google Double Click
                                </Link>
                            </h3>
                            <Link to="/single-portfolio" className="link-btn">
                                <i className="flaticon-next-button"></i>
                            </Link>
                        </div>
                    </div>

                    <div className="single-portfolio-item">
                        <Link to="/single-portfolio" className="image d-block">
                            <img src={PortfolioImg5} alt="Portfolio" />
                        </Link>

                        <div className="content">
                            <h3>
                                <Link to="/single-portfolio">
                                    Social Media Strategies for Online Shopping Cart
                                </Link>
                            </h3>
                            <Link to="/single-portfolio" className="link-btn">
                                <i className="flaticon-next-button"></i>
                            </Link>
                        </div>
                    </div>
                </OwlCarousel> : ''}
            </div>
        </div>
    )
}

export default CaseStudies;