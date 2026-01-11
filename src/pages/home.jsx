import { ReactLenis } from "lenis/dist/lenis-react";
import Navbar from "../components/navbar/navbar.jsx";
import Footer from '../components/footer/footer.jsx'
import Hero from '../components/homepage/hero/hero.jsx'
import Stats from '../components/homepage/stats/stats.jsx'
import ScrollingTitles from '../components/homepage/scrolling-titles/scrolling-titles.jsx'
import Streamers from '../components/homepage/streamers/streamers.jsx'
import CTA from '../components/homepage/cta.jsx'

export default function Home() {
    return (
        <>
            <ReactLenis
                root
                options={{
                    lerp: 0.075,
                }}
            >
                <Navbar />
                <Hero />
                <Stats />
                <ScrollingTitles />
                <Streamers />
                <CTA />
                <Footer />
            </ReactLenis>
        </>
    )
}