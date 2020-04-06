import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <div className="heading h-100">
      <Navbar bg="primary" variant="dark" expand="lg" className="h-100">
        <Nav className="text-white flex-column">
          <Navbar.Brand href="/">
            <strong className="text-white">2D</strong>
          </Navbar.Brand>
          <Nav.Link href="/todos">
            <FontAwesomeIcon 
              icon={faClipboardList} 
              size="2x" 
              color="white" 
              className="pointer" 
            />
          </Nav.Link>
          <Nav.Link href="/">
            <FontAwesomeIcon 
              icon={faCalendarAlt} 
              size="2x" 
              color="white" 
              className="pointer" 
            />
          </Nav.Link>
        </Nav>
      </Navbar>
    </div>
  )
}

export default Header
