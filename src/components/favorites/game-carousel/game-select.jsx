
import { useEffect, useState } from 'react';
import Rating from '@mui/material/Rating';
import GameCarousel from '../../shared/carousel.jsx';
import ScreenshotCarousel from '../screenshot-display/screenshot-carousel.jsx';


function GameSelect() {
    const [games, setGames] = useState([]);
    const [gamesLoading, setGamesLoading] = useState(true);
    const [gamesError, setGamesError] = useState(null);
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [screenShotData, setScreenShotData] = useState(null);
    const [ssLoading, setSSLoading] = useState(true);
    const [ssError, setSSError] = useState(null);

    // Fetch games data
    useEffect(() => {
        setGamesLoading(true);
        setGamesError(null);
        fetch('/gaming-and-me-portfolio/assets/data/game-data.json')
            .then(res => res.json())
            .then(data => {
                setGames(data);
                setGamesLoading(false);
            })
            .catch(err => {
                setGamesError(err.message);
                setGamesLoading(false);
            });
    }, []);

    // Fetch screenshot data for the selected game
    useEffect(() => {
        if (!games.length) return;
        const activeGame = games[selectedIndex] || games[0];
        if (!activeGame || !activeGame['slug']) return;
        setSSLoading(true);
        setSSError(null);
        fetch(`https://api.rawg.io/api/games/${activeGame['slug']}/screenshots?page=1&page_size=12&with_deleted=false&key=89b03bfb8a4641fb8f35b2b5794e496e`)
            .then(res => res.json())
            .then(data => {
                setScreenShotData(data);
                setSSLoading(false);
            })
            .catch(err => {
                setSSError(err.message);
                setSSLoading(false);
            });
        console.log('Selected Game Screenshot Data:', screenShotData);
    }, [games, selectedIndex]);

    if (gamesLoading) return <section className="game-select-container"><p>Loading...</p></section>;
    if (gamesError) return <section className="game-select-container"><p>Error: {gamesError}</p></section>;

    console.log('Games: ', games);

    return (

        <>
            <section className="w-full bg-darkest-blue">
                <h2 className="uppercase text-white text-center px-10 md:px-0 pt-20 pb-2">Select a game</h2>
                <p className="text-white text-center px-10 md:px-0 pb-5">Scroll through the games to learn more about why it's a favorite!</p>
                <GameCarousel
                    data={games}
                    selectedIndex={selectedIndex}
                    setSelectedIndex={setSelectedIndex}
                    screenShotData={screenShotData}
                    src="imagePath"
                    name="name" />
            </section>
            <section id="game-info" className="w-full mt-20">
                <div className="container flex flex-col md:flex-row mx-auto py-10 px-10 md:px-0">
                    <div className="w-full lg:w-1/3">
                        <ScreenshotCarousel screenshotData={screenShotData} />
                    </div>
                    <div className="w-full md:w-2/3 px-0 md:px-10 flex flex-col lg:flex-row md:gap-8">
                        <div className="w-full lg:w-1/2 my-8 md:my-0">
                            <h2>{games[selectedIndex]?.name}</h2>
                            <p className="mt-4">Personal Rating</p>
                            <p className="border-b border-gray-800 pb-4 mb-6">
                                <Rating name="half-rating-read" value={games[selectedIndex]?.rating} precision={0.5} readOnly />
                            </p>
                            {/* <h3>Description</h3> */}
                            <p className="mt-4">{games[selectedIndex]?.description}</p>
                        </div>
                        <div className="w-full lg:w-1/2 flex flex-row gap-8 my-8 md:my-0 ">
                            <div className="flex flex-col flex-wrap gap-4">
                                <Card stat={`${games[selectedIndex]?.hoursPlayed}+`} subtitle="Hours Played" />
                                <Card stat={`~${games[selectedIndex]?.hoursStreamed}`} subtitle="Hours Streamed" />
                            </div>
                            <div className="flex flex-col flex-wrap gap-4">
                                <Card stat={games[selectedIndex]?.yearsPlayed < 1 ? Math.round(games[selectedIndex]?.yearsPlayed * 12) : games[selectedIndex]?.yearsPlayed} subtitle={games[selectedIndex]?.yearsPlayed > 1 ? "Years Played" : games[selectedIndex]?.yearsPlayed <= 1 ? "Month Played" : "Months Played"} />
                                <Card stat={games[selectedIndex]?.hoursWatched} subtitle="Hours Watched" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

const Card = ({ stat, subtitle }) => {
    return (
        <div className="flex flex-col gap-1 mb-4 px-6 py-4 rounded-lg border border-gray-800 text-center">
            <h3>{stat}</h3>
            <p>{subtitle}</p>
        </div>
    );
}

export default GameSelect;