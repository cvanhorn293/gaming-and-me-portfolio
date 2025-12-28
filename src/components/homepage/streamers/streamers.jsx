import { motion } from "framer-motion";
import Slider from "react-slick";
import { useFetchStats } from '../../../hooks/fetchData.js';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './streamers.css';

function Streamers() {
    const { data, loading, error } = useFetchStats('/gaming-and-me-portfolio/assets/data/streamerData.json');
    
    if (loading) return <section className="stats-container"><p>Loading...</p></section>;
    if (error) return <section className="stats-container"><p>Error: {error}</p></section>;

    return (
        <div id="streamers" className="w-full h-screen z-9 relative bg-darkest-blue">
            <motion.div 
                initial={{ opacity: 0, y: 48 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5, ease: "easeInOut" }}
                className="container mx-auto py-30 pb-10 text-center md:text-left">
                <h2 className="text-4xl font-bold text-white mb-4 uppercase">Streamers: They entertain me</h2>
                <p className="mb-12">Streamers help make life just that much more interesting when you’re gaming.  These are just a few that I watch on a constant basis.
Yes. They are mostly Oldschool Runescape streamers...I know.</p>
                <div className="w-275 absolute -right-20">
                    <StreamerCard streamers={data} />
                </div>
            </motion.div>
        </div>
    )
}

const StreamerCard = ({ streamers }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    };
    
    return (
        <Slider {...settings}>
            { streamers && streamers.length > 0 ? (
                streamers.map((streamer, index) => (
                    <div key={index}>
                        <div className="streamer-card h-100 p-4 m-2 bg-gray-800 rounded-lg text-white"> 
                            <div>{streamer.name}</div>
                        </div>
                    </div>
                ))
            ) : (
                <p>No streamers available.</p>
            )}
        </Slider>
    )
}

export default Streamers;