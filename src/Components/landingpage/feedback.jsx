import Title from "./title";
import { Container, Row, Col } from "react-bootstrap";
import {
    Person,
    Envelope,
    TelephoneFill,
    PersonFill,
    PencilFill,
    GeoAltFill,EnvelopeFill,
  } from "react-bootstrap-icons";

function Contact(){
    return(
        <>
        <Container className="Contact">
            <Title title={"Contact"} head={"Lets get connected"} />
            <Row>
          <Col lg={8} md={12}>
            <div className="ContactForm-form">
              <form action="submit">
                <div className="ContactForm-form-inputcontainer">
                  <div className="ContactForm-form-input">
                    <button className="ContactForm-form-iconbutton">
                      <Person className="ContactForm-form-icon" />
                    </button>
                    <input
                      type="text"
                      className="ContactForm-form-name"
                      name="name"
                      placeholder=" NAME"
                    />
                  </div>
                  <div className="ContactForm-form-input">
                  <button className="ContactForm-form-iconbutton">
                      <Envelope className="ContactForm-form-icon" />
                    </button>
                    <input
                      type="email"
                      className="ContactForm-form-name"
                      name="email"
                      placeholder=" EMAIL ADDRESS"
                    />
                   
                  </div>
                </div>
                <div className="ContactForm-form-inputcontainer">
                  <div className="ContactForm-form-input">
                  <button className="ContactForm-form-iconbutton">
                      <TelephoneFill className="ContactForm-form-icon" />
                    </button>
                    <input
                      type="tel"
                      className="ContactForm-form-name"
                      name="number"
                      placeholder=" PHONE"
                    />
                  </div>
                  <div className="ContactForm-form-input">
                    <button className="ContactForm-form-iconbutton">
                      <PersonFill className="ContactForm-form-icon" />
                    </button>
                    <input
                      type="text"
                      className="ContactForm-form-name"
                      name="subject"
                      placeholder=" SUBJECT"
                    />
                  </div>
                </div>
                <div className="ContactForm-form-inputcontainer">
                  <div className="ContactForm-form-input1">
                  <button className="ContactForm-form-iconbutton">
                      <PencilFill className="ContactForm-form-icon" /> 
                    </button>
                    <span className="ContactForm-form-comment">&nbsp; &nbsp; HOW CAN WE HELP YOU</span>
                    <textarea
                      name="text-area"
                      className="ContactForm-form-textarea"
                    ></textarea>
                  </div>
                </div>
                <div className="ContactForm-form-buttoncontainer">
                  <button className="ContactForm-form-button">Send Message</button>
                </div>
              </form>
            </div>
          </Col>
          <Col lg={4} md={12}>
          <div className="ContactForm-details">
            <div className="ContactForm-details__section1">
                <div>
                    <TelephoneFill className="ContactForm-details__icon" />
                </div>
                <div><p className="ContactForm-details__head">
                    call now
                </p>
                <p className="ContactForm-details__desc"> +554551556695 <br />
                +554551556695</p>
                </div>
            </div>
            <div className="ContactForm-details__section1">
                <div>
                    <EnvelopeFill className="ContactForm-details__icon" />
                </div>
                <div><p className="ContactForm-details__head">
                    message now
                </p>
                <p className="ContactForm-details__desc"> nebtechtribe@gmail.com,<br />
                aran@example.com,</p>
                </div>
            </div>
            <div className="ContactForm-details__section1">
                <div>
                    <GeoAltFill className="ContactForm-details__icon" />
                </div>
                <div><p className="ContactForm-details__head">
                    address now
                </p>
                <p className="ContactForm-details__desc"> Rangpur, fullbari Road,<br />
                2548,New City.</p>
                </div>
            </div>
          </div>
          </Col>
        </Row>
        </Container>
        </>
    )
}

export default Contact;