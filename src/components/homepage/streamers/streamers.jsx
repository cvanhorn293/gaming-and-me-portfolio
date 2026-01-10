import { useState } from 'react';
import { motion } from "framer-motion";
import { useFetchData } from '../../../hooks/fetchData.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitch, faYoutube } from '@fortawesome/free-brands-svg-icons';
import GameCarousel from '../../shared/carousel.jsx';
import '../../shared/carousel.jsx'
import './streamers.css';

function Streamers() {
    const { data, loading, error } = useFetchData('/gaming-and-me-portfolio/assets/data/streamer-data.json');
    const [selectedIndex, setSelectedIndex] = useState(0);

    if (loading) return <section className="stats-container"><p>Loading...</p></section>;
    if (error) return <section className="stats-container"><p>Error: {error}</p></section>;

    return (
        <div id="streamers" className="w-full z-9 relative bg-darkest-blue py-28">
            <motion.div
                initial={{ opacity: 0, y: 48 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
            >
                <div className="container mx-auto pb-4 px-12 text-center md:text-left">
                    <h2 className="text-4xl font-bold text-white mb-4 uppercase">Streamers: They entertain me</h2>
                    <p className="mb-4">Streamers help make life just that much more interesting when you’re gaming.  These are just a few that I watch on a constant basis.
                        Yes. They are mostly Oldschool Runescape streamers...I know.</p>
                </div>
                <div className="w-full">
                    <GameCarousel
                        data={data}
                        selectedIndex={selectedIndex}
                        setSelectedIndex={setSelectedIndex}
                        src="cardImage"
                        name="name"
                        canFlip={true}
                        buttonText="View Information"
                        flipContent={(content) => (
                            <CardContentBack content={content} />
                        )}
                    />
                </div>
            </motion.div>
        </div>
    )
}

const CardContentBack = ({ content }) => {
    return (
        <div className="border border-gray-300 rounded-lg px-4 py-6 w-full h-full">
            <div className="flex px-4 mb-1">
                <img
                    src={`/gaming-and-me-portfolio${content.profileImage}`}
                    alt={`${content.name} Profile Image`}
                    className="mt-1"
                />
                <div className="flex flex-col">
                    <h5 className="text-xl font-bold ml-4 mb-1">{content.name}</h5>
                    <div className="flex space-x-1 px-4">
                        {content.platforms.twitch && (
                            <a href={content.platforms.twitch.watchURL} target="_blank" rel="noopener noreferrer" className="block text-purple-500 mb-2">
                                <FontAwesomeIcon icon={faTwitch} className="card-icon" />
                            </a>
                        )}
                        {content.platforms.kick && (
                            <a href={content.platforms.kick.watchURL} target="_blank" rel="noopener noreferrer" className="block text-red-600 mb-2">
                                <img src="/gaming-and-me-portfolio/public/images/shared/icons/kick-logo.svg" alt="Kick Icon" className="card-icon" />
                            </a>
                        )}
                        {content.platforms.youTube && (
                            <a href={content.platforms.youTube.watchURL} target="_blank" rel="noopener noreferrer" className="block text-red-600 mb-2">
                                <FontAwesomeIcon icon={faYoutube} className="card-icon" />
                            </a>
                        )}
                    </div>
                </div>
            </div>
            <p className="text-sm px-4">{content.description}</p>
            <div class="flex flex-col gap-1 mx-4 mt-3 px-6 py-4 rounded-lg border border-gray-800 text-center">
                <h3>{content.hoursWatched}+</h3>
                <p>Hours Watched</p>
            </div>
        </div>
    )
}

export default Streamers;