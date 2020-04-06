import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';

function Header() {
  return (
    <div className="heading h-100">
      <Navbar bg="primary" variant="dark" expand="lg" className="h-100">
        <Nav className="text-white flex-column">
          <Navbar.Brand href="#home"><strong className="text-white">Task App</strong></Navbar.Brand>
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/todos">Todos</Nav.Link>
          <Nav.Link href="#">Calendar</Nav.Link>
        </Nav>
      </Navbar>
    </div>
  )
}

export default Header
