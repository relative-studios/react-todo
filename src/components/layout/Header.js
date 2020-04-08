import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <div className="heading h-100 w-100 text-center d-flex">
      <nav className="w-100 bg-primary flex-container">
        <div className="text-white right-0">
          <a href="/dashboard" className="custom-nav-link text-white my-2"><strong>2D</strong></a>
          <a href="/todos" className="custom-nav-link my-2">
            <FontAwesomeIcon 
              icon={faClipboardList} 
              size="2x" 
              color="white" 
              className="pointer" 
            />
          </a>
          <a href="/dashboard" className="custom-nav-link my-2">
            <FontAwesomeIcon 
              icon={faCalendarAlt} 
              size="2x" 
              color="white" 
              className="pointer" 
            />
          </a>
        </div>
      </nav>
    </div>
  )
}

export default Header
