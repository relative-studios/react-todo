import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <div className="heading h-100 w-100 text-center d-flex">
      <Navbar bg="primary" variant="dark" expand="lg" className="h-100 right-0">
        <Nav className="text-white flex-column text-center">
          <Nav.Link href="/dashboard">
            <strong className="text-white">2D</strong>
          </Nav.Link>
          <Nav.Link href="/todos">
            <FontAwesomeIcon 
              icon={faClipboardList} 
              size="2x" 
              color="white" 
              className="pointer" 
            />
          </Nav.Link>
          <Nav.Link href="/dashboard">
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
