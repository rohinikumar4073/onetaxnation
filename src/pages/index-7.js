import React from 'react';
import Layout from "../components/App/Layout"
import SEO from "../components/App/SEO"
import TopHeader from '../components/App/TopHeader';
import NavbarStyleFive from '../components/App/NavbarStyleFive';
import MainBanner from '../components/HomeDemoSeven/MainBanner';
import FeaturedServices from '../components/HomeDemoSeven/FeaturedServices';
import AboutSection from '../components/HomeDemoSeven/AboutSection';
import ServicesCard from '../components/Common/ServicesCard';
import WhatWeDo from '../components/Common/WhatWeDo';
import TestimonialStyleTwo from '../components/Common/TestimonialStyleTwo';
import CaseStudies from '../components/Common/CaseStudies';
import Partner from '../components/Common/Partner';
import OurTeamStyleTwo from '../components/Common/OurTeamStyleTwo';
import Pricing from '../components/Common/Pricing';
import LatestBlogPost from '../components/Common/LatestBlogPost';
import SubscribeForm from '../components/Common/SubscribeForm';
import Footer from '../components/App/Footer';

const HomeSeven = () => {
    return (
        <Layout>
            <SEO title="Home Seven" />
            <TopHeader />
            <NavbarStyleFive />
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
            <SubscribeForm />
            <LatestBlogPost />
            <Footer />
        </Layout>
    )
}

export default HomeSeven;