import Title from "./title";
import img1 from "../../assets/LandingPage/pr-1.jpg";
import { Container, Carousel, Row, Col } from "react-bootstrap";
import img2 from "../../assets/LandingPage/about.jpg";
import React, { useState, useEffect } from "react";

function Partners() {
  const images = [img1, img1, img2, img1, img2, img2, img2];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(5);

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 576) {
        setItemsToShow(1);
      } else if (screenWidth < 992) {
        setItemsToShow(2);
      } else if (screenWidth < 1280) {
        setItemsToShow(3);
      } else {
        setItemsToShow(5);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const itemsToDisplay = [];
  const totalItems = images.length;

  for (let i = 0; i < Math.ceil(totalItems / itemsToShow); i++) {
    const start = (i * itemsToShow + currentIndex) % totalItems;
    const group = [];
    
    for (let j = 0; j < itemsToShow; j++) {
      group.push(images[(start + j) % totalItems]);
    }

    itemsToDisplay.push(group);
  }

  const handleSelect = (selectedIndex) => {
    setCurrentIndex(selectedIndex * itemsToShow);
  };

  return (
    <>
      <Title title={"PARTNERS"} head={"Our Partners "} />
      <div className="Partners">
        <Container>
          <Carousel activeIndex={Math.floor(currentIndex / itemsToShow)} onSelect={handleSelect}>
            {itemsToDisplay.map((itemImages, index) => (
              <Carousel.Item key={index}>
                <Row>
                  {itemImages.map((image, imgIndex) => (
                    <Col key={imgIndex} className="Partners-col">
                      <img
                        src={image}
                        alt={`Slide ${index * itemsToShow + imgIndex + 1}`}
                        className="Partners-col__image"
                      />
                    </Col>
                  ))}
                </Row>
              </Carousel.Item>
            ))}
          </Carousel>
        </Container>
      </div>
    </>
  );
}

export default Partners;
