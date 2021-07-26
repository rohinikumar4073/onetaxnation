import React from 'react';
import { Link } from "gatsby"
import ModalVideo from 'react-modal-video'

import BannerImg from "../../assets/images/banner-img1.jpg"

import Shape1 from "../../assets/images/shape/shape1.png"
import Shape2 from "../../assets/images/shape/shape2.png"
import Shape3 from "../../assets/images/shape/shape3.png"
import Shape4 from "../../assets/images/shape/shape4.png"
import Shape5 from "../../assets/images/shape/shape5.png"
import Shape6 from "../../assets/images/shape/shape6.png"
import Shape7 from "../../assets/images/shape/shape7.png"
import Shape8 from "../../assets/images/shape/shape8.png"

const MainBanner = () => {
    // Popup Video
	const [isOpen, setIsOpen] = React.useState(true);
    const openModal = () => {
        setIsOpen(!isOpen);
    }
    return (
        <React.Fragment>
            <div className="main-banner-area">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="main-banner-content">
                                <span className="sub-title">Growth Your Business</span>
                                <h1>We Provide Best Digital Marketing Solutions</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel facilisis.</p>
                               
                                <div className="btn-box">
                                    <div className="d-flex align-items-center">
                                        <Link to="/contact" className="default-btn">
                                            Get Started
                                        </Link>
                                        
                                        <div
                                            onClick={e => {e.preventDefault(); openModal()}}
                                            className="video-btn popup-youtube"
                                        > 
                                            <i className="flaticon-play-button"></i> Watch Video
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-12">
                            <div className="main-banner-image">
                                <img src={BannerImg} alt="Shape" />
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
            </div>

            {/* If you want to change the video need to update videoID */}
            <ModalVideo 
                channel='youtube' 
                isOpen={!isOpen} 
                videoId='bk7McNUjWgw' 
                onClose={() => setIsOpen(!isOpen)} 
            />
        </React.Fragment>
    )
}

export default MainBanner;