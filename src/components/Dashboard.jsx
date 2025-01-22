import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import NewTicket from '../assets/dashboard/new-ticket.svg'
import AllTickets from '../assets/dashboard/all-tickets.svg'
import NewTickets from '../assets/dashboard/new-tickets.svg'
import OngoingTickets from '../assets/dashboard/ongoing-tickets.svg'
import ResolvedTickets from '../assets/dashboard/resolved-tickets.svg'
import TicketCard from './ui/TicketCard'
import { fetchTickets } from '../firestoreServices'
import { Link } from 'react-router-dom'

export default function () {

  const [tickets, setTickets] = useState([]);
  const [section, setSection] = useState('all');
  const [filteredTickets, setFilteredTickets] = useState([]);
  const [displayedTickets, setDisplayedTickets] = useState([]);
  const [page, setPage] = useState(1);

  const loadTickets = async () => {
    try {
      const fetchedTickets = await fetchTickets();
      console.log(fetchedTickets[0])
      setTickets(fetchedTickets);

    } catch (error) {
      console.error("Error fetching tickets", error)
    }
  }

  const chooseTickets = async () => {
    if (section === 'new') {
      const newTickets = tickets.filter((ticket) => ticket.status === 'New');
      setFilteredTickets(newTickets);
    } else if (section === 'ongoing') {
      const ongoingTickets = tickets.filter((ticket) => ticket.status === 'Ongoing');
      setFilteredTickets(ongoingTickets);
    } else if (section === 'resolved') {
      const resolvedTickets = tickets.filter((ticket) => ticket.status === 'Resolved');
      setFilteredTickets(resolvedTickets);
    } else {
      setFilteredTickets(tickets);
    }
  }

  useEffect(() => {
    loadTickets();
  }, [])

  useEffect(() => { 
    if (tickets.length > 0) {
      setDisplayedTickets(tickets[page - 1])
    }
  }, [page, tickets])

  return (
    <div className="dashboard">
      <h1 className="dashboard__title">Tickets</h1>

      <div className='ticketsList'>
        <div className='ticketsList__header'>

          <div className="search">
            <FontAwesomeIcon icon={faMagnifyingGlass} className='search-input-icon' />
            <input type="text" className="search-input" placeholder='Search for ticket' />
          </div>

          <Link to='/new-ticket' className='newTicket'>
            <img src={NewTicket} alt="" className="newTicket__icon" />
            <span className="newTicket__text">New Ticket</span>
          </Link>

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
          {displayedTickets !== undefined && displayedTickets.length > 0 ? (
            displayedTickets.map((ticket) => (
              <TicketCard key={ticket.id} ticket={ticket} />
            ))
          ) : (
            <div className="dashboard-tickets__empty">
              No tickets available
            </div>
          )}
        </div>

        <div className="dashboard-pagnition">
          <button className="dashboard-pagnition__button"
            onClick={() => {
              if (page > 1) {
                setPage(page - 1)
              }
            }}
          >
            Previous
          </button>
          <span className="dashboard-pagnition__page">Page {page}</span>
          <button className="dashboard-pagnition__button"
            onClick={() => {
              if (page < tickets.length) {
                setPage(page + 1)
              }
            }} 
          >
            Next
          </button>
        </div>
      </div>
    </div>
  )
}
