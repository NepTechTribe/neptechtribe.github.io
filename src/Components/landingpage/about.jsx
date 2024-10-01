import Title from "./title";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import img from '../../assets/LandingPage/about.jpg';

function AboutUs(){
    return(
        <>
        <Container>
        <Title title={"About NEPTECH Tribe"}  head={"Who Are We "} />
<Row>
    <Col md={6}>
    <img src={img} alt="About Image" />
    </Col>
    <Col md={6}>
    <p><b> NepTech Tribe </b> is a non-profit organization that unites tech enthusiasts of all ages to share knowledge and foster innovation. We offer events and activities to enhance skills and encourage collaboration, aiming to drive technological progress and create a supportive community.
    </p>
    <h3> Our Mission  </h3>
    <p>To unite tech enthusiasts of all ages for knowledge sharing, collaboration, and skill development in a supportive community
    </p>
    <h3>Our Vision</h3>
    <p>To build a global network where all generations drive tech advancement and share diverse perspectives.</p>
    </Col>
</Row>
<Row>
    <h3>Our Values</h3>
    <Col md={4}>
    </Col>
    <Col md={4}>
    </Col>
    <Col md={4}>
    </Col>
</Row>
        </Container>
        </>
    )
}

export default AboutUs;