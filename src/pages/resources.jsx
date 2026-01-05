import { useEffect } from 'react';
import { ReactLenis } from "lenis/dist/lenis-react";
import Navbar from '../components/navbar/navbar.jsx'
import Footer from '../components/footer/footer.jsx'
import Header from '../components/resources/resourcesHeader.jsx'
import Figma from '../components/resources/figma/figma.jsx'
import Accordion from '../components/shared/accordion.jsx'

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
                <Accordion />
                <Footer />
            </ReactLenis>
        </>
    )
}