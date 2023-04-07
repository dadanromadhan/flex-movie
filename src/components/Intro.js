import { Container, Col, Row, Button } from "react-bootstrap";
import logo from "../assets/logo/FLEX.png"
const Intro = () => {
    return(
        <div className="intro"> 
        <Container className="d-flex justify-content-center">
          <Row>
            <Col>
            <div className="content-intro">
            <img src={logo} alt="Logo" width="150" height="auto" className="logo vertical-align-center" />
            <div className="title">Flix And Relax</div>
            <div className="introButton mt-2 text-center">
            <Button variant="dark" href="#trending">See All List</Button>
            </div>
            </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
}
export default Intro