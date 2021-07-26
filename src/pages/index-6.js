import React from 'react';
import Layout from "../components/App/Layout"
import SEO from "../components/App/SEO"
import NavbarStyleFour from '../components/App/NavbarStyleFour';
import MainBanner from '../components/HomeDemoSix/MainBanner';
import FeaturedServices from '../components/HomeDemoSix/FeaturedServices';
import AboutSection from '../components/HomeDemoSix/AboutSection';
import ServicesCard from '../components/Common/ServicesCard';
import WhatWeDo from '../components/Common/WhatWeDo';
import TestimonialStyleTwo from '../components/Common/TestimonialStyleTwo';
import CaseStudies from '../components/Common/CaseStudies';
import Partner from '../components/Common/Partner';
import OurTeamStyleTwo from '../components/Common/OurTeamStyleTwo';
import Pricing from '../components/Common/Pricing';
import StartProjectWithUs from '../components/Common/StartProjectWithUs';
import LatestBlogPost from '../components/Common/LatestBlogPost';
import Footer from '../components/App/Footer';

const HomeSix = () => {
    return (
        <Layout>
            <SEO title="Home Six" />
            <NavbarStyleFour />
            <MainBanner />
            <FeaturedServices />
            <AboutSection />
            <ServicesCard />
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

export default HomeSix;