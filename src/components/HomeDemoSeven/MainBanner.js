import React from 'react';

import BannerImg from '../../assets/images/banner-img8.jpg'
import Shape1 from "../../assets/images/shape/shape1.png"
import Shape2 from "../../assets/images/shape/shape2.png"
import Shape3 from "../../assets/images/shape/shape3.png"
import Shape4 from "../../assets/images/shape/shape4.png"
import Shape5 from "../../assets/images/shape/shape5.png"
import Shape6 from "../../assets/images/shape/shape6.png"
import Shape7 from "../../assets/images/shape/shape7.png"
import Shape8 from "../../assets/images/shape/shape8.png"
import Shape13 from "../../assets/images/shape/shape13.png"
import Shape14 from "../../assets/images/shape/shape14.png"

const MainBanner = () => {
    return (
        <div className="banner-wrapper-area">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-7 col-md-12">
                        <div className="banner-wrapper-content">
                            <div className="content">
                                <span className="sub-title">Growth Your Business</span>
                                <h1>We Are Full Service SEO Agency</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                                
                                <form>
                                    <div className="row">
                                        <div className="col-lg-5 col-md-6">
                                            <div className="form-group">
                                                <input type="text" className="form-control" placeholder="Enter Website URL" />
                                            </div>
                                        </div>

                                        <div className="col-lg-4 col-md-6">
                                            <div className="form-group">
                                                <input type="email" className="form-control" placeholder="Email" />
                                            </div>
                                        </div>

                                        <div className="col-lg-3 col-md-4 offset-lg-0 offset-md-4">
                                            <button type="submit" className="default-btn">Start Now</button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-5 col-md-12">
                        <div className="banner-wrapper-image">
                            <img src={BannerImg} alt="Banner" />
                            <div className="divider"></div>
                        </div>
                    </div>
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
            <div className="shape13"><img src={Shape13} alt="Shape" /></div>
            <div className="shape14"><img src={Shape14} alt="Shape" /></div>
        </div>
    )
}

export default MainBanner;