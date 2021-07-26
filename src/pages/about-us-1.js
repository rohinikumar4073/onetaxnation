import React from 'react';
import Layout from "../components/App/Layout"
import SEO from "../components/App/SEO"
import NavbarStyleTwo from '../components/App/NavbarStyleTwo';
import PageBanner from '../components/Common/PageBanner';
import AboutContent from '../components/AboutUs/AboutContent';
import OurHistory from '../components/AboutUs/OurHistory';
import OurTeamStyleOne from '../components/Common/OurTeamStyleOne';
import Partner from '../components/Common/Partner';
import TestimonialStyleOne from '../components/Common/TestimonialStyleOne';
import Footer from '../components/App/Footer';

const AboutUs = () => {
    return (
        <Layout>
            <SEO title="About Us" />

			<NavbarStyleTwo />

			<PageBanner 
                pageTitle="About Us" 
            />  
            
            <AboutContent />

            <OurHistory />

            <OurTeamStyleOne />

            <Partner />

            <TestimonialStyleOne />
		  
			<Footer />
		</Layout>
    )
}

export default AboutUs;