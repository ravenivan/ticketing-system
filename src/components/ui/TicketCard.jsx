import React from 'react'
import Profile from '../../assets/topbar/profile.jpg'

export default function({ color }) {
  return (
    <div className='ticket'>
      <div className="ticket-header">
        <div className="ticket-info">
          <div className="ticket-condition"></div>
          <div className="ticket-info-text">Ticket #123</div>
        </div>
        <span className="ticket-date">Posted at 11:55 PM</span>
      </div>

      <div className="ticket-main">
        <h3 className="ticket-title">Fix Cart #54</h3>
        <p className="ticket-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint reprehenderit molestias dolor ad eum itaque fugiat nostrum amet, doloremque suscipit minima soluta omnis modi sed, tempore provident cumque. Cum, obcaecati?</p>
      </div>

      <div className="ticket-user-info">
        <div className="ticket-user">
          <img src={Profile} alt="" className="ticket-user-profile" />
          <h4 className="ticket-user-name">Guest 2</h4>
        </div>
        <div className="ticket-open">Open Ticket</div>
      </div>
    </div>
  )
}
