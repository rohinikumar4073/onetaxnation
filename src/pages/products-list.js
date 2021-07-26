import React from 'react';
import Layout from "../components/App/Layout"
import SEO from "../components/App/SEO"
import NavbarStyleTwo from '../components/App/NavbarStyleTwo';
import PageBanner from '../components/Common/PageBanner';
import ProductsCard from '../components/Products/ProductsCard';
import Footer from '../components/App/Footer';

const ProductsList = () => {
    return (
        <Layout>
            <SEO title="Products List" />

            <NavbarStyleTwo />

            <PageBanner 
                pageTitle="Products List" 
            />

            <ProductsCard />
 
            <Footer />
        </Layout>
    )
}

export default ProductsList;