import React, { useState, useEffect } from 'react';
import fullogo from '../../assets/LandingPage/logo.png';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
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
        <Container>
        <nav className={`Navbar ${sticky ? 'Navbar-dark' : ''}`}>
            <img src={fullogo} alt="NepTech Tribe Logo" className="Navbar-logo" />
            <ul className="Navbar-menu">
                <li><Link to="/" className='link-default' >Home</Link></li>
                <li><Link to="/gallary" className='link-default' >Gallery</Link></li>
                <li><Link to="/about" className='link-default'>About Us</Link> </li>
                <li><Link to="/events" className='link-default'> Upcoming Events</Link></li>
                <li><Link to="/contact" className='link-default' >Contact us</Link></li>
            </ul>
        </nav>
        </Container>
    );
};

export default Navbar;
