
import React, { useCallback, useEffect, useState } from 'react';

import GameCarousel from './game-carousel.jsx';
import ScreenshotCarousel from '../screenshot-display/screenshot-carousel.jsx';
import './embla-carousel.css';

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

    return (

        <>
            <section className="w-full bg-darkest-blue">
                <h2 className="uppercase text-white text-center px-10 md:px-0 pt-20 pb-2">Select a game</h2>
                <p className="text-white text-center px-10 md:px-0 pb-5">Scroll through the games to learn more about why it's a favorite!</p>
                <GameCarousel games={games} selectedIndex={selectedIndex} setSelectedIndex={setSelectedIndex} screenShotData={screenShotData} />
            </section>
            <section id="game-info" className="w-full mt-20">
                <div className="container flex flex-row mx-auto py-10 px-10 md:px-0">
                    <div className="w-1/3">
                        <ScreenshotCarousel screenshotData={screenShotData} />
                    </div>
                    <div className="w-2/3 px-10">
                        <h2 className="capitalize">{games[selectedIndex]?.name}</h2>
                    </div>
                </div>
            </section>
        </>
    );
}

export default GameSelect;