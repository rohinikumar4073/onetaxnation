import React from "react"
import Layout from "../components/App/Layout"
import SEO from "../components/App/SEO"
import Navbar from "../components/App/Navbar"
import MainBanner from "../components/HomeDemoOne/MainBanner"
import Features from "../components/HomeDemoOne/Features"
import AboutSection from "../components/HomeDemoOne/AboutSection"
import WhatWeDo from "../components/Common/WhatWeDo"
import ServicesCard from "../components/Common/ServicesCard"
import TestimonialStyleOne from "../components/Common/TestimonialStyleOne"
import Partner from "../components/Common/Partner"
import OurTeamStyleOne from "../components/Common/OurTeamStyleOne"
import Pricing from "../components/Common/Pricing"
import SubscribeForm from "../components/Common/SubscribeForm"
import Footer from "../components/App/Footer"

const HomeOne = () => {
    return (
        <Layout>
            <SEO title="Home One" />
            <Navbar />
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
 

export default HomeOne
