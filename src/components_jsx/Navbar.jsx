import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import ganpati from '../images/cultxlogo.png';
import '../components_css/Navbar.css';
import '../components_res/Navbar.css';
import {Link} from "react-scroll";
// import { Component } from 'react';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen); // Toggle menu visibility
    };

    return (
        <div className="nav-main-div">

            <div className="logo">
                <img src={ganpati} alt="Logo" />
            </div>

            <div className="nav-links">
                <Link to='#'>Home</Link>
                <Link to="about-main-div"  smooth={true} duration={500}>About</Link>
                <Link to="glimpse-main" smooth={true} duration={500}>Glimpse</Link>
                <Link to="glimpse-main" smooth={true} duration={500}>Members</Link>
                <Link to="glimpse-main" smooth={true} duration={500}>Clubs</Link>
                <Link to="contact-main" smooth={true} duration={500}>Contacts</Link>
            </div>

            <div className="ham-div">
                <a className="hamburgur">
                    <MenuIcon onClick={handleMenuToggle} sx={{
                        fontSize: 40,
                        '@media (max-width: 768px)': {
                            fontSize: 25,
                        },
                        '@media (max-width: 390px)': {
                            fontSize: 25,
                        },
                        '@media (max-width: 350px)': {
                            fontSize: 20,
                        },
                        '@media (max-width: 320px)': {
                            fontSize: 16,
                        }
                    }} />
                </a>
                {menuOpen && (
                    <div className="mobile-menu">
                        <Link to='#'>Home</Link>
                    <Link to="about-main-div"  smooth={true} duration={500}>About</Link>
                    <Link to="glimpse-main" smooth={true} duration={500}>Glimpse</Link>
                    <Link to="glimpse-main" smooth={true} duration={500}>Members</Link>
                    <Link to="glimpse-main" smooth={true} duration={500}>Clubs</Link>
                    <Link to="contact-main" smooth={true} duration={500}>Contacts</Link>
                    </div>
                )}
            </div>
        </div>
    );
}
