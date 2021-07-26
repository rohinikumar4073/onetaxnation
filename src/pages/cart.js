import React from 'react';
import Layout from "../components/App/Layout"
import SEO from "../components/App/SEO"
import NavbarStyleTwo from '../components/App/NavbarStyleTwo';
import PageBanner from '../components/Common/PageBanner';
import { Link } from "gatsby"
import Footer from '../components/App/Footer';

import ProductsImg1 from '../assets/images/products/products-img1.jpg'
import ProductsImg2 from '../assets/images/products/products-img2.jpg'
import ProductsImg3 from '../assets/images/products/products-img3.jpg'
import ProductsImg4 from '../assets/images/products/products-img4.jpg'

const Cart = () => {
    return (
        <Layout>
            <SEO title="Cart" />

            <NavbarStyleTwo />

            <PageBanner 
                pageTitle="Cart" 
            />

            <div className="cart-area ptb-100">
                <div className="container">
                    <form>
                        <div className="cart-table table-responsive">
                            <table className="table table-bordered">
                                <thead>
                                    <tr>
                                        <th scope="col">Product</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Unit Price</th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">Total</th>
                                    </tr>
                                </thead>

                                <tbody>
                                    <tr>
                                        <td className="product-thumbnail">
                                            <Link to="/product-details">
                                                <img src={ProductsImg1} alt="item" />
                                            </Link>
                                        </td>

                                        <td className="product-name">
                                            <Link to="/product-details">
                                                Note Book Mockup
                                            </Link>
                                        </td>

                                        <td className="product-price">
                                            <span className="unit-amount">$250.00</span>
                                        </td>

                                        <td className="product-quantity">
                                            <div className="input-counter">
                                                <input type="number" defaultValue="1" /> 
                                            </div>
                                        </td>

                                        <td className="product-subtotal">
                                            <span className="subtotal-amount">$250.00</span>

                                            <Link to="#" className="remove"><i className='bx bx-trash'></i></Link>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="product-thumbnail">
                                            <Link to="/product-details">
                                                <img src={ProductsImg2} alt="item" />
                                            </Link>
                                        </td>

                                        <td className="product-name">
                                            <Link to="/product-details">Motivational Book Cover</Link>
                                        </td>

                                        <td className="product-price">
                                            <span className="unit-amount">$200.00</span>
                                        </td>

                                        <td className="product-quantity">
                                            <div className="input-counter">
                                                <input type="number" defaultValue="1" /> 
                                            </div>
                                        </td>

                                        <td className="product-subtotal">
                                            <span className="subtotal-amount">$200.00</span>

                                            <Link to="#" className="remove"><i className='bx bx-trash'></i></Link>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="product-thumbnail">
                                            <Link to="/product-details">
                                                <img src={ProductsImg3} alt="item" />
                                            </Link>
                                        </td>

                                        <td className="product-name">
                                            <Link to="/product-details">Book Cover Softcover</Link>
                                        </td>

                                        <td className="product-price">
                                            <span className="unit-amount">$200.00</span>
                                        </td>

                                        <td className="product-quantity">
                                            <div className="input-counter">
                                                <input type="number" defaultValue="1" /> 
                                            </div>
                                        </td>

                                        <td className="product-subtotal">
                                            <span className="subtotal-amount">$200.00</span>

                                            <Link to="#" className="remove"><i className='bx bx-trash'></i></Link>
                                        </td>
                                    </tr>

                                    <tr>
                                        <td className="product-thumbnail">
                                            <Link to="/product-details">
                                                <img src={ProductsImg4} alt="item" />
                                            </Link>
                                        </td>

                                        <td className="product-name">
                                            <Link to="#">Stop and Take a Second</Link>
                                        </td>

                                        <td className="product-price">
                                            <span className="unit-amount">$150.00</span>
                                        </td>

                                        <td className="product-quantity">
                                            <div className="input-counter">
                                                <input type="number" defaultValue="1" /> 
                                            </div>
                                        </td>

                                        <td className="product-subtotal">
                                            <span className="subtotal-amount">$150.00</span>
                                            <Link to="#" className="remove"><i className='bx bx-trash'></i></Link>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="cart-buttons">
                            <div className="row align-items-center">
                                <div className="col-lg-7 col-sm-7 col-md-7">
                                    <div className="shopping-coupon-code">
                                        <input type="text" className="form-control" placeholder="Coupon code" name="coupon-code" id="coupon-code" />
                                        <button type="submit">Apply Coupon</button>
                                    </div>
                                </div>

                                <div className="col-lg-5 col-sm-5 col-md-5 text-right">
                                    <Link to="#" className="default-btn">Update Cart</Link>
                                </div>
                            </div>
                        </div>

                        <div className="cart-totals">
                            <h3>Cart Totals</h3>

                            <ul>
                                <li>Subtotal <span>$800.00</span></li>
                                <li>Shipping <span>$30.00</span></li>
                                <li>Total <span>$830.00</span></li>
                            </ul>

                            <Link to="#" className="default-btn">Proceed to Checkout</Link>
                        </div>
                    </form>
                </div>
            </div>
 
            <Footer />
        </Layout>
    )
}

export default Cart;