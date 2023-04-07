import {Navbar, Container, Nav, Image} from "react-bootstrap"
import logo from "../assets/logo/FLEX.png"
const NavigationBar = () =>{
    return(
        <div>
        <Navbar variant="dark" className="navbar navbar-dark bg-dark">
            <Container>
            <Navbar.Brand href="/">
                <div class="container-fluid">
                <Image src={logo} alt="" width="100" height="auto" />
                 </div>
                 </Navbar.Brand>
                 <Nav>
                <Nav.Link href="#trending">MOVIES</Nav.Link>
                <Nav.Link href="#superhero">TV SERIES</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
        </div>
    )
}
export default NavigationBar