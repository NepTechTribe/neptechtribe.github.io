import React, { useState, useEffect } from 'react';
import fullogo from '../../assets/LandingPage/logo.png';
import { Link } from 'react-router-dom';
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
        <nav className={`Navbar ${sticky ? 'Navbar-dark' : ''}`}>
            <img src={fullogo} alt="NepTech Tribe Logo" className="Navbar-logo" />
            <ul className="Navbar-menu">
                <li><Link to="/"  >Home</Link></li>
                <li><Link to="/" >Gallery</Link></li>
                <li><Link to="/">About Us</Link> </li>
                <li><Link to="/">Upcoming Events</Link></li>
                <li><Link to="/" >Contact us</Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
