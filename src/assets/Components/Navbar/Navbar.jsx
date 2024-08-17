import React, { useState, useEffect } from 'react';
import './Navbar.css'
import fullogo from '../full-logo.png'
const Navbar = () => {
    const [sticky, setSticky] = useState(false);
    useEffect(() => {
        window.addEventListener('scroll', () => {
            window.scrollY > 50 ? setSticky(true) : setSticky(false);
        })
    }, []);
    return (
        <nav className={`container ${sticky? 'dark-nav': ''}`}>
            <img src={fullogo} alt="" className="logo" />
            {/* <h1 className='logo'>NepTech Tribe</h1> */}
            <ul className="hide-mobile-menu">
                <li><a>Home</a></li>
                <li><a>Gallery</a></li>
                <li><a>About us</a></li>
                <li><a>Upcoming Events</a></li>

                <li><a className="btn">Contact us</a></li>
            </ul>
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGYAAABQCAYAAADr/ADSAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAACOSURBVHgB7d2xEYAwDARBi/57BpMwQwW+YLeFS/WjubfFZ7YVcC2ShIkSJkqYKGGihIkSJkqYKGGihIkSBgAAAAAAAAAAOGQsyprclUUJEyVMlDBRwkQJEyVMlDBRwkQJEyUMAAAAAAAAAABwSOIf18uy7c9dWZQwUcJECRMlTJQwUcJECRMlTJQwUcJEPT/mDD5eCGIPAAAAAElFTkSuQmCC" alt="" className="menu-icon" />
        </nav>
    )
}

export default Navbar
