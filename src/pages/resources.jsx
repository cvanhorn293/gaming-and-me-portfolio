import { useEffect } from 'react';
import { ReactLenis } from "lenis/dist/lenis-react";
import Navbar from '../components/navbar/navbar.jsx'
import Footer from '../components/footer/footer.jsx'
import Header from '../components/resources/resourcesHeader.jsx'
import Figma from '../components/resources/figma/figma.jsx'
import FAQAccordion from '../components/resources/faq-accordion.jsx'

export default function Resources() {
    // Scroll to top on page load
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
            <ReactLenis
                root
                options={{
                    lerp: 0.075,
                }}
            >
                <Navbar />
                <Header />
                <Figma />
                <FAQAccordion />
                <Footer />
            </ReactLenis>
        </>
    )
}