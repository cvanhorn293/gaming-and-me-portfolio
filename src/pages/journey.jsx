import { useEffect } from "react";
import { ReactLenis } from "lenis/dist/lenis-react";
import Navbar from "../components/navbar/navbar.jsx";
import Footer from '../components/footer/footer.jsx'
import JourneyHeader from '../components/journey/header/journeyHeader.jsx'
import Timeline from '../components/journey/timeline/timeline.jsx'

export default function Journey() {

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
            <JourneyHeader />
            <Timeline />
            <Footer />
        </ReactLenis>
        </>
    )
}