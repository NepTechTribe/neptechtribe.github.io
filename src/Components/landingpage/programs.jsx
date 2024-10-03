import Title from "./title";
import img1 from '../../assets/LandingPage/pr-1.jpg';
import img2 from '../../assets/LandingPage/pr-2.jpg';
import img3 from '../../assets/LandingPage/pr-3.jpg';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { PeopleFill, Activity,PersonRaisedHand } from "react-bootstrap-icons";

function Programs(){
const ProgramArray = [
    {
        image : img1,
        icon:PeopleFill,
        title:"Social Skill Development"

    },
    {
        image : img2,
        icon:Activity,
        title:"Personal Growth"

    },
    {
        image : img3,
        icon:PersonRaisedHand,
        title:"Public Speaking"

    }
]

    return(
        <>
        <Container>
        <Title title={"Our Programs"} head={"What We Offer"} />
        <Row>
            {ProgramArray.map((program , index) => (
                <Col md={4} className="Program">
                    <img src={program.image} alt="Image for program" />
                    <div className="Program-caption">
                    {program.icon && <program.icon className="Program-icons"/>}
                        <p>{program.title}</p>
                    </div>
                </Col>
            ))}
        </Row>
        </Container>
        </>
    )
}

export default Programs;