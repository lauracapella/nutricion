import {Link} from "react-router-dom"
import { Navbar,Nav,NavDropdown,Button,Container } from 'react-bootstrap'

export default function Navegacion(){
    return(
        <>
          
 <Navbar bg="light" variant="light" bg="light" expand="lg" className="menu_nav">
  <Container>
    <Navbar.Brand href="./">Mr.Meals</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="m-auto ">
{/*          <Nav.Link href="./" >Home</Nav.Link> 
 */}         <Nav.Link href="./Buscador" >MENÚ DEL DIA</Nav.Link> 
      </Nav>
      <Nav className="md-auto ">
      <Nav.Link href="../Login">Login</Nav.Link>
      <Nav.Link href="../Registration">SignUp</Nav.Link>
    </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>

        </>
    )
}