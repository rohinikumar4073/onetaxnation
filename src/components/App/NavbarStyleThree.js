import React, { useState } from "react";
import {Link} from 'gatsby'

import Logo from "../../assets/images/logo.png"

import InstagramImg1 from "../../assets/images/team/team-img1.jpg"
import InstagramImg2 from "../../assets/images/team/team-img2.jpg"
import InstagramImg3 from "../../assets/images/team/team-img3.jpg"
import InstagramImg4 from "../../assets/images/team/team-img4.jpg"
import InstagramImg5 from "../../assets/images/team/team-img5.jpg"
import InstagramImg6 from "../../assets/images/team/team-img6.jpg"

const NavbarStyleThree = () => {
    const [menu, setMenu] = React.useState(true)
 
    const toggleNavbar = () => {
        setMenu(!menu)
    }

    React.useEffect(() => {
        let elementId = document.getElementById("navbar");
        document.addEventListener("scroll", () => {
            if (window.scrollY > 170) {
                elementId.classList.add("is-sticky");
            } else {
                elementId.classList.remove("is-sticky");
            }
        });
        window.scrollTo(0, 0); 
    })

    // Search Modal
    const [isActiveSearchModal, setActiveSearchModal] = useState("false");
    const handleToggleSearchModal = () => {
        setActiveSearchModal(!isActiveSearchModal);
    };

    // Sidebar Modal
    const [isActiveSidebarModal, setActiveSidebarModal] = useState("false");
    const handleToggleSidebarModal = () => {
        setActiveSidebarModal(!isActiveSidebarModal);
    };
 
    const classOne = menu ? 'collapse navbar-collapse' : 'collapse navbar-collapse show';
    const classTwo = menu ? 'navbar-toggler navbar-toggler-right collapsed' : 'navbar-toggler navbar-toggler-right';

    return (
        <React.Fragment>
            <div id="navbar" className="navbar-area navbar-style-two">
                <div className="main-nav">
                    <div className="container">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <Link to="/" onClick={toggleNavbar} className="navbar-brand">
                                <img src={Logo} alt="logo" />
                            </Link>

                            <button 
                                onClick={toggleNavbar} 
                                className={classTwo}
                                type="button" 
                                data-toggle="collapse" 
                                data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" 
                                aria-expanded="false" 
                                aria-label="Toggle navigation"
                            >
                                <span className="icon-bar top-bar"></span>
                                <span className="icon-bar middle-bar"></span>
                                <span className="icon-bar bottom-bar"></span>
                            </button>

                            <div className={classOne} id="navbarSupportedContent">
                                <ul className="navbar-nav">
                                    <li className="nav-item">
                                        <Link to="/#" activeClassName="active" onClick={e => e.preventDefault()} className="nav-link">
                                            Home <i className='bx bx-chevron-down'></i>
                                        </Link>

                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link to="/" activeClassName="active" onClick={toggleNavbar} className="nav-link">
                                                    Home Demo - 1
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link to="/index-2" activeClassName="active" onClick={toggleNavbar} className="nav-link">
                                                    Home Demo - 2
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link to="/index-3" activeClassName="active" onClick={toggleNavbar} className="nav-link">
                                                    Home Demo - 3
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link to="/index-4" activeClassName="active" onClick={toggleNavbar} className="nav-link">
                                                    Home Demo - 4
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link to="/index-5" activeClassName="active" onClick={toggleNavbar} className="nav-link">
                                                    Home Demo - 5
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link to="/index-6" activeClassName="active" onClick={toggleNavbar} className="nav-link">
                                                    Home Demo - 6
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link to="/index-7" activeClassName="active" onClick={toggleNavbar} className="nav-link">
                                                    Home Demo - 7
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="nav-item">
                                        <Link to="/#" onClick={e => e.preventDefault()} className="nav-link">
                                            About <i className='bx bx-chevron-down'></i>
                                        </Link>

                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link to="/about-us-1" activeClassName="active" onClick={toggleNavbar} className="nav-link">
                                                    About Us One
                                                </Link>
                                            </li> 

                                            <li className="nav-item">
                                                <Link to="/about-us-2" activeClassName="active" onClick={toggleNavbar} className="nav-link">
                                                    About Us Two
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link to="/team-1" activeClassName="active" onClick={toggleNavbar} className="nav-link">
                                                    Team One
                                                </Link>
                                            </li> 

                                            <li className="nav-item">
                                                <Link to="/team-2" activeClassName="active" onClick={toggleNavbar} className="nav-link">
                                                    Team Two
                                                </Link>
                                            </li> 
                                        </ul>
                                    </li>

                                    <li className="nav-item">
                                        <Link to="/#" onClick={e => e.preventDefault()} className="nav-link">
                                            Services <i className='bx bx-chevron-down'></i>
                                        </Link>
    
                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link to="/services-1" activeClassName="active" onClick={toggleNavbar} className="nav-link">
                                                    Services One
                                                </Link>
                                            </li> 

                                            <li className="nav-item">
                                                <Link to="/services-2" activeClassName="active" onClick={toggleNavbar} className="nav-link">
                                                    Services Two
                                                </Link>
                                            </li> 

                                            <li className="nav-item">
                                                <Link to="/services-3" activeClassName="active" onClick={toggleNavbar} className="nav-link">
                                                    Services Three
                                                </Link>
                                            </li> 

                                            <li className="nav-item">
                                                <Link to="/single-services" activeClassName="active" onClick={toggleNavbar} className="nav-link">
                                                    Services Details
                                                </Link>
                                            </li> 
                                        </ul>
                                    </li>
    
                                    <li className="nav-item">
                                        <Link to="/#" onClick={e => e.preventDefault()} className="nav-link">
                                            Pages <i className='bx bx-chevron-down'></i>
                                        </Link>

                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link to="/pricing" activeClassName="active" onClick={toggleNavbar} className="nav-link">
                                                    Pricing
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link to="/gallery" activeClassName="active" onClick={toggleNavbar} className="nav-link">
                                                    Gallery
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link to="/#" onClick={e => e.preventDefault()} className="nav-link">
                                                    Shop <i className='bx bx-chevron-right'></i>
                                                </Link>

                                                <ul className="dropdown-menu">
                                                    <li className="nav-item">
                                                        <Link to="/products-list" activeClassName="active" onClick={toggleNavbar} className="nav-link">
                                                            Products List
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link to="/cart" activeClassName="active" onClick={toggleNavbar} className="nav-link">
                                                            Cart
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link to="/checkout" activeClassName="active" onClick={toggleNavbar} className="nav-link">
                                                            Checkout
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link to="/product-details" activeClassName="active" onClick={toggleNavbar} className="nav-link">
                                                            Products Details
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li className="nav-item">
                                                <Link to="/faq" activeClassName="active" onClick={toggleNavbar} className="nav-link">
                                                    FAQ's
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link to="/404" activeClassName="active" onClick={toggleNavbar} className="nav-link">
                                                    404 Error Page
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link to="/coming-soon" activeClassName="active" onClick={toggleNavbar} className="nav-link">
                                                    Coming Soon
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link to="/profile-authentication" activeClassName="active" onClick={toggleNavbar} className="nav-link">
                                                    Login/Register
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link to="/privacy-policy" activeClassName="active" onClick={toggleNavbar} className="nav-link">
                                                    Privacy Policy
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link to="/terms-of-service" activeClassName="active" onClick={toggleNavbar} className="nav-link">
                                                    Terms of Service
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
    
                                    <li className="nav-item">
                                        <Link to="/#" onClick={e => e.preventDefault()} className="nav-link">
                                            Portfolio <i className='bx bx-chevron-down'></i>
                                        </Link>

                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link to="/#" activeClassName="active" onClick={e => e.preventDefault()} className="nav-link">
                                                    Portfolio Style One <i className='bx bx-chevron-right'></i>
                                                </Link>

                                                <ul className="dropdown-menu">
                                                    <li className="nav-item">
                                                        <Link to="/portfolio-1" activeClassName="active" onClick={toggleNavbar} className="nav-link">
                                                            Portfolio 2 Columns
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link to="/portfolio-2" activeClassName="active" onClick={toggleNavbar} className="nav-link">
                                                            Portfolio 3 Columns
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link to="/portfolio-3" activeClassName="active" onClick={toggleNavbar} className="nav-link">
                                                            Portfolio No Space
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>

                                            <li className="nav-item">
                                                <Link to="/#" activeClassName="active" onClick={e => e.preventDefault()} className="nav-link">
                                                    Portfolio Style Two <i className='bx bx-chevron-right'></i>
                                                </Link>

                                                <ul className="dropdown-menu">
                                                    <li className="nav-item">
                                                        <Link to="/portfolio-4" activeClassName="active" onClick={toggleNavbar} className="nav-link">
                                                            Portfolio 2 Columns
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link to="/portfolio-5" activeClassName="active" onClick={toggleNavbar} className="nav-link">
                                                            Portfolio 3 Columns
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link to="/portfolio-6" activeClassName="active" onClick={toggleNavbar} className="nav-link">
                                                            Portfolio No Space
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                        
                                            <li className="nav-item">
                                                <Link to="/single-portfolio" activeClassName="active" onClick={toggleNavbar} className="nav-link">
                                                    Portfolio Details
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="nav-item">
                                        <Link to="/#" onClick={e => e.preventDefault()} className="nav-link">
                                            Blog <i className='bx bx-chevron-down'></i>
                                        </Link>

                                        <ul className="dropdown-menu">
                                            <li className="nav-item">
                                                <Link to="/blog-1" activeClassName="active" onClick={toggleNavbar} className="nav-link">
                                                    Grid (2 in Row)
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link to="/blog-2" activeClassName="active" onClick={toggleNavbar} className="nav-link">
                                                    Grid (3 in Row)
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link to="/blog-3" activeClassName="active" onClick={toggleNavbar} className="nav-link">
                                                    Grid (Full Width)
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link to="/blog-4" activeClassName="active" onClick={toggleNavbar} className="nav-link">
                                                    Right Sidebar
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link to="/blog-5" activeClassName="active" onClick={toggleNavbar} className="nav-link">
                                                    Left Sidebar
                                                </Link>
                                            </li>

                                            <li className="nav-item">
                                                <Link to="/#" activeClassName="active" onClick={e => e.preventDefault()} className="nav-link">
                                                    Single Post <i className='bx bx-chevron-right'></i>
                                                </Link>

                                                <ul className="dropdown-menu">
                                                    <li className="nav-item">
                                                        <Link to="/single-blog-1" activeClassName="active" onClick={toggleNavbar} className="nav-link">
                                                            Default
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link to="/single-blog-2" activeClassName="active" onClick={toggleNavbar} className="nav-link">
                                                            With Video
                                                        </Link>
                                                    </li>

                                                    <li className="nav-item">
                                                        <Link to="/single-blog-3" activeClassName="active" onClick={toggleNavbar} className="nav-link">
                                                            With Image Slider
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </li>
                                        </ul>
                                    </li>

                                    <li className="nav-item">
                                        <Link to="/contact" activeClassName="active" onClick={toggleNavbar} className="nav-link">
                                            Contact
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            <div className="others-option d-flex align-items-center">
                                <div className="option-item">
                                    <div className="cart-btn">
                                        <Link to="/cart">
                                            <i className="flaticon-shopping-cart"></i>
                                            <span>1</span>
                                        </Link>
                                    </div>
                                </div>

                                <div className="option-item">
                                    <div className="search-box" onClick={handleToggleSearchModal}>
                                        <i className="flaticon-search"></i>
                                    </div>
                                </div>

                                <div className="option-item">
                                    <div className="side-menu-btn" onClick={handleToggleSidebarModal}>
                                        <i className="flaticon-menu"></i>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
 
            {/* Search Form */}
            <div className={`search-overlay ${isActiveSearchModal ? "" : "search-overlay-active"}`}>
                <div className="d-table">
                    <div className="d-table-cell">
                        <div className="search-overlay-layer"></div>
                        <div className="search-overlay-layer"></div>
                        <div className="search-overlay-layer"></div>
                        
                        <div className="search-overlay-close" onClick={handleToggleSearchModal}>
                            <span className="search-overlay-close-line"></span>
                            <span className="search-overlay-close-line"></span>
                        </div>

                        <div className="search-overlay-form">
                            <form>
                                <input type="text" className="input-search" placeholder="Search here..." />
                                <button type="submit">
                                    <i className="flaticon-search"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Search Form */}

            {/* Sidebar Modal */}
            <div className={`sidebarModal modal right ${isActiveSidebarModal ? "" : "show"}`}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <button type="button" className="close" onClick={handleToggleSidebarModal}>
                            <i className='bx bx-x'></i>
                        </button>

                        <div className="modal-body">
                            <div className="logo">
                                <Link to="/" className="d-inline-block">
                                    <img src={Logo} alt="Logo" />
                                </Link>
                            </div>

                            <div className="instagram-list">
                                <div className="row">
                                    <div className="col-lg-4 col-md-4 col-sm-4 col-6">
                                        <div className="box">
                                            <img src={InstagramImg1} alt="Instagram" />
                                            <i className='bx bxl-instagram'></i>
                                            <a to="#" target="_blank" className="link-btn"></a>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-4 col-sm-4 col-6">
                                        <div className="box">
                                            <img src={InstagramImg2} alt="Instagram" />
                                            <i className='bx bxl-instagram'></i>
                                            <a to="#" target="_blank" className="link-btn"></a>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-4 col-sm-4 col-6">
                                        <div className="box">
                                            <img src={InstagramImg3} alt="Instagram" />
                                            <i className='bx bxl-instagram'></i>
                                            <a to="#" target="_blank" className="link-btn"></a>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-4 col-sm-4 col-6">
                                        <div className="box">
                                            <img src={InstagramImg4} alt="Instagram" />
                                            <i className='bx bxl-instagram'></i>
                                            <a to="#" target="_blank" className="link-btn"></a>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-4 col-sm-4 col-6">
                                        <div className="box">
                                            <img src={InstagramImg5} alt="Instagram" />
                                            <i className='bx bxl-instagram'></i>
                                            <a to="#" target="_blank" className="link-btn"></a>
                                        </div>
                                    </div>

                                    <div className="col-lg-4 col-md-4 col-sm-4 col-6">
                                        <div className="box">
                                            <img src={InstagramImg6} alt="Instagram" />
                                            <i className='bx bxl-instagram'></i>
                                            <a to="#" target="_blank" className="link-btn"></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="sidebar-contact-info">
                                <h2>
                                    <a to="tel:+11234567890">+1 (123) 456 7890</a>
                                    <span>OR</span>
                                    <a to="mailto:hello@mibix.com">hello@mibix.com</a>
                                </h2>
                            </div>

                            <ul className="social-list">
                                <li><span>Follow Us On:</span></li>
                                <li><a to="#" target="_blank"><i className='bx bxl-facebook'></i></a></li>
                                <li><a to="#" target="_blank"><i className='bx bxl-twitter'></i></a></li>
                                <li><a to="#" target="_blank"><i className='bx bxl-youtube'></i></a></li>
                                <li><a to="#" target="_blank"><i className='bx bxl-twitch'></i></a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Sidebar Modal */}
        </React.Fragment>
    );
}

export default NavbarStyleThree;