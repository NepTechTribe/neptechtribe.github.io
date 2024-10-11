import { Container, Row, Col } from "react-bootstrap";
import fullogo from "../../assets/LandingPage/logo.png";
import {
    Facebook,
    Twitter,
    Linkedin,
    TelephoneFill,
    GeoAltFill,
    EnvelopeFill,
    Envelope,
    Youtube,
  } from "react-bootstrap-icons";



function Footer() {



  return (
    <div className="Footer">
      <Container>
        <Row style={{ justifyItems: "center" , paddingTop:'2rem', paddingBottom:'2rem'}}>
          <Col md={3}>
            <img
              src={fullogo}
              alt="NepTech Tribe Logo"
              className="Navbar-logo"
            />
            <p className="Footer-col1__introduction">
              {" "}
              NepTech Tribe is a non-profit organization that unites tech
              enthusiasts of all ages to share knowledge and foster innovation.
              We offer events and activities to enhance skills and encourage
              collaboration, aiming to drive technological progress and create a
              supportive community.
            </p>
            <div className="Footer-col1__buttons">
                <button onClick={() => window.open('https://www.facebook.com/neptechtribe/', '_blank')}>
                  <Facebook className="icon" />
                </button>
                <button>
                  <Youtube onClick={() => window.open(' https://www.youtube.com/@NepTechTribe', '_blank')} className="icon" />
                </button>
                <button>
                  < EnvelopeFill onClick={() => window.open('mailto:neptechtribe@gmail.com', '_blank')}  className="icon" />
                </button>
                <button>
                  <Linkedin onClick={() => window.open('https://www.linkedin.com/company/neptechtribe/posts/?feedView=all', '_blank')} className="icon" />
                </button>
              </div>
          </Col>
          <Col md={3} className="Footer-col2">
            <dl>
              <dt className="Footer-col2__head">Explore </dt>
              <dd className="Footer-col2__data">About Us</dd>
              <dd className="Footer-col2__data">Our Team</dd>
              <dd className="Footer-col2__data">Blogs</dd>
              <dd className="Footer-col2__data">FAQ</dd>
            </dl>
          </Col>
          <Col md={3} className="Footer-col2">
            <dl>
              <dt className="Footer-col2__head"> Services</dt>
              <dd className="Footer-col2__data">Events</dd>
              <dd className="Footer-col2__data">Hackathons</dd>
              <dd className="Footer-col2__data">Bootcamps</dd>
            </dl>
          </Col>
          <Col md={3} className="Footer-col2">
            <dl>
              <dt className="Footer-col2__head">Resources</dt>
              <dd  className="Footer-col2__data">Bsc CSIT</dd>
              <dd  className="Footer-col2__data">BCA</dd>
              <dd  className="Footer-col2__data">BIM</dd>
              <dd  className="Footer-col2__data">BIT</dd>
            </dl>
          </Col>
        </Row>
        <hr />
        <Row className="Footer-copyright" >
        <p>Copyright 2024 NepTech Tribe All Rights Reserved.</p>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
