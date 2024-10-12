import Title from "./title";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import eventimg from "../../assets/LandingPage/pr-1.jpg";
import Button from "./button";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";


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
      date: "2054",
      venue: "Google Meet",
    },
    {
      title: "event title",
      image: eventimg,
      date: "2051",
      venue: "Google Meet",
    },
    {
      title: "event title",
      image: eventimg,
      date: "2052",
      venue: "Google Meet",
    },
    {
      title: "event title",
      image: eventimg,
      date: "2055",
      venue: "Google Meet",
    },
  ];


  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(4); 

  const totalItems =  AnnouncementArray.length;


  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 576) {
        setItemsToShow(1);
      } else if (screenWidth < 992) {
        setItemsToShow(2);
      }else if (screenWidth < 1280) {
        setItemsToShow(3);
      }
       else {
        setItemsToShow(4);
      }
    };

    handleResize(); 
    window.addEventListener('resize', handleResize); 

    return () => window.removeEventListener('resize', handleResize); 
  }, []);

  const nextItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex + itemsToShow) % totalItems);
  };

  const prevItem = () => {
    setCurrentIndex((prevIndex) => (prevIndex - itemsToShow + totalItems) % totalItems);
  };

  const itemsToDisplay = [];
  for (let i = 0; i < itemsToShow; i++) {
    itemsToDisplay.push(AnnouncementArray[(currentIndex + i) % totalItems]);
  }

  return (
    <>
      <Container className="Announcement">
        <Title title={"ANNOUNCEMENTS"} head={"Our Upcoming Events"} />
        <Row>
          {itemsToDisplay.map((item, index) => (
            <Col  key={index} className="Announcement-individual">
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
        <Row>
        <div className="Announcement-row2">
        <button onClick={prevItem} className="Announcement-row2__button">
        <ChevronLeft />
      </button>
      <button onClick={nextItem} className="Announcement-row2__button" >
        <ChevronRight />
      </button>
        </div>
        </Row>
      </Container>
    </>
  );
}

export default Announcement;
