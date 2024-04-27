import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import logo1 from "../images/netflix_logo.png";
function ColorSchemesExample() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">
            {" "}
            <img
              className="nav"
              src={logo1}
              alt="Epiflix Logo"
              width={"150px"}
              height={"80px"}
            />{" "}
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">TV Shows</Nav.Link>
            <Nav.Link href="#pricing">Movies</Nav.Link>
            <Nav.Link href="#pricing">Recently Added</Nav.Link>
            <Nav.Link href="#pricing">My list</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default ColorSchemesExample;
