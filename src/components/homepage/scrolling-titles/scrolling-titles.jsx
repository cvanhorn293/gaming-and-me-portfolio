import { useFetchData } from '../../../hooks/fetchData.js';
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
        <div className="ticker-container mt-30 mb-10">
            <div className="ticker-content">
                {data.map((images, index) => (
                    <div key={index} className="ticker-item">
                        <img
                            src={`/gaming-and-me-portfolio${images.imagePath}`}
                            alt={`Game title ${index}`}
                            onClick={() => saveGameId(images.id)}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Ticker;