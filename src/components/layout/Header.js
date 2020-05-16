import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList, faCalendarAlt, faUser } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <div className="heading h-100 w-100 text-center d-flex">
      <nav className="w-100 bg-primary flex-container">


        {/* <a href="/profile" className="text-white ml-auto mr-1 pb-auto">
            <strong>Profile</strong>
        </a> */}
        <div className="right-0 py-2">
          <a href="/profile">
            <FontAwesomeIcon 
              icon={faUser} 
              size="2x" 
              color="white" 
              className="pointer" 
            />
          </a>
        </div>

        <div className="text-white right-0 my-auto">
          <a href="/dashboard" className="custom-nav-link text-white m-2"><strong>2D</strong></a>
          <a href="/todos" className="custom-nav-link my-2">
            <FontAwesomeIcon 
              icon={faClipboardList} 
              size="2x" 
              color="white" 
              className="pointer" 
            />
          </a>
          <a href="/dashboard" className="custom-nav-link m-2">
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
