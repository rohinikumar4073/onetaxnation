import React from 'react';
import Layout from "../components/App/Layout"
import SEO from "../components/App/SEO"
import NavbarStyleTwo from '../components/App/NavbarStyleTwo';
import PageBanner from '../components/Common/PageBanner';
import Footer from '../components/App/Footer';
import Lightbox from 'react-image-lightbox';

import GalleryImg1 from '../assets/images/gallery/gallery-img1.jpg'
import GalleryImg2 from '../assets/images/gallery/gallery-img2.jpg'
import GalleryImg3 from '../assets/images/gallery/gallery-img3.jpg'
import GalleryImg4 from '../assets/images/gallery/gallery-img4.jpg'
import GalleryImg5 from '../assets/images/gallery/gallery-img5.jpg'
import GalleryImg6 from '../assets/images/gallery/gallery-img6.jpg'
import GalleryImg7 from '../assets/images/gallery/gallery-img7.jpg'
import GalleryImg8 from '../assets/images/gallery/gallery-img8.jpg'
import GalleryImg9 from '../assets/images/gallery/gallery-img9.jpg'

const images = [
    (GalleryImg1),
    (GalleryImg2),
    (GalleryImg3),
    (GalleryImg4),
    (GalleryImg5),
    (GalleryImg6),
    (GalleryImg8),
    (GalleryImg9),
];
   
const Gallery = () => {

    const [photoIndex, setPhotoIndex] = React.useState(0);
    const [isOpenImage, setIsOpenImage] = React.useState(false);

    return (
        <Layout>
            <SEO title="Gallery" />

			<NavbarStyleTwo />

			<PageBanner 
                pageTitle="Gallery" 
            />  
		 
            <div className="gallery-area pt-100 pb-70">
                {/* Lightbox */}
                {isOpenImage && (
                    <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                        onCloseRequest={() => setIsOpenImage(false)}
                        onMovePrevRequest={() =>
                            setPhotoIndex((photoIndex + images.length - 1) % images.length)
                        }
                        onMoveNextRequest={() =>
                            setPhotoIndex((photoIndex + 1) % images.length)
                        }
                    />
                )}

                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-gallery-item">
                                <div 
                                    className="popup-btn" 
                                    onClick={e => {e.preventDefault(); setIsOpenImage(true); setPhotoIndex(0);}}
                                >
                                    <img src={GalleryImg1} alt="Gallery" />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-gallery-item">
                                <div 
                                    className="popup-btn"
                                    onClick={e => {e.preventDefault(); setIsOpenImage(true); setPhotoIndex(1);}}
                                >
                                    <img src={GalleryImg2} alt="Gallery" />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-gallery-item">
                                <div 
                                    className="popup-btn"
                                    onClick={e => {e.preventDefault(); setIsOpenImage(true); setPhotoIndex(2);}}
                                >
                                    <img src={GalleryImg3} alt="Gallery" />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-gallery-item">
                                <div 
                                    className="popup-btn"
                                    onClick={e => {e.preventDefault(); setIsOpenImage(true); setPhotoIndex(3);}}
                                >
                                    <img src={GalleryImg4} alt="Gallery" />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-gallery-item">
                                <div 
                                    className="popup-btn"
                                    onClick={e => {e.preventDefault(); setIsOpenImage(true); setPhotoIndex(4);}}
                                >
                                    <img src={GalleryImg5} alt="Gallery" />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-gallery-item">
                                <div 
                                    className="popup-btn"
                                    onClick={e => {e.preventDefault(); setIsOpenImage(true); setPhotoIndex(5);}}
                                >
                                    <img src={GalleryImg6} alt="Gallery" />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-gallery-item">
                                <div 
                                    className="popup-btn"
                                    onClick={e => {e.preventDefault(); setIsOpenImage(true); setPhotoIndex(6);}}
                                >
                                    <img src={GalleryImg7} alt="Gallery" />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-gallery-item">
                                <div 
                                    className="popup-btn"
                                    onClick={e => {e.preventDefault(); setIsOpenImage(true); setPhotoIndex(7);}}
                                >
                                    <img src={GalleryImg8} alt="Gallery" />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="single-gallery-item">
                                <div 
                                    className="popup-btn"
                                    onClick={e => {e.preventDefault(); setIsOpenImage(true); setPhotoIndex(8);}}
                                >
                                    <img src={GalleryImg9} alt="Gallery" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

			<Footer />
		</Layout>
    )
}

export default Gallery;