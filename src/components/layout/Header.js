import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList, faUserCircle, faHome } from '@fortawesome/free-solid-svg-icons';

function Header() {
  return (
    <div className="heading h-100 w-100 text-center d-flex">
      <nav className="w-100 bg-secondary flex-container">
        <a href="profile" className="profile-nav custom-nav-link hide-mobile my-2">
          <FontAwesomeIcon 
            icon={faUserCircle} 
            size="2x" 
            color="white" 
            className="pointer" 
          />
        </a>
        <div className="text-white right-0">
          <a href="profile" className="profile-nav hide-desktop custom-nav-link my-2">
            <FontAwesomeIcon 
              icon={faUserCircle} 
              size="2x" 
              color="white" 
              className="pointer" 
            />
          </a>
          <a href="/dashboard" className="custom-nav-link m-2">
            <FontAwesomeIcon 
              icon={faHome} 
              size="2x" 
              color="white" 
              className="pointer" 
            />
          </a>
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
