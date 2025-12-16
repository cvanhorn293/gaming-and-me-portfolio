import { useState, useEffect, useRef, Router } from "react";
import useScreenSize from "../../hooks/windowResize";
import './navbar.css';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const menuRef = useRef(null);
    const screenSize = useScreenSize();
    const logo = "/gaming-and-me-portfolio/images/headerFooter/logo.svg"

    // Close menu on outside click
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        if (isOpen) document.addEventListener("mousedown", handleClickOutside);
        else document.removeEventListener("mousedown", handleClickOutside);

        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isOpen]);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    }, [isOpen]);

    // Navbar background on scroll
    useEffect(() => {
        const onScroll = () => {
            setScrolled(window.scrollY > 80);
        };
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <div className={`navbar z-10 w-100 ${scrolled ? ' navbar-bg' : ''}`} aria-label="Navigation">
            <button className="hamburger" onClick={() => setIsOpen(true)}>
                &#9776;
            </button>
            <a href="#" className="logo">            
                <img src={logo} alt="Personal Logo - It's a comet"/>
            </a>
            <a className="buy-tickets-button" href="#" target="_blank">
                <button className="primary-button button-desktop-only">work with me</button>
            </a>
            {isOpen && <div className="overlay" />}
            <div ref={menuRef} className={`side-menu ${isOpen ? "open" : ""}`}>
                <button className="close-btn" onClick={() => setIsOpen(false)}>
                    &times;
                </button>
                <img className="side-menu-logo" src={logo} alt="Personal Logo - It's a comet"/>
                <ul className="side-menu-links margin-bottom-large">
                </ul>
            </div>
        </div>
    ) 
}