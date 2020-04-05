import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';

function Header() {
  return (
    <div className="heading">
        <Navbar bg="primary" variant="dark" expand="lg">
        <Navbar.Brand href="#home"><strong className="text-white">Task App</strong></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="text-white mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/todos">Todos</Nav.Link>
            <Nav.Link href="#">Calendar</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  )
}

export default Header
