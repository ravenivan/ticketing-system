import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import NewTicket from '../assets/dashboard/new-ticket.svg'
import AllTickets from '../assets/dashboard/all-tickets.svg'
import NewTickets from '../assets/dashboard/new-tickets.svg'
import OngoingTickets from '../assets/dashboard/ongoing-tickets.svg'
import ResolvedTickets from '../assets/dashboard/resolved-tickets.svg'
import TicketCard from './ui/TicketCard'

export default function () {
  return (
    <div className="dashboard">
      <h1 className="dashboard__title">Tickets</h1>

      <div className='ticketsList'>
        <div className='ticketsList__header'>

          <div className="search">
            <FontAwesomeIcon icon={faMagnifyingGlass} className='search-input-icon' />
            <input type="text" className="search-input" placeholder='Search for ticket' />
          </div>

          <button className="newTicket">
            <img src={NewTicket} alt="" className="newTicket__icon" />
            <span className="newTicket__text">New Ticket</span>
          </button>

        </div>

        <div className='dashboard-options'>
          <div className="dashboard-option">
            <img src={AllTickets} alt="" className="dasboard-option-img" />
            <span className="dashboard-option-text">All Tickets</span>
          </div>
          <div className="dashboard-option">
            <img src={NewTickets} alt="" className="dasboard-option-img" />
            <span className="dashboard-option-text">New Tickets</span>
          </div>
          <div className="dashboard-option">
            <img src={OngoingTickets} alt="" className="dasboard-option-img" />
            <span className="dashboard-option-text">Ongoing Tickets</span>
          </div>
          <div className="dashboard-option">
            <img src={ResolvedTickets} alt="" className="dasboard-option-img" />
            <span className="dashboard-option-text">Resolved Tickets</span>
          </div>
        </div>

        <div className="dashboard-tickets">
          <TicketCard />
          <TicketCard />  
        </div>
      </div>
    </div>
  )
}
