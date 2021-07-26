import React from 'react';
import { Link } from "gatsby"

import Shape1 from "../../assets/images/shape/shape1.png"
import Shape2 from "../../assets/images/shape/shape2.png"
import Shape3 from "../../assets/images/shape/shape3.png"
import Shape4 from "../../assets/images/shape/shape4.png"
import Shape5 from "../../assets/images/shape/shape5.png"
import Shape6 from "../../assets/images/shape/shape6.png"
import Shape7 from "../../assets/images/shape/shape7.png"
import Shape8 from "../../assets/images/shape/shape8.png"

const MainBanner = () => {
    return (
        <div className="banner-area">
            <div className="container">
                <div className="main-banner-content">
                    <span className="sub-title">Growth Your Business</span>
                    <h1>We Provide Best Digital Marketing Solutions</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>

                    <Link to="/contact" className="default-btn">
                        Get Started
                    </Link>
                </div>
            </div>

            <div className="shape1"><img src={Shape1} alt="Shape" /></div>
            <div className="shape2"><img src={Shape2} alt="Shape" /></div>
            <div className="shape3"><img src={Shape3} alt="Shape" /></div>
            <div className="shape4"><img src={Shape4} alt="Shape" /></div>
            <div className="shape5"><img src={Shape5} alt="Shape" /></div>
            <div className="shape6"><img src={Shape6} alt="Shape" /></div>
            <div className="shape7"><img src={Shape7} alt="Shape" /></div>
            <div className="shape8"><img src={Shape8} alt="Shape" /></div>
        </div>
    )
}

export default MainBanner;