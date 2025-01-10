import React from 'react'
import Profile from '../assets/topbar/profile.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'

export default function
  () {
  return (
    <div className='topbar'>
      <h3 className="topbar__text">
        Welcome! <span className="bold">Guest</span>
      </h3>

      <div className="topbar__user">

        <div className="topbar__frame">
          <img src={Profile} alt="Profile Picture" className="topbar__frame__profile" />
          <div className="topbar__frame__text">Guest</div>
        </div>

        <FontAwesomeIcon icon={faChevronDown} className='topbar-icon' />
      </div>
    </div>
  )
}
