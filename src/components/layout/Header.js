import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList, faCalendarAlt } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <div className="heading h-100 w-100 text-center d-flex">
      <nav className="w-100 bg-secondary flex-container">
        <div className="text-white right-0">
          <a href="/dashboard" className="custom-nav-link text-white m-2"><strong>2D</strong></a>
          <a href="/todos" className="custom-nav-link my-2">
            <FontAwesomeIcon 
              icon={faClipboardList} 
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
