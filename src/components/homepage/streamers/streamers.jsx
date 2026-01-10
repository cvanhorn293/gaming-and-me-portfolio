import { useState } from 'react';
import { motion } from "framer-motion";
import { useFetchData } from '../../../hooks/fetchData.js';
import GameCarousel from '../../shared/carousel.jsx';
import '../../shared/carousel.jsx'
import './streamers.css';

function Streamers() {
    const { data, loading, error } = useFetchData('/gaming-and-me-portfolio/assets/data/streamer-data.json');
    const [selectedIndex, setSelectedIndex] = useState(0);

    console.log('Streamer Data: ', data);

    if (loading) return <section className="stats-container"><p>Loading...</p></section>;
    if (error) return <section className="stats-container"><p>Error: {error}</p></section>;

    return (
        <div id="streamers" className="w-full z-9 relative bg-darkest-blue py-28">
            <motion.div
                initial={{ opacity: 0, y: 48 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
            >
                <div className="container mx-auto pb-4 px-12 md:px-0 text-center md:text-left">
                    <h2 className="text-4xl font-bold text-white mb-4 uppercase">Streamers: They entertain me</h2>
                    <p className="mb-4">Streamers help make life just that much more interesting when you’re gaming.  These are just a few that I watch on a constant basis.
                        Yes. They are mostly Oldschool Runescape streamers...I know.</p>
                </div>
                <div className="w-full">
                    <GameCarousel
                        data={data}
                        selectedIndex={selectedIndex}
                        setSelectedIndex={setSelectedIndex}
                        src="profileImage"
                        name="name"
                        canFlip={true} />
                </div>
            </motion.div>
        </div>
    )
}

export default Streamers;