import React from 'react';
import Layout from "../components/App/Layout"
import SEO from "../components/App/SEO"
import NavbarStyleThree from '../components/App/NavbarStyleThree';
import MainBanner from '../components/HomeDemoFive/MainBanner';
import FeaturedServices from '../components/HomeDemoFive/FeaturedServices';
import AboutSection from '../components/HomeDemoFive/AboutSection';
import ServicesCardStyleTwo from '../components/Common/ServicesCardStyleTwo';
import WhatWeDo from '../components/Common/WhatWeDo';
import TestimonialStyleTwo from '../components/Common/TestimonialStyleTwo';
import CaseStudies from '../components/Common/CaseStudies';
import Partner from '../components/Common/Partner';
import OurTeamStyleTwo from '../components/Common/OurTeamStyleTwo';
import Pricing from '../components/Common/Pricing';
import StartProjectWithUs from '../components/Common/StartProjectWithUs';
import LatestBlogPost from '../components/Common/LatestBlogPost';
import Footer from '../components/App/Footer';

const HomeFive = () => {
    return (
        <Layout>
            <SEO title="Home Five" />
            <NavbarStyleThree />
            <MainBanner />
            <FeaturedServices />
            <AboutSection />
            <ServicesCardStyleTwo />
            <WhatWeDo />
            <TestimonialStyleTwo />
            <CaseStudies />
            <Partner />
            <OurTeamStyleTwo />
            <Pricing />
            <StartProjectWithUs />
            <LatestBlogPost />
            <Footer />
        </Layout>
    )
}

export default HomeFive;