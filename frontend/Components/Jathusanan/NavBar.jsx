import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import Container from 'react-bootstrap/Container'

const NavBar = () => {
    return ( 
        <Navbar bg="light" expand="lg" fixed='top'>
  <Container>
    <Navbar.Brand href="#home">CMS</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/">Home</Nav.Link>
        <NavDropdown title="Actions" id="basic-nav-dropdown">
          <NavDropdown.Item href="/Research">View Research Details</NavDropdown.Item>
          <NavDropdown.Item href="/Workshop">View Workshop Details</NavDropdown.Item>
          <NavDropdown.Divider />
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
     );
}
 
export default NavBar;