import React from 'react';
import Layout from "../components/App/Layout"
import SEO from "../components/App/SEO"
import NavbarStyleThree from '../components/App/NavbarStyleThree';
import MainBanner from '../components/HomeDemoThree/MainBanner';
import Partner from '../components/Common/Partner';
import FeaturedServices from '../components/HomeDemoThree/FeaturedServices';
import AboutSection from '../components/HomeDemoThree/AboutSection';
import ServicesCard from '../components/Common/ServicesCard';
import SEOAnalysisForm from '../components/Common/SEOAnalysisForm';
import TestimonialStyleTwo from '../components/Common/TestimonialStyleTwo';
import CaseStudiesTwo from '../components/Common/CaseStudiesTwo';
import HowItWork from '../components/Common/HowItWork';
import OurTeamStyleTwo from '../components/Common/OurTeamStyleTwo';
import LatestBlogPost from '../components/Common/LatestBlogPost';
import SubscribeForm from '../components/Common/SubscribeForm';
import Footer from '../components/App/Footer';

const HomeThree = () => {
    return (
        <Layout>
            <SEO title="Home Three" />
            <NavbarStyleThree />
            <MainBanner />
            <Partner />
            <FeaturedServices />
            <AboutSection />
            <ServicesCard />
            <SEOAnalysisForm />
            <TestimonialStyleTwo />
            <CaseStudiesTwo />
            <HowItWork />
            <OurTeamStyleTwo />
            <LatestBlogPost />
            <SubscribeForm />
            <Footer />
        </Layout>
    )
}

export default HomeThree;