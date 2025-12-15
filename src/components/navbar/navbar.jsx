import { useState, useEffect, useRef, Router } from "react";
import useScreenSize from "../../hooks/windowResize";
import './navbar.css'
import logo from '/gaming-and-me-portfolio/images/headerFooter/logo.svg'

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);
    const screenSize = useScreenSize();

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
    
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
    }, [isOpen]);

    return (
        <div className="navbar z-10 w-100" aria-label="Navigation">

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