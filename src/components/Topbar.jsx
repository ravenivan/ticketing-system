import React, { useContext, useEffect, useState } from 'react'
import Profile from '../assets/topbar/profile.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown } from '@fortawesome/free-solid-svg-icons'
import { AppContext } from '../AppContext'
import { signOut } from 'firebase/auth'
import { auth } from '../firebase'
import toast, { Toaster } from 'react-hot-toast'

export default function
  () {

  const [isOpen, setIsOpen] = useState(false)

  const { user, setUser } = useContext(AppContext)

  const handleLogout = () => {
    setIsOpen(false)
    toast.success('Logged out successfully')
    setTimeout(() => {
      signOut(auth)
      setUser(null)
    }, 2000)
  }

  return (
    <div className='topbar'>
      <Toaster />
      <h3 className="topbar__text">
        Logged in with email <span className="bold">{user ? user.email : "Guest"}</span>
      </h3>

      <div className="topbar__user">

        <div className="topbar__frame">
          <img src={Profile} alt="Profile Picture" className="topbar__frame__profile" />
          <div className="topbar__frame__text">{user ? user.email.split("@")[0] : "Guest"}</div>
        </div>

        <FontAwesomeIcon onClick={() => setIsOpen(!isOpen)} icon={faChevronDown} className='topbar-icon' />

        {
          isOpen && (
            <div className="topbar__dropdown">
              <div className="topbar__dropdown__item"
                onClick={handleLogout}
              >
                Logout
              </div>
            </div>
          )
        }
      </div>
    </div>
  )
}
