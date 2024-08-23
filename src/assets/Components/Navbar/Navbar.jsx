import React, { useState, useEffect } from 'react';
import './Navbar.css';
import fullogo from '../full-logo.png';
import { Link } from 'react-scroll';
const Navbar = () => {
    const [sticky, setSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            window.scrollY > 50 ? setSticky(true) : setSticky(false);
        };

        window.addEventListener('scroll', handleScroll);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
            <img src={fullogo} alt="NepTech Tribe Logo" className="logo" />
            {/* <h1 className='logo'>NepTech Tribe</h1> */}
            <ul className="hide-mobile-menu">
                <li><Link to="hero"  smooth="true" offset={0} duration={500}>Home</Link></li>
                <li><Link to="album" smooth="true" offset={0} duration={500}>Gallery</Link></li>
                <li><Link to="about" smooth="true" offset={0} duration={500}>About us</Link></li>
                <li><Link to="events" smooth="true" offset={0} duration={500}>Upcoming Events</Link></li>
                <li><Link to="contact" className="btn" smooth="true" offset={0} duration={500}>Contact us</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
