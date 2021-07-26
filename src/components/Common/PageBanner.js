import React from 'react';

import Shape2 from '../../assets/images/shape/shape2.png'
import Shape3 from '../../assets/images/shape/shape3.png'
import Shape5 from '../../assets/images/shape/shape5.png'
import Shape6 from '../../assets/images/shape/shape6.png'
import Shape7 from '../../assets/images/shape/shape7.png'
import Shape8 from '../../assets/images/shape/shape8.png'

const PageBanner = ({pageTitle}) => {
    return (
        <div className="page-title-area">
            <div className="container">
                <div className="page-title-content">
                    <h1>{pageTitle}</h1>
                </div>
            </div>

            <div className="shape2"><img src={Shape2} alt="Shape" /></div>
            <div className="shape3"><img src={Shape3} alt="Shape" /></div>
            <div className="shape5"><img src={Shape5} alt="Shape" /></div>
            <div className="shape6"><img src={Shape6} alt="Shape" /></div>
            <div className="shape7"><img src={Shape7} alt="Shape" /></div>
            <div className="shape8"><img src={Shape8} alt="Shape" /></div>

            <div className="lines">
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
        </div>
    );
}

export default PageBanner;