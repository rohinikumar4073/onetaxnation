import React from 'react';
import { Link } from "gatsby"

import WhiteLogo from "../../assets/images/white-logo.png"
import Shape16 from "../../assets/images/shape/shape16.png"

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-footer-widget">
                            <Link to="/" className="logo">
                                <img src={WhiteLogo} alt="logo" />
                            </Link>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>

                            <ul className="social-link">
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-facebook'></i></a></li>
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-twitter'></i></a></li>
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-instagram'></i></a></li>
                                <li><a href="#" className="d-block" target="_blank"><i className='bx bxl-linkedin'></i></a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-6 col-sm-6">
                        <div className="single-footer-widget pl-5">
                            <h3>Explore</h3>

                            <ul className="footer-links-list">
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/about-us-1">About</Link>
                                </li>
                                <li>
                                    <Link to="/pricing">Pricing</Link>
                                </li>
                                <li>
                                    <Link to="/portfolio-1">Portfolio</Link>
                                </li>
                                <li>
                                    <Link to="/contact">Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-6 col-sm-6">
                        <div className="single-footer-widget pl-2">
                            <h3>Resources</h3>

                            <ul className="footer-links-list">
                                <li>
                                    <Link to="/team-1">Team</Link>
                                </li>
                                <li>
                                    <Link to="/contact">Contact</Link>
                                </li>
                                <li>
                                    <Link to="/services-1">Services</Link>
                                </li>
                                <li>
                                    <Link to="/faq">FAQ</Link>
                                </li>
                                <li>
                                    <Link to="/blog-1">Blog</Link>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-6">
                        <div className="single-footer-widget">
                            <h3>Address</h3>

                            <ul className="footer-contact-info">
                                <li>
                                    <i className='bx bx-map'></i> 
                                    175 5th Ave Premium Area, New York, NY 10010, United States
                                </li>
                                <li>
                                    <i className='bx bx-phone-call'></i> 
                                    <a href="tel:+11234567890">+1 (123) 456 7890</a>
                                </li>
                                <li>
                                    <i className='bx bx-envelope'></i>
                                    <a href="mailto:hello@mibix.com">hello@mibix.com</a>
                                </li>
                                <li>
                                    <i className='bx bxs-inbox'></i>
                                    <a href="tel:+557854578964">+55 785 4578964</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom-area">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-6">
                            <p><i className='bx bx-copyright'></i>{currentYear} <strong>Mibix</strong> is Proudly Powered by <a target="_blank" href="https://envytheme.com/">EnvyTheme</a></p>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <ul>
                                <li>
                                    <Link to="/privacy-policy">Privacy Policy</Link>
                                </li>
                                <li>
                                    <Link to="/terms-of-service">Terms & Conditions</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="shape16">
                <img src={Shape16} alt="Shape" />
            </div>
        </footer>
    );
}

export default Footer;