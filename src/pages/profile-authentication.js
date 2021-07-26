import React from 'react';
import Layout from "../components/App/Layout"
import SEO from "../components/App/SEO"
import NavbarStyleTwo from '../components/App/NavbarStyleTwo';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/App/Footer';

const ProfileAuthentication = () => {
    return (
        <Layout>
			<NavbarStyleTwo />
			<PageBanner 
                pageTitle="Welcome to Mibix" 
            />  

            <div className="profile-authentication-area ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-12">
                            <div className="login-form">
                                <h2>Login</h2>

                                <form>
                                    <div className="form-group">
                                        <label>Username or email</label>
                                        <input type="text" className="form-control" placeholder="Username or email" />
                                    </div>

                                    <div className="form-group">
                                        <label>Password</label>
                                        <input type="password" className="form-control" placeholder="Password" />
                                    </div>

                                    <div className="row align-items-center">
                                        <div className="col-lg-6 col-md-6 col-sm-6 remember-me-wrap">
                                            <p>
                                                <input type="checkbox" id="test2" />
                                                <label htmlFor="test2">Remember me</label>
                                            </p>
                                        </div>

                                        <div className="col-lg-6 col-md-6 col-sm-6 lost-your-password-wrap">
                                            <a href="#" className="lost-your-password">Lost your password?</a>
                                        </div>
                                    </div>

                                    <button type="submit">Log In</button>
                                </form>
                            </div>
                        </div>
                        
                        <div className="col-lg-6 col-md-12">
                            <div className="register-form">
                                <h2>Register</h2>

                                <form>
                                    <div className="form-group">
                                        <label>Username</label>
                                        <input type="text" className="form-control" placeholder="Username or email" />
                                    </div>

                                    <div className="form-group">
                                        <label>Email</label>
                                        <input type="email" className="form-control" placeholder="Username or email" />
                                    </div>

                                    <div className="form-group">
                                        <label>Password</label>
                                        <input type="password" className="form-control" placeholder="Password" />
                                    </div>

                                    <p className="description">The password should be at least eight characters long. To make it stronger, use upper and lower case letters, numbers, and symbols like ! " ? $ % ^ & )</p>

                                    <button type="submit">Register</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

			<Footer />
		</Layout>
    )
}

export default ProfileAuthentication;