import React from 'react'
import Dashboard from '../assets/sidebar/dashboard.svg'
import Users from '../assets/sidebar/users.svg'
import Tickets from '../assets/sidebar/tickets.svg'
import Officials from '../assets/sidebar/officials.svg'
import Settings from '../assets/sidebar/settings.svg'
import { Link } from 'react-router-dom'


export default function Sidebar() {
  return (
    <nav className="sidebar">
      <h1 className="sidebar__title">
        Ticketing
      </h1>
      <div className="sidebar__options">
        <Link to="/" className="sidebar__option">
          <div className="sidebar__option__logo-wrapper">
            <img src={Dashboard} alt="" className="sidebar__logo" />
          </div>
          <h3 className="sidebar__option-title">
            Dashboard
          </h3>
        </Link>
        <div className="sidebar__option">
          <div className="sidebar__option__logo-wrapper">
            <img src={Users} alt="" className="sidebar__logo" />
          </div>
          <h3 className="sidebar__option-title">
            Users
          </h3>
        </div>
        <div className="sidebar__option">
          <div className="sidebar__option__logo-wrapper">
            <img src={Tickets} alt="" className="sidebar__logo" />
          </div>
          <h3 className="sidebar__option-title">
            Tickets
          </h3>
        </div>
        <div className="sidebar__option">
          <div className="sidebar__option__logo-wrapper">
            <img src={Officials} alt="" className="sidebar__logo" />
          </div>
          <h3 className="sidebar__option-title">
            Officials
          </h3>
        </div>
        <div className="sidebar__option">
          <div className="sidebar__option__logo-wrapper">
            <img src={Settings} alt="" className="sidebar__logo" />
          </div>
          <h3 className="sidebar__option-title">
            Site Settings
          </h3>
        </div>
      </div>
    </nav>
  )
}
