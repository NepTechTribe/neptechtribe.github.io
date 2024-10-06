import Title from "./title";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import eventimg from "../../assets/LandingPage/pr-1.jpg";
import Button from "./button";
import { ChevronLeft, ChevronRight } from "react-bootstrap-icons";
import React, { useState, useEffect } from "react";

function PastEvent() {
  const PastEventArray = [
    { title: "event title 1", image: eventimg },
    { title: "event title 2", image: eventimg },
    { title: "event title 3", image: eventimg },
    { title: "event title 4", image: eventimg },
    { title: "event title 5", image: eventimg },
    { title: "event title 6", image: eventimg },
    { title: "event title 7", image: eventimg },
    { title: "event title 8", image: eventimg },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsToShow = 4; 

  const getVisibleItems = () => {
    return Array.from({ length: itemsToShow }, (_, i) => {
      const index = (currentIndex + i) % PastEventArray.length;
      return PastEventArray[index];
    });
  };

  const handleNavigation = (direction) => {
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex + direction + PastEventArray.length) % PastEventArray.length;
      return newIndex;
    });
  };

  
  const visibleItems = getVisibleItems();

  const prevItem = () => handleNavigation(-itemsToShow);
  const nextItem = () => handleNavigation(itemsToShow);

  return (
    <div style={{ display: 'flex', alignItems: 'center', padding:'0rem 1rem' }}>
      <button onClick={prevItem} className="herobutton" disabled={currentIndex === 0}>
        <ChevronLeft />
      </button>
      <Container>
        <Title title={"GALLERY"} head={"Sneak Peek From Past Events"} />
        <Row>
          {visibleItems.map((item, index) => (
            <Col md={3} key={index} className="Announcement-individual">
              <img src={item.image} className="Announcement-individual__image" alt={`image of ${item.title}`} />
              <div style={{ padding: '1rem 0rem' }}>
                <h2 className="Announcement-individual__title">{item.title}</h2>
              </div>
              <Button buttontext={"View More"} buttonclass={"eventbutton"} />
            </Col>
          ))}
        </Row>
      </Container>
      <button onClick={nextItem} className="herobutton" disabled={currentIndex + itemsToShow >= PastEventArray.length}>
        <ChevronRight />
      </button>
    </div>
  );
}

export default PastEvent;
