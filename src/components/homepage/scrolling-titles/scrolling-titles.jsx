import { useFetchData } from '../../../hooks/fetchData.js';
import Marquee from 'react-fast-marquee';
import './scrolling-titles.css';

function saveGameId(id) {
    sessionStorage.setItem('selectedGameId', id);
    window.location.href = '#/favorites';
}

const Ticker = () => {
    const { data, loading, error } = useFetchData('/gaming-and-me-portfolio/assets/data/game-data.json');

    if (loading) return <section className="stats-container"><p>Loading...</p></section>;
    if (error) return <section className="stats-container"><p>Error: {error}</p></section>;

    return (
        <div className="ticker-wrapper mt-30 mb-10 bg-darkest-blue">
            <Marquee gradient={false} speed={40} pauseOnHover={true}>
                {data.map((images, index) => (
                    <img
                        key={index}
                        src={`/gaming-and-me-portfolio${images.imagePath}`}
                        alt={`Game title ${index}`}
                        onClick={() => saveGameId(images.id)}
                        style={{ height: 150, borderRadius: 8, margin: "0 20px", cursor: "pointer" }}
                    />
                ))}
            </Marquee>
        </div>
    );
};

export default Ticker;