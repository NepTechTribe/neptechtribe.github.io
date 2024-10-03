import Title from "./title";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import img from "../../assets/LandingPage/about.jpg";

function AboutUs() {
  const MissionVissionArray = [
    {
      head: "Our Mission",
      description:
        "To unite tech enthusiasts of all ages for knowledge sharing, collaboration, and skill development in a supportive community",
    },
    {
      head: "Our Vision",
      description:
        "To build a global network where all generations drive tech advancement and share diverse perspectives.",
    },
  ];

  const ValuesAttay= [
    {
      title:" Inclusivity",
      description:" We welcome tech enthusiasts of all ages and backgrounds, fostering a diverse community by ensuring every voice is heard and valued."
    },
    {
      title:" Collaboration",
      description:"We drive collective innovation by encouraging members to share knowledge,  ideas, and resources."
    },
    {
      title:" Continuous Learning",
      description:" We stay at the forefront of technology by providing ongoing opportunities for personal and professional skill development."
    }
  ]

  return (
    <>
      <Container className="About">
        <Title title={"About NEPTECH Tribe"} head={"Who Are We "} />
        <Row className="About-row1">
          <Col md={6} className="About-row1__col1">
            <img src={img} alt="About Image" />
          </Col>
          <Col md={6} className="About-row1__col2">
            <p className="About-row1__col2__introduction">
              <b> NepTech Tribe </b> is a non-profit organization that unites
              tech enthusiasts of all ages to share knowledge and foster
              innovation. We offer events and activities to enhance skills and
              encourage collaboration, aiming to drive technological progress
              and create a supportive community.
            </p>
            <div>
              {MissionVissionArray.map((item, index) => (
                <div key={index} className="About-MissionVision">
                  <h3 className="About-MissionVision__head">{item.head}</h3>
                  <p className="About-MissionVision__description">{item.description}</p>
                </div>
              ))}
            </div>
          </Col>
        </Row>
        <Row>
          <h3 className="About-values">Our Values</h3>
          {ValuesAttay.map((value , index) => (
            <Col md={4} style={{textAlign:'center',padding:'1rem',fontStyle:'italic'}}>
              <h5 className="About-values__title">{value.title}</h5>
              <p className="About-MissionVision__description">{value.description}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default AboutUs;
