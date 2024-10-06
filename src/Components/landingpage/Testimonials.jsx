import Title from "./title";
import { Container, Row, Col } from "react-bootstrap";
import React, { useState, useEffect } from "react";
import { Quote } from "react-bootstrap-icons";
import Carousel from "react-bootstrap/Carousel";
import img1 from "../../assets/LandingPage/pr-1.jpg";
import img2 from "../../assets/LandingPage/about.jpg";

function Testimonials(){

    const TestimonialsArray = [
        {
            image : img1,
            name:"Demo Name",
            post:"Demo Post",
            description:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, corrupti ipsum! Harum exercitationem illo impedit aspernatur architecto? Ipsa dignissimos earum incidunt omnis sunt hic reiciendis natus, repellendus, sequi excepturi eos!",
        },
        {
            image : img1,
            name:"Demo Name",
            post:"Demo Post",
            description:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, corrupti ipsum! Harum exercitationem illo impedit aspernatur architecto? Ipsa dignissimos earum incidunt omnis sunt hic reiciendis natus, repellendus, sequi excepturi eos!",
        },
        {
            image : img2,
            name:"Demo Name",
            post:"Demo Post",
            description:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, corrupti ipsum! Harum exercitationem illo impedit aspernatur architecto? Ipsa dignissimos earum incidunt omnis sunt hic reiciendis natus, repellendus, sequi excepturi eos!",
        },
        {
            image : img2,
            name:"Demo Name",
            post:"Demo Post",
            description:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, corrupti ipsum! Harum exercitationem illo impedit aspernatur architecto? Ipsa dignissimos earum incidunt omnis sunt hic reiciendis natus, repellendus, sequi excepturi eos!",
        },
    ]


    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 576);

    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 576);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);


    const createTestimonials = (array) => {
        if (isSmallScreen) {
            return array.map(item => [item]);
        }
        let pairs = [];
        for (let i = 0; i < array.length; i += 2) {
            pairs.push(array.slice(i, i + 2));
        }
        return pairs;
    };

    const testimonialGroups = createTestimonials(TestimonialsArray);

    return(
        <>

            <Title title={"TESTIMONIALS"} head={"Testimonials From Team Members"}/>
            <Container className="Testimonials">
            <Carousel>
                {testimonialGroups.map((group, index) => (
                      <Carousel.Item key={index} className="Testimonials-item">
                      <div className="Testimonials-row">
                          {group.map((testimonial, subIndex) => (
                              <div className="Testimonials-individual" key={subIndex}>
                                  <p className="Testimonials-individual__desc">{testimonial.description}</p>
                                  <div className="Testimonials-individual__head">
                                      <div className="Testimonials-individual__head2">
                                          <img
                                              className="Testimonials-individual__image"
                                              src={testimonial.image}
                                              alt={`Image of ${testimonial.name}`}
                                          />
                                          <p>
                                              <span className="Testimonials-individual__name">{testimonial.name}</span> <br />
                                              <span className="Testimonials-individual__post">{testimonial.post}</span>
                                          </p>
                                      </div>
                                      <Quote className="Testimonials-individual__icon" />
                                  </div>
                              </div>
                          ))}
                      </div>
                  </Carousel.Item>
                ))}
            </Carousel>
        </Container>
        </>
    )
}

export default Testimonials;