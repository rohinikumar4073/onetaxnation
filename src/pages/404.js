import React from "react"
import { Link } from "gatsby"
import Layout from "../components/App/Layout"
import SEO from "../components/App/SEO"
import NavbarStyleTwo from "../components/App/NavbarStyleTwo"
import PageBanner from '../components/Common/PageBanner';
import Footer from "../components/App/Footer"

import ErrorImg from '../assets/images/error.png'

const NotFoundPage = () => (
    <Layout>
        <SEO title="404: Not found" />

        <NavbarStyleTwo />

        <PageBanner 
            pageTitle="404 Error" 
        /> 

        <div className="error-area ptb-100">
            <div className="container">
                <div className="error-content">
                    <img src={ErrorImg} alt="Error" />
                    <h3>Error 404 : Page Not Found</h3>
                    <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
                    <Link to="/" className="default-btn">
                        Back to Homepage
                    </Link>
                </div>
            </div>
        </div>

        <Footer />
    </Layout>
)

export default NotFoundPage
