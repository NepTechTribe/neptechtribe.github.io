import { Link } from "react-router-dom";
import { HouseFill , ChevronRight } from "react-bootstrap-icons";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";



function Breadcrum({pagehead}){
    return(
        <><div className="Breadcrum">
        <Container>
            <Row>
                <Col md={12} className="Breadcrum-col11">
                <h1>{pagehead}</h1>
                <div className="Breadcrum-container">
                    <div className="Breadcrum-containerlink">
                    <HouseFill  className="Breadcrum-container__icon" />
                    <p  className="Breadcrum-containerlink__home"> <Link to="/" className="link-default"> home </Link></p>
                    </div>
                    <ChevronRight  className="Breadcrum-container__icon" />
                    <p  className="Breadcrum-containerlink__pagehead">{pagehead}</p>
                </div>
                </Col>
            </Row>
        </Container>
        </div>
        </>
    )
}

export default Breadcrum;