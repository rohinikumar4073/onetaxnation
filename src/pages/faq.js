import React from 'react';
import Layout from "../components/App/Layout"
import SEO from "../components/App/SEO"
import NavbarStyleTwo from '../components/App/NavbarStyleTwo';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/App/Footer';
import StartProjectWithUs from '../components/Common/StartProjectWithUs';

const Faq = () => {
    return (
        <Layout>
            <SEO title="FAQ" />

			<NavbarStyleTwo />

			<PageBanner 
                pageTitle="Frequently Asked Questions" 
            />  
			 
            <div className="faq-area pt-100 pb-70">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="faq-item">
                                <h3>Q: What is digital marketing?</h3>
                                <p><strong>A:</strong> Digital marketing involves marketing to people using Internet-connected electronic devices, namely computers, smartphones and tablets. Digital marketing focuses on channels such as search engines, social media, email, websites and apps to connect with prospects and customers.</p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="faq-item">
                                <h3>Q: What does a digital marketer do?</h3>
                                <p><strong>A:</strong> Digital marketing involves marketing to people using Internet-connected electronic devices, namely computers, smartphones and tablets. Digital marketing focuses on channels such as search engines, social media, email, websites and apps to connect with prospects and customers.</p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="faq-item">
                                <h3>Q: Would my business benefit from digital marketing?</h3>
                                <p><strong>A:</strong> Digital marketing involves marketing to people using Internet-connected electronic devices, namely computers, smartphones and tablets. Digital marketing focuses on channels such as search engines, social media, email, websites and apps to connect with prospects and customers.</p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="faq-item">
                                <h3>Q: What’s the biggest mistake digital marketers make?</h3>
                                <p><strong>A:</strong> Digital marketing involves marketing to people using Internet-connected electronic devices, namely computers, smartphones and tablets. Digital marketing focuses on channels such as search engines, social media, email, websites and apps to connect with prospects and customers.</p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="faq-item">
                                <h3>Q: How often should I update my website?</h3>
                                <p><strong>A:</strong> Digital marketing involves marketing to people using Internet-connected electronic devices, namely computers, smartphones and tablets. Digital marketing focuses on channels such as search engines, social media, email, websites and apps to connect with prospects and customers.</p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="faq-item">
                                <h3>Q: What do I need to know about mobile?</h3>
                                <p><strong>A:</strong> Digital marketing involves marketing to people using Internet-connected electronic devices, namely computers, smartphones and tablets. Digital marketing focuses on channels such as search engines, social media, email, websites and apps to connect with prospects and customers.</p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="faq-item">
                                <h3>Q: What is content marketing?</h3>
                                <p><strong>A:</strong> Digital marketing involves marketing to people using Internet-connected electronic devices, namely computers, smartphones and tablets. Digital marketing focuses on channels such as search engines, social media, email, websites and apps to connect with prospects and customers.</p>
                            </div>
                        </div>

                        <div className="col-lg-6 col-md-6">
                            <div className="faq-item">
                                <h3>Q: Do I need a blog?</h3>
                                <p><strong>A:</strong> Digital marketing involves marketing to people using Internet-connected electronic devices, namely computers, smartphones and tablets. Digital marketing focuses on channels such as search engines, social media, email, websites and apps to connect with prospects and customers.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-f9f9f9">
                <StartProjectWithUs />
            </div>

			<Footer />
		</Layout>
    )
}

export default Faq;