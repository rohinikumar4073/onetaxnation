import React from 'react';
import Layout from "../components/App/Layout"
import SEO from "../components/App/SEO"
import NavbarStyleTwo from '../components/App/NavbarStyleTwo';
import PageBanner from '../components/Common/PageBanner';
import AboutContentTwo from '../components/AboutUs/AboutContentTwo';
import OurHistory from '../components/AboutUs/OurHistory';
import OurTeamStyleTwo from '../components/Common/OurTeamStyleTwo';
import TestimonialStyleTwo from '../components/Common/TestimonialStyleTwo';
import Partner from '../components/Common/Partner';
import Footer from '../components/App/Footer';

const AboutUs = () => {
    return (
        <Layout>
            <SEO title="About Us" />

			<NavbarStyleTwo />
            
			<PageBanner 
                pageTitle="About Us" 
            />  
            
            <AboutContentTwo />

            <OurHistory />

            <OurTeamStyleTwo />

            <TestimonialStyleTwo />

            <Partner />
		  
			<Footer />
		</Layout>
    )
}

export default AboutUs;