import React from 'react';

import AboutImg2 from '../../assets/images/about-img2.png'
import Shape17 from '../../assets/images/shape/shape17.png'

const AboutSection = () => {
    return (
        <div className="about-area pb-100">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-12">
                        <div className="about-img">
                            <img src={AboutImg2} alt="About" />
                        </div>
                    </div>

                    <div className="col-lg-6 col-md-12">
                        <div className="about-content">
                            <div className="text">
                                <span className="sub-title">About Us</span>
                                <h2>Enjoy Full-Service Digital Marketing Expertise</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                
                                <ul className="features-list">
                                    <li><i className="flaticon-speed"></i> If Google can’t crawl your site, it’s not going to rank – but that doesn’t mean avoiding Javascript.</li>
                                    <li><i className="flaticon-speed"></i> If Google can’t crawl your site, it’s not going to rank – but that doesn’t mean avoiding Javascript.</li>
                                    <li><i className="flaticon-speed"></i> If Google can’t crawl your site, it’s not going to rank – but that doesn’t mean avoiding Javascript.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="shape17">
                <img src={Shape17} alt="Shape" />
            </div>
        </div>
    )
}

export default AboutSection;