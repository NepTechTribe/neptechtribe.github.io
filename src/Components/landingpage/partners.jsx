import Title from "./title";
import img1 from "../../assets/LandingPage/pr-1.jpg";
import React from "react";
import { Container, Carousel, Row, Col } from "react-bootstrap";
import img2 from "../../assets/LandingPage/about.jpg";

const images = [img1, img1, img2, img1, img2, img2, img2];

const generateInfiniteCarouselItems = (images, numItems) => {
  const totalImages = images.length;
  const sequence = [];

  for (let i = 0; i < numItems; i++) {
    const startIndex = i % totalImages;
    const itemIndices = [
      (startIndex + 0) % totalImages,
      (startIndex + 1) % totalImages,
      (startIndex + 2) % totalImages,
      (startIndex + 3) % totalImages,
    ];
    sequence.push(itemIndices);
  }

  return sequence;
};

function Partners() {
  const carouselItems = generateInfiniteCarouselItems(
    images,
    images.length * 2
  );
  return (
    <> <Title title={"PARTNERS"} head={"Our Partners "} />
    <div className="Partners">
      <Container >
        <Carousel>
          {carouselItems.map((seq, index) => (
            <Carousel.Item key={index}>
              <Row >
                {seq.map((imgIndex, i) => (
                  <Col key={i} className="Partners-col">
                    <img
                      src={images[imgIndex]}
                      alt={`Slide ${imgIndex + 1}`}
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
