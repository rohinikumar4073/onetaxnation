import React from 'react';

import PartnerImg1 from "../../assets/images/partner/partner-img1.png"
import PartnerImg2 from "../../assets/images/partner/partner-img2.png"
import PartnerImg3 from "../../assets/images/partner/partner-img3.png"
import PartnerImg4 from "../../assets/images/partner/partner-img4.png"
import PartnerImg5 from "../../assets/images/partner/partner-img5.png"
import PartnerImg6 from "../../assets/images/partner/partner-img6.png"

const Partner = () => {
    return (
        <div className="partner-area bg-f9f9f9 ptb-70">
            <div className="container">
                <div className="row align-items-center justify-content-md-center">
                    <div className="col-lg-2 col-6 col-sm-4 col-md-4">
                        <div className="single-partner-item">
                            <img src={PartnerImg6} alt="Partner" />
                        </div>
                    </div>

                    <div className="col-lg-2 col-6 col-sm-4 col-md-4">
                        <div className="single-partner-item">
                            <img src={PartnerImg2} alt="Partner" />
                        </div>
                    </div>

                    <div className="col-lg-2 col-6 col-sm-4 col-md-4">
                        <div className="single-partner-item">
                            <img src={PartnerImg3} alt="Partner" />
                        </div>
                    </div>

                    <div className="col-lg-2 col-6 col-sm-4 col-md-4">
                        <div className="single-partner-item">
                            <img src={PartnerImg4} alt="Partner" />
                        </div>
                    </div>

                    <div className="col-lg-2 col-6 col-sm-4 col-md-4">
                        <div className="single-partner-item">
                            <img src={PartnerImg1} alt="Partner" />
                        </div>
                    </div>

                    <div className="col-lg-2 col-6 col-sm-4 col-md-4">
                        <div className="single-partner-item">
                            <img src={PartnerImg5} alt="Partner" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Partner;