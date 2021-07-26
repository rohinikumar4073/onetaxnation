import React from 'react';
import { Link } from "gatsby"

import ProductsImg1 from '../../assets/images/products/products-img1.jpg'
import ProductsImg2 from '../../assets/images/products/products-img2.jpg'
import ProductsImg3 from '../../assets/images/products/products-img3.jpg'
import ProductsImg4 from '../../assets/images/products/products-img4.jpg'
import ProductsImg5 from '../../assets/images/products/products-img5.jpg'
import ProductsImg6 from '../../assets/images/products/products-img6.jpg'

const ProductsCard = () => {
    return (
        <>
            <div className="products-area ptb-100">
                <div className="container">
                    <div className="dibiz-grid-sorting row align-items-center">
                        <div className="col-lg-8 col-md-6 result-count">
                            <p>We found <span className="count">6</span> products available for you</p>
                        </div>

                        <div className="col-lg-4 col-md-6 ordering">
                            <div className="select-box">
                                <select className="form-select">
                                    <option>Sort By:</option>
                                    <option>Popularity</option>
                                    <option>Latest</option>
                                    <option>Price: low to high</option>
                                    <option>Price: high to low</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-products-box">
                                <div className="products-image">
                                    <Link to="/product-details">
                                        <img src={ProductsImg1} className="main-image" alt="image" />
                                    </Link>
        
                                    <div className="products-button">
                                        <ul>
                                            <li>
                                                <div className="wishlist-btn">
                                                    <a href="#">
                                                        <i className='bx bx-heart'></i>
                                                        <span className="tooltip-label">Add to Wishlist</span>
                                                    </a>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
        
                                <div className="products-content">
                                    <h3>
                                        <Link to="/product-details">
                                            Note Book Mockup
                                        </Link>
                                    </h3>
                                    <div className="price">
                                        <span className="old-price">$321</span>
                                        <span className="new-price">$250</span>
                                    </div>
                                    <a href="#" className="add-to-cart">Add to Cart</a>
                                </div>
                            </div>
                        </div>
        
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-products-box">
                                <div className="products-image">
                                    <Link to="/product-details">
                                        <img src={ProductsImg2} className="main-image" alt="image" />
                                    </Link>
        
                                    <div className="products-button">
                                        <ul>
                                            <li>
                                                <div className="wishlist-btn">
                                                    <a href="#">
                                                        <i className='bx bx-heart'></i>
                                                        <span className="tooltip-label">Add to Wishlist</span>
                                                    </a>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
        
                                    <div className="sale-tag">Sale!</div>
                                </div>
        
                                <div className="products-content">
                                    <h3>
                                        <Link to="/product-details">
                                            Motivational Book Cover
                                        </Link>
                                    </h3>
                                    <div className="price">
                                        <span className="old-price">$210</span>
                                        <span className="new-price">$200</span>
                                    </div>
                                    <a href="#" className="add-to-cart">Add to Cart</a>
                                </div>
                            </div>
                        </div>
        
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-products-box">
                                <div className="products-image">
                                    <Link to="/product-details">
                                        <img src={ProductsImg3} className="main-image" alt="image" />
                                    </Link>
        
                                    <div className="products-button">
                                        <ul>
                                            <li>
                                                <div className="wishlist-btn">
                                                    <a href="#">
                                                        <i className='bx bx-heart'></i>
                                                        <span className="tooltip-label">Add to Wishlist</span>
                                                    </a>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
        
                                <div className="products-content">
                                    <h3>
                                        <Link to="/product-details">
                                            Book Cover Softcover
                                        </Link>
                                    </h3>
                                    <div className="price">
                                        <span className="old-price">$210</span>
                                        <span className="new-price">$200</span>
                                    </div>
                                    <a href="#" className="add-to-cart">Add to Cart</a>
                                </div>
                            </div>
                        </div>
        
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-products-box">
                                <div className="products-image">
                                    <Link to="/product-details">
                                        <img src={ProductsImg4} className="main-image" alt="image" />
                                    </Link>
        
                                    <div className="products-button">
                                        <ul>
                                            <li>
                                                <div className="wishlist-btn">
                                                    <a href="#">
                                                        <i className='bx bx-heart'></i>
                                                        <span className="tooltip-label">Add to Wishlist</span>
                                                    </a>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
        
                                <div className="products-content">
                                    <h3>
                                        <Link to="/product-details">
                                            Stop and Take a Second
                                        </Link>
                                    </h3>
                                    <div className="price">
                                        <span className="old-price">$210</span>
                                        <span className="new-price">$150</span>
                                    </div>
                                    <a href="#" className="add-to-cart">Add to Cart</a>
                                </div>
                            </div>
                        </div>
        
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-products-box">
                                <div className="products-image">
                                    <Link to="/product-details">
                                        <img src={ProductsImg5} className="main-image" alt="image" />
                                    </Link>
        
                                    <div className="products-button">
                                        <ul>
                                            <li>
                                                <div className="wishlist-btn">
                                                    <a href="#">
                                                        <i className='bx bx-heart'></i>
                                                        <span className="tooltip-label">Add to Wishlist</span>
                                                    </a>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
        
                                <div className="products-content">
                                    <h3>
                                        <Link to="/product-details">
                                            Real Life Fairytale
                                        </Link>
                                    </h3>
                                    <div className="price">
                                        <span className="old-price">$210</span>
                                        <span className="new-price">$240</span>
                                    </div>
                                    <a href="#" className="add-to-cart">Add to Cart</a>
                                </div>
                            </div>
                        </div>
        
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-products-box">
                                <div className="products-image">
                                    <Link to="/product-details">
                                        <img src={ProductsImg6} className="main-image" alt="image" />
                                    </Link>
        
                                    <div className="products-button">
                                        <ul>
                                            <li>
                                                <div className="wishlist-btn">
                                                    <a href="#">
                                                        <i className='bx bx-heart'></i>
                                                        <span className="tooltip-label">Add to Wishlist</span>
                                                    </a>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
        
                                    <div className="new-tag">New!</div>
                                </div>
        
                                <div className="products-content">
                                    <h3>
                                        <Link to="/product-details">
                                            Running From Me
                                        </Link>
                                    </h3>
                                    <div className="price">
                                        <span className="old-price">$150</span>
                                        <span className="new-price">$100</span>
                                    </div>
                                    <a href="#" className="add-to-cart">Add to Cart</a>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-12 col-md-12 col-sm-12">
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
        </>
    )
}

export default ProductsCard;