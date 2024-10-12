import React, { useState, useEffect } from "react";
import fullogo from "../../assets/LandingPage/logo.png";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import { List } from "react-bootstrap-icons";
import Offcanvas from 'react-bootstrap/Offcanvas';
import MobileNavList from "./mobilenavlist";




const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 25);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <nav className={`Navbar ${sticky ? "sticky" : ""}`}>
        <Container>
          <div className="Navbar-container">
            <img
              src={fullogo}
              alt="NepTech Tribe Logo"
              className="Navbar-logo"
            />
            <ul className="Navbar-menu">
              <li>
                <Link to="/" className="link-default">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="link-default">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/blog" className="link-default">
                  Blogs
                </Link>{" "}
              </li>
              <li>
                <Link to="/events" className="link-default">
                  {" "}
                  Events
                </Link>
              </li>
              <li>
                <Link to="/contact" className="link-default">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div className="MobileNav-container">
            <div>
              <img
                src={fullogo}
                alt="NepTech Tribe Logo"
                className="Navbar-logo"
              />
            </div>
            <div>
              <List onClick={handleShow} className="MobileNav-container__icon" />
            </div>
          </div>
        </Container>
      </nav>
      <Offcanvas show={show} onHide={handleClose} placement="end" className="MobileNav-canvas">
        <Offcanvas.Header closeButton>
        </Offcanvas.Header>
        <Offcanvas.Body>
         <MobileNavList/>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default Navbar;
