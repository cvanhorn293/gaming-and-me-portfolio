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
                <h2>Title here</h2>
                <p>This is going to be some text describing what this section is about.</p>
                <TimelineTails position="bottom" className="tail-top" />
            </div>
        </>
    )
}

export default JourneyHeader;