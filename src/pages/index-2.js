import React from 'react';
import Layout from "../components/App/Layout"
import SEO from "../components/App/SEO"
import NavbarStyleTwo from '../components/App/NavbarStyleTwo';
import MainBanner from '../components/HomeDemoTwo/MainBanner';
import FeaturedService from '../components/HomeDemoTwo/FeaturedService';
import AboutSection from '../components/HomeDemoTwo/AboutSection';
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

const HomeTwo = () => {
    return (
        <Layout>
            <SEO title="Home Two" />
            <NavbarStyleTwo />
            <MainBanner />
            <FeaturedService />
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

export default HomeTwo;