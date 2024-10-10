import { Container, Row, Col } from "react-bootstrap";
import fullogo from "../../assets/LandingPage/logo.png";

function Footer() {
  return (
    <div className="Footer">
      <Container>
        <Row style={{ justifyItems: "center" }}>
          <Col md={3}>
            <img
              src={fullogo}
              alt="NepTech Tribe Logo"
              className="Navbar-logo"
            />
            <p className="Footer-introduction">
              {" "}
              NepTech Tribe is a non-profit organization that unites tech
              enthusiasts of all ages to share knowledge and foster innovation.
              We offer events and activities to enhance skills and encourage
              collaboration, aiming to drive technological progress and create a
              supportive community.
            </p>
          </Col>
          <Col md={3}>
            <dl>
              <dt>Explore </dt>
              <dd>About Us</dd>
              <dd>Our Team</dd>
              <dd>Blog</dd>
              <dd>FAQ</dd>
            </dl>
          </Col>
          <Col md={3}>
            <dl>
              <dt> Services</dt>
              <dd>Events</dd>
              <dd>Hackathons</dd>
              <dd>Bootcamps</dd>
            </dl>
          </Col>
          <Col md={3}>
            <dl>
              <dt>Contact</dt>
              <dd>982155325</dd>
            </dl>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
