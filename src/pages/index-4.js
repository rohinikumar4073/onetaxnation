import React from 'react';
import Layout from "../components/App/Layout"
import SEO from "../components/App/SEO"
import NavbarStyleFour from '../components/App/NavbarStyleFour';
import MainBanner from '../components/HomeDemoFour/MainBanner';
import Features from '../components/HomeDemoFour/Features';
import AboutSection from '../components/HomeDemoFour/AboutSection';
import WhatWeDo from '../components/Common/WhatWeDo';
import ServicesCard from '../components/Common/ServicesCard';
import TestimonialStyleOne from '../components/Common/TestimonialStyleOne';
import Partner from '../components/Common/Partner';
import OurTeamStyleOne from '../components/Common/OurTeamStyleOne';
import Pricing from '../components/Common/Pricing';
import SubscribeForm from '../components/Common/SubscribeForm';
import Footer from '../components/App/Footer';

const HomeFour = () => {
    return (
        <Layout>
            <SEO title="Home Four" />
            <NavbarStyleFour />
            <MainBanner />
            <Features />
            <AboutSection />
            <WhatWeDo />
            <ServicesCard />
            <TestimonialStyleOne />
            <Partner />
            <OurTeamStyleOne />
            <Pricing />
            <SubscribeForm />
            <Footer />
        </Layout>
    )
}

export default HomeFour;