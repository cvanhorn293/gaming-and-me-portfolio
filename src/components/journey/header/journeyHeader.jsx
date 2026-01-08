import { useEffect } from "react";
import { TimelineTails, SubNavigation } from "../../shared/extras.jsx";
import { PageHeader } from "../../shared/extras.jsx";
import React from "react";
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
            <div className="h-dvh min-h-screen flex flex-col items-center text-center text-white relative">
                <PageHeader title="Journey" />
                <SubNavigation />
                <div className="w-full md:w-2/3 mt-30 md:mt-40 px-20 md:px-10">
                    <h2 className="mb-4 text-sky-blue uppercase">Read through the journey that led me here</h2>
                    <p>From the first controller in my hands to Fortnite-filled nights and everything since, gaming has marked every stage of my life. This is a look at how those moments built the player (and person) I am today.</p>
                </div>
                <TimelineTails position="bottom" className="tail-top" />
            </div>
        </>
    )
}

export default JourneyHeader;