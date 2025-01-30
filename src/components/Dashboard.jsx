import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import NewTicket from '../assets/dashboard/new-ticket.svg'
import AllTickets from '../assets/dashboard/all-tickets.svg'
import AllTicketsTheme from '../assets/dashboard/all-tickets-theme.svg'
import NewTickets from '../assets/dashboard/new-tickets.svg'
import NewTicketsTheme from '../assets/dashboard/new-tickets-theme.svg'
import OngoingTickets from '../assets/dashboard/ongoing-tickets.svg'
import OngoingTicketsTheme from '../assets/dashboard/ongoing-tickets-theme.svg'
import ResolvedTickets from '../assets/dashboard/resolved-tickets.svg'
import ResolvedTicketsTheme from '../assets/dashboard/resolved-tickets-theme.svg'
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
      setTickets(fetchedTickets);

    } catch (error) {
      console.error("Error fetching tickets", error)
    }
  }

  const chooseTickets = async () => {
    let filteredTic = []

    if (section === 'new') {
      filteredTic = tickets.filter((ticket) => ticket.status === 'New');
      // setFilteredTickets(newTickets);
    } else if (section === 'ongoing') {
      filteredTic = tickets.filter((ticket) => ticket.status === 'Ongoing');
      // setFilteredTickets(ongoingTickets);
    } else if (section === 'resolved') {
      filteredTic = tickets.filter((ticket) => ticket.status === 'Resolved');
      // setFilteredTickets(resolvedTickets);
    } else {
      filteredTic = tickets;
      // setFilteredTickets(tickets);
    }

    let returnedTickets = []
    let ticketsGroup = []

    filteredTic.forEach((ticket) => {
      ticketsGroup.push(ticket)

      if (ticketsGroup.length === 3) {
        returnedTickets.push(ticketsGroup)
        ticketsGroup = []
      }
    })

    if (ticketsGroup.length > 0) {
      returnedTickets.push(ticketsGroup)
    }

    setFilteredTickets(returnedTickets)
  }

  useEffect(() => {
    loadTickets();
  }, [])

  useEffect(() => {
    if (tickets.length > 0) {
      chooseTickets();
      setPage(1)
    }
  }, [tickets, section])

  useEffect(() => { 
    setDisplayedTickets(filteredTickets[page - 1])
  }, [page, filteredTickets])

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
          <div className="dashboard-option" onClick={() => setSection('all')}>
            <img src={section === "all" ? AllTicketsTheme : AllTickets} alt="" className="dashboard-option-img" />
            <span className={`dashboard-option-text ${section === "all" && 'theme-text'}`}>All Tickets</span>
          </div>
          <div className="dashboard-option theme-border" onClick={() => setSection('new')}>
            <img src={section === "new" ? NewTicketsTheme : NewTickets} alt="" className="dasboard-option-img" />
            <span className={`dashboard-option-text ${section === "new" && 'theme-text'}`}>New Tickets</span>
          </div>
          <div className="dashboard-option" onClick={() => setSection('ongoing')}>
            <img src={section === "ongoing" ? OngoingTicketsTheme : OngoingTickets} alt="" className="dasboard-option-img" />
            <span className={`dashboard-option-text ${section === "ongoing" && 'theme-text'}`}>Ongoing Tickets</span>
          </div>
          <div className="dashboard-option" onClick={() => setSection('resolved')}>
            <img src={section === "resolved" ? ResolvedTicketsTheme : ResolvedTickets} alt="" className="dasboard-option-img" />
            <span className={`dashboard-option-text ${section === "resolved" && 'theme-text'}`}>Resolved Tickets</span>
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
              if (page < filteredTickets.length) {
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
