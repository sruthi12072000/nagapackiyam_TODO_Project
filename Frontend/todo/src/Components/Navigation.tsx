import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Nav, Navbar } from "react-bootstrap";

const Navigation:React.FC=()=>{
    return(
        
        <Navbar bg="primary" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/home"><FontAwesomeIcon icon={faHouse} />&nbsp;Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/todo">Todo</Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
    );
}
export default Navigation;