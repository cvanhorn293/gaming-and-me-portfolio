import { useEffect } from 'react';
import Navbar from '../components/navbar/navbar.jsx'
import Footer from '../components/footer/footer.jsx'
import Header from '../components/resources/resourcesHeader.jsx'
import Figma from '../components/resources/figma/figma.jsx'

export default function Resources() {
    // Scroll to top on page load
        useEffect(() => {
            window.scrollTo(0, 0);
        }, []);
    
    return (
        <>
            <Navbar />
            <Header />
            <Figma />
            <Footer />
        </>
    )
}