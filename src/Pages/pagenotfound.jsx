import { HouseFill , ChevronRight } from "react-bootstrap-icons";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "../Components/landingpage/Navbar";
import Footer from "../Components/landingpage/footer";
import Button from "../Components/landingpage/button";
import { Link } from "react-router-dom";


function PageNotFound(){
    return(
        <>
        <Navbar/>
        <div className="Breadcrum">
        <Container>
            <Row>
                <Col md={12} className="Breadcrum-col11">
                <h1>Page Not Found</h1>
                <div className="Breadcrum-container">
                    <div className="Breadcrum-containerlink">
                    <HouseFill  className="Breadcrum-container__icon" />
                    <p  className="Breadcrum-containerlink__home"> <Link to="/" className="link-default"> home </Link></p>
                    </div>
                    <ChevronRight  className="Breadcrum-container__icon" />
                    <p  className="Breadcrum-containerlink__pagehead">Page Not Found</p>
                </div>
                <div className="Breadcrum-footer">
            <h3>404 error</h3>
            <p>opps! this page is not found</p>
            <Button buttontext={"Back to Home"} buttonclass={"herobutton"} buttoncontainer={"Button-container"} location={"/"}/>
        </div>
                </Col>
            </Row>
        </Container>
        </div>
        <Footer/>
        </>
    )
}

export default PageNotFound;