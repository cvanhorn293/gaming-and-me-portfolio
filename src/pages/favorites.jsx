import { useEffect } from "react";
import { ReactLenis } from "lenis/dist/lenis-react";
import { PageHeader } from '../components/shared/extras.jsx'
import Navbar from "../components/navbar/navbar.jsx";
import GameSelect from "../components/favorites/game-carousel/game-select.jsx";
import Footer from '../components/footer/footer.jsx'

export default function Favorites() {

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
                <PageHeader title="Favorites" />
                <GameSelect />
                <Footer />
            </ReactLenis>
        </>
    )
}