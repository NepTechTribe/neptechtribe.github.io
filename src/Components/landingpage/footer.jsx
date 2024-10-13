import { Container, Row, Col } from "react-bootstrap";
import fullogo from "../../assets/LandingPage/logo.png";
import {
    Facebook,
    Linkedin,
    EnvelopeFill,
    Youtube,
  } from "react-bootstrap-icons";
  import { Link } from "react-router-dom";



function Footer() {



  return (
    <div className="Footer">
      <Container>
        <Row style={{ justifyItems: "center" , paddingTop:'2rem', paddingBottom:'2rem'}}>
          <Col lg={3} md={12}>
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
          <Col lg={3} md={4} sm={6} xs={6} className="Footer-col2">
            <dl>
              <dt className="Footer-col2__head">  Explore </dt>
              <dd className="Footer-col2__data"> <Link to='/about' className="link-default"> About Us </Link></dd>
              <dd className="Footer-col2__data"><Link to='/team' className="link-default"> Our Team </Link></dd>
              <dd className="Footer-col2__data"><Link to='/blog' className="link-default"> Blogs</Link></dd>
              <dd className="Footer-col2__data"><Link to='/faq' className="link-default"> FAQ </Link></dd>
            </dl>
          </Col>
          <Col lg={3} md={4} sm={6} xs={6} className="Footer-col2">
            <dl>
              <dt className="Footer-col2__head"> Services</dt>
              <dd className="Footer-col2__data"><Link to='/events' className="link-default"> Events </Link></dd>
              <dd className="Footer-col2__data"><Link to='/hackathon' className="link-default"> Hackathons </Link></dd>
              <dd className="Footer-col2__data"><Link to='/bootcamp' className="link-default"> Bootcamps </Link></dd>
            </dl>
          </Col>
          <Col lg={3} md={4} sm={6} xs={6} className="Footer-col2">
            <dl>
              <dt className="Footer-col2__head">Resources</dt>
              <dd  className="Footer-col2__data"><Link to='/csit' className="link-default"> Bsc CSIT </Link></dd>
              <dd  className="Footer-col2__data"><Link to='/bca' className="link-default"> BCA </Link></dd>
              <dd  className="Footer-col2__data"><Link to='/bim' className="link-default"> BIM </Link></dd>
              <dd  className="Footer-col2__data"><Link to='/bit' className="link-default"> BIT </Link></dd>
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
