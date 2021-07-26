import React from 'react';
import { Link } from "gatsby"

import BlogImg1 from '../../assets/images/blog/blog-img1.jpg'
import BlogImg2 from '../../assets/images/blog/blog-img2.jpg'
import BlogImg3 from '../../assets/images/blog/blog-img3.jpg'

import User1 from '../../assets/images/user1.jpg'
import User2 from '../../assets/images/user2.jpg'
import User3 from '../../assets/images/user3.jpg'

const LatestBlogPost = () => {
    return (
        <div className="blog-area bg-f9f9f9 pt-100 pb-70">
            <div className="container">
                <div className="section-title">
                    <span className="sub-title">Our Blog</span>
                    <h2>Our Latest Media</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
                </div>

                <div className="row">
                    <div className="col-lg-4 col-md-6">
                        <div className="single-blog-post">
                            <div className="image">
                                <Link to="/single-blog-1" className="d-block">
                                    <img src={BlogImg1} alt="Blog" />
                                </Link>
                            </div>
                            <div className="content">
                                <h3>
                                    <Link to="/single-blog-1">
                                        Digital Marketing Agency Blogs You Should Read
                                    </Link>
                                </h3>
                                <div className="d-flex align-items-center">
                                    <img src={User1} alt="Blog" />
                                    <div className="info">
                                        <h5>David Smith</h5>
                                        <span>Jun 21, 2020</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                        <div className="single-blog-post">
                            <div className="image">
                                <Link to="/single-blog-1" className="d-block">
                                    <img src={BlogImg2} alt="Blog" />
                                </Link>
                            </div>

                            <div className="content">
                                <h3>
                                    <Link to="/single-blog-1">
                                        Digital Marketing Strategies for Lead Generation
                                    </Link>
                                </h3>
                                <div className="d-flex align-items-center">
                                    <img src={User2} alt="Blog" />
                                    <div className="info">
                                        <h5>Sarah Taylor</h5>
                                        <span>Jun 20, 2020</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-6 offset-lg-0 offset-md-3">
                        <div className="single-blog-post">
                            <div className="image">
                                <Link to="/single-blog-1" className="d-block">
                                    <img src={BlogImg3} alt="Blog" />
                                </Link>
                            </div>

                            <div className="content">
                                <h3>
                                    <Link to="/single-blog-1">
                                        Agencies Can Successfully Recover From COVID?
                                    </Link>
                                </h3>
                                <div className="d-flex align-items-center">
                                    <img src={User3} alt="Blog" />
                                    <div className="info">
                                        <h5>Steven Gibson</h5>
                                        <span>Jun 19, 2020</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LatestBlogPost;