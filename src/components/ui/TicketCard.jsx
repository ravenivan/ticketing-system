import React from 'react'
import Profile from '../../assets/topbar/profile.jpg'
import { Link } from 'react-router-dom';

export default function ({ ticket }) {

  const timestamp = ticket.createdAt;
  const date = new Date(timestamp.seconds * 1000); // Convert seconds to milliseconds
  const options = {
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  };
  const formattedDate = date.toLocaleString('en-US', options); // Format the date

  return (
    <div className='ticket'>
      <div className="ticket-header">
        <div className="ticket-info">
          <div className="ticket-condition"></div>
          <div className="ticket-info-text">Ticket #{ticket.id}</div>
        </div>
        <span className="ticket-date">Posted {formattedDate} </span>
      </div>

      <div className="ticket-main">
        <h3 className="ticket-title">{ticket.mainCategory}</h3>
        <p className="ticket-description">{ticket.description}</p>
      </div>

      <div className="ticket-user-info">
        <div className="ticket-user">
          <img src={Profile} alt="" className="ticket-user-profile" />
          <h4 className="ticket-user-name">Guest 2</h4>
        </div>
        <Link to={`/${ticket.id}`} className='ticket-open'>
          Open Ticket
        </Link>
      </div>
    </div>
  )
}
