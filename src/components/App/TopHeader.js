import React from 'react';
import { Link } from "gatsby"

const TopHeader = () => {
    return (
        <header className="top-header-area">
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6">
                        <ul className="top-header-contact-info">
                            <li><i className='bx bx-phone-call'></i> <a href="tel:+14854560102">+1-485-456-0102</a></li>
                            <li><i className='bx bx-envelope'></i> <a href="mailto:hello@mibix.com">hello@mibix.com</a></li>
                        </ul>
                    </div>

                    <div className="col-lg-6 col-md-6">
                        <div className="top-header-btn">
                            <Link to="/contact" className="default-btn">
                                Free Site Analysis
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default TopHeader;