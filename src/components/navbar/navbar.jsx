import { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faBars } from "@fortawesome/free-solid-svg-icons";
import { faDiscord, faTwitch, faYoutube } from "@fortawesome/free-brands-svg-icons";
import useScreenSize from "../../hooks/windowResize";
import './navbar.css';
import './../homepage/stats/stats.css';

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const menuRef = useRef(null);
    const screenSize = useScreenSize();
    const logo = "/gaming-and-me-portfolio/images/headerFooter/logo.svg"

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    }, [isOpen]);

    // Set count for something fun later
    const [count, setCount] = useState(0);

    const getGameMessage = (count) => {
        if (count > 60) return "Okay, you win!";
        if (count > 50) return "Seriously, stop!";
        if (count > 40) return "Stop it!";
        if (count > 50) return "This is getting out of hand!";
        if (count > 20) return "Well, alright...nice";
        if (count > 10) return "Wait, you're actually clicking?";
        return "All you have to do is click...";
    };

    return (
        <nav className={`navbar z-10 w-full ${scrolled ? ' navbar-bg' : ''}`} aria-label="Navigation">

            {/* Mobile Hamburger Menu */}
            <FontAwesomeIcon icon={faBars} className="mt-8 ml-4 hamburger" onClick={() => setIsOpen(true)} />

            {/* Desktop Navigation */}
            <a href="#" className="logo mt-10 md:mt-0">
                <img src={logo} alt="Personal Logo - It's a comet" />
            </a>
            <div className="desktop-only">
                <NavbarLinks />
            </div>
            <div className="desktop-only">
                <SocialIcons />
            </div>

            {/* Start Mobile Menu */}
            {isOpen}
            <div ref={menuRef} className={`side-menu ${isOpen ? "open" : ""}`}>
                <img className="side-menu-logo" src={logo} alt="Personal Logo - It's a comet" />
                <FontAwesomeIcon icon={faXmark} className="close-btn" onClick={() => setIsOpen(false)} />
                <NavbarLinks />
                <SocialIcons />

                <div className="py-10 mt-10">
                    <h3>A Fun Game For You!</h3>
                    <button className="flex flex-row items-center relative card-background max-w-full mt-6" onClick={() => setCount((count) => count + 1)}>
                        <div className="card px-4 py-6 flex flex-row items-center w-full">
                            <div className="game-text w-80 mr-10"><h4>{getGameMessage(count)}</h4></div>
                            <div style={{ backgroundColor: "rgba(73, 175, 237, 0.35)", borderRadius: "10px", padding: "8px 12px", fontSize: "1.5rem" }}>{count}</div>
                        </div>
                    </button>
                </div>
            </div>
            {/* End Mobile Menu */}
        </nav>
    )
}

const NavbarLinks = () => {
    return (
        <>
            <ul className="pt-10 md:pt-0 list-none nav-links">
                <NavbarLink to="/" label="Home" />
                <NavbarLink to="/journey" label="Journey" />
                <NavbarLink to="#favorites" label="Favorites" />
                <NavbarLink to="/resources" label="Resources" />
            </ul>
        </>
    )
}

const NavbarLink = ({ to, label }) => {
    return (
        <li>
            <Link to={to} onClick={() => setIsOpen(false)}>{label}</Link>
        </li>
    )
}

const SocialIcons = () => {
    return (
        <>
            <div className="flex space-x-10 md:space-x-6 mt-6 md:mt-0 socials">
                <FontAwesomeIcon icon={faDiscord} className="text-white opacity-75 text-2xl hover:text-sky-blue transition-colors duration-300" />
                <FontAwesomeIcon icon={faTwitch} className="text-white opacity-75 text-2xl hover:text-sky-blue transition-colors duration-300" />
                <FontAwesomeIcon icon={faYoutube} className="text-white opacity-75 text-2xl hover:text-sky-blue transition-colors duration-300" />
            </div>
        </>
    )
}

export default Navbar;