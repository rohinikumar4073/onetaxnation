import React from 'react';
import Layout from "../components/App/Layout"
import SEO from "../components/App/SEO"
import NavbarStyleTwo from '../components/App/NavbarStyleTwo';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/App/Footer';
import { Link } from "gatsby"

import BlogImg1 from '../assets/images/blog/blog-img1.jpg'
import BlogImg2 from '../assets/images/blog/blog-img2.jpg'
import BlogImg3 from '../assets/images/blog/blog-img3.jpg'
import BlogImg4 from '../assets/images/blog/blog-img4.jpg'
import BlogImg5 from '../assets/images/blog/blog-img5.jpg'
import BlogImg6 from '../assets/images/blog/blog-img6.jpg'

import User1 from '../assets/images/user1.jpg'
import User2 from '../assets/images/user2.jpg'
import User3 from '../assets/images/user3.jpg'

const BlogTwo = () => {
    return (
        <Layout>
            <SEO title="Blog Two" />

			<NavbarStyleTwo />

			<PageBanner 
                pageTitle="Blog Grid (3 in Row)" 
            />

            <div className="blog-area bg-f9f9f9 ptb-100">
                <div className="container">
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
                                        <img src={User1} alt="User" />
                                        <div className="info">
                                            <h5>David Smith</h5>
                                            <span>Jun 15, 2020</span>
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
                                        <img src={User2} alt="User" />
                                        <div className="info">
                                            <h5>Sarah Taylor</h5>
                                            <span>Jun 16, 2020</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
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
                                        <img src={User3} alt="User" />
                                        <div className="info">
                                            <h5>Steven Gibson</h5>
                                            <span>Jun 17, 2020</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
 
                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-post">
                                <div className="image">
                                    <Link to="/single-blog-1" className="d-block">
                                        <img src={BlogImg4} alt="Blog" />
                                    </Link>
                                </div>

                                <div className="content">
                                    <h3>
                                        <Link to="/single-blog-1">
                                            Preparing E-Commerce for the Post-COVID Bounce Back
                                        </Link>
                                    </h3>
                                    <div className="d-flex align-items-center">
                                        <img src={User1} alt="User" />
                                        <div className="info">
                                            <h5>David Smith</h5>
                                            <span>Jun 18, 2020</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-post">
                                <div className="image">
                                    <Link to="/single-blog-1" className="d-block">
                                        <img src={BlogImg5} alt="Blog" />
                                    </Link>
                                </div>

                                <div className="content">
                                    <h3>
                                        <Link to="/single-blog-1">
                                            The State of Local SEO Industry Report 2020
                                        </Link>
                                    </h3>
                                    <div className="d-flex align-items-center">
                                        <img src={User2} alt="User" />
                                        <div className="info">
                                            <h5>Sarah Taylor</h5>
                                            <span>Jun 19, 2020</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
 
                        <div className="col-lg-4 col-md-6">
                            <div className="single-blog-post">
                                <div className="image">
                                    <Link to="/single-blog-1" className="d-block">
                                        <img src={BlogImg6} alt="Blog" />
                                    </Link>
                                </div>

                                <div className="content">
                                    <h3>
                                        <Link to="/single-blog-1">
                                            Should You Test That? When to Engage in SEO Split Tests
                                        </Link>
                                    </h3>
                                    <div className="d-flex align-items-center">
                                        <img src={User3} alt="User" />
                                        <div className="info">
                                            <h5>Sarah Taylor</h5>
                                            <span>Jun 20, 2020</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
 
                        <div className="col-lg-12 col-md-12">
                            <div className="pagination-area text-center">
                                <a href="#" className="prev page-numbers">
                                    <i className='bx bx-chevrons-left'></i>
                                </a>
                                <span className="page-numbers current" aria-current="page">1</span>
                                <a href="#" className="page-numbers">2</a>
                                <a href="#" className="page-numbers">3</a>
                                <a href="#" className="page-numbers">4</a>
                                <a href="#" className="next page-numbers">
                                    <i className='bx bx-chevrons-right'></i>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
	 
			<Footer />
		</Layout>
    )
}

export default BlogTwo;