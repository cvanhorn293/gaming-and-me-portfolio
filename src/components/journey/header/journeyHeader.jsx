import { useEffect } from "react";
import React from "react";
import { TimelineTails, SubNavigation } from "./../timeline/extras.jsx";
import "./journeyHeader.css";

function JourneyHeader() {

    const [scrolled, setScrolled] = React.useState(false);
    // Sub-nav background on scroll
    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 80);
        };
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <>
            <div className="h-dvh min-h-screen flex flex-col items-center text-center pt-60 md:pt-30 text-white relative">
                <h1>My <span className="text-gradient-2">Journey</span></h1>
                <SubNavigation />
                <div className="w-full md:w-2/3 mt-30 md:mt-40 px-20 md:px-10">
                    <h2 className="mb-4 text-sky-blue">Read through the journey that led me here</h2>
                    <p>From the first controller in my hands to Fortnite-filled nights and everything since, gaming has marked every stage of my life. This is a look at how those moments built the player (and person) I am today.</p>
                </div>
                <TimelineTails position="bottom" className="tail-top" />
            </div>
        </>
    )
}

export default JourneyHeader;