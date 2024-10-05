import Title from "./title";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import eventimg from "../../assets/LandingPage/pr-1.jpg";
import Button from "./button";
function Announcement() {
  const AnnouncementArray = [
    {
      title: "event title",
      image: eventimg,
      date: "2050",
      venue: "Google Meet",
    },
    {
      title: "event title",
      image: eventimg,
      date: "2050",
      venue: "Google Meet",
    },
    {
      title: "event title",
      image: eventimg,
      date: "2050",
      venue: "Google Meet",
    },
    {
      title: "event title",
      image: eventimg,
      date: "2050",
      venue: "Google Meet",
    },
  ];

  return (
    <>
      <Container className="Announcement">
        <Title title={"ANNOUNCEMENTS"} head={"Our Upcoming Events"} />
        <Row>
          {AnnouncementArray.map((item, index) => (
            <Col md={3} key={index} className="Announcement-individual">
              <img src={item.image} className="Announcement-individual__image" alt={`image of ${item.title}`} />
              <div style={{padding:'1rem 0rem'}}>
              <h2 className="Announcement-individual__title">{item.title}</h2>
              <h4 className="Announcement-individual__date">{item.date}</h4>
              <h4  className="Announcement-individual__venue">{item.venue}</h4>
              </div>
              <Button buttontext={"View More"} buttonclass={"eventbutton"} />
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Announcement;
