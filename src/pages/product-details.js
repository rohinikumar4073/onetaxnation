import React from 'react';
import Layout from "../components/App/Layout"
import SEO from "../components/App/SEO"
import NavbarStyleTwo from '../components/App/NavbarStyleTwo';
import PageBanner from '../components/Common/PageBanner';
import ProductsDetailsContent from '../components/ProductsDetails/ProductsDetailsContent';
import Footer from '../components/App/Footer';

const ProductsDetails = () => {
    return (
        <Layout>
            <SEO title="Products Details" />

            <NavbarStyleTwo />

            <PageBanner 
                pageTitle="Products Details" 
            />

            <ProductsDetailsContent />
 
            <Footer />
        </Layout>
    )
}

export default ProductsDetails;