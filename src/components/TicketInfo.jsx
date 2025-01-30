import { collection, doc, getDoc, getDocs, updateDoc } from 'firebase/firestore'
import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { db } from '../firebase'
import toast, { Toaster } from 'react-hot-toast'
import { AppContext } from '../AppContext'

export default function () {

  const { user } = useContext(AppContext)

  const { id } = useParams()
  const [ticket, setTicket] = useState(null)
  const [status, setStatus] = useState('')
  const [bodyMessage, setBodyMessage] = useState('')


  const fetchTicket = async (ticketId) => {
    try {
      const docRef = doc(db, "tickets", ticketId)
      const docSnap = await getDoc(docRef);
      setTicket(docSnap.data())
      // return { id: docRef.id, ...docRef.data() }

    } catch (error) {
      console.error("Error fetching ticket", error)
      throw error;
    }
  }

  const updateTicket = async (status) => {
    try {
      const docRef = doc(db, "tickets", id)
      // const newDoc = {...ticket, status: status}
      // await updateDoc(docRef, newDoc)
      await updateDoc(docRef, {status: status})
      toast.success("Ticket updated successfully")
    } catch (error) {
      toast.error("Error updating ticket", error)
    }
  }

  const handleEmail = () => {
    const recipient = ticket.email
    const subject = `Message from ${user.email}`
    const body = bodyMessage

    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
  }

  useEffect(() => {
    if (ticket) {
      setStatus(ticket.status)
    }
  }, [ticket])

  useEffect(() => {
    fetchTicket(id)
  }, [])

  return (
    <div className='ticketInfo-screen'>
      <Toaster />
      <h1 className="ticketInfo__title">Ticket Info</h1>

      {
        ticket ? (
          <div className="ticketInfo-card">

            <div className="ticketInfo-heading">
              {
                status === 'New' ? (
                  <div className="ticket-condition-new"></div>
                ) : status === 'Ongoing' ? (
                  <div className="ticket-condition-ongoing"></div>
                ) : status === 'Resolved' ? (
                  <div className="ticket-condition-resolved"></div>
                ) : null
              }
              <h4 className="ticketInfo-id">Ticket# {id}</h4>

              <select 
                value={status} className="ticketInfo__status"
                onChange={(e) => {
                  setStatus(e.target.value)
                  updateTicket(e.target.value)
                }}  
              >
                <option value="New">New Ticket</option>
                <option value="Ongoing">Ongoing Ticket</option>
                <option value="Resolved">Resolved Ticket</option>
              </select>
            </div>

            <div className="ticketInfo-inputs">
              <div className="ticketInfo-info">
                <h5 className="ticketInfo-info__title">Main Category</h5>
                <div className="ticketInfo__input-container">
                  <h6 className="ticketInfo-info__input">{ticket.mainCategory}</h6>
                </div>
              </div>

              <div className="ticketInfo-info">
                <h5 className="ticketInfo-info__title">Affected</h5>
                <div className="ticketInfo__input-container">
                  <h6 className="ticketInfo-info__input">{ticket.affected}</h6>
                </div>
              </div>

              <div className="ticketInfo-info">
                <h5 className="ticketInfo-info__title">Do you need admin privileges to fix?</h5>
                <div className="ticketInfo__input-container">
                  <h6 className="ticketInfo-info__input">{ticket.privilege}</h6>
                </div>
              </div>

              <div className="ticketInfo-info">
                <h5 className="ticketInfo-info__title">Room Number</h5>
                <div className="ticketInfo__input-container">
                  <h6 className="ticketInfo-info__input">{ticket.roomNumber}</h6>
                </div>
              </div>

              <div className="ticketInfo-info">
                <h5 className="ticketInfo-info__title">Computer Station Numbers Affected</h5>
                <div className="ticketInfo__input-container">
                  <h6 className="ticketInfo-info__input">{ticket.numbersAffected}</h6>
                </div>
              </div>

              <div className="ticketInfo-info">
                <h5 className="ticketInfo-info__title">Date you first noticed the issue</h5>
                <div className="ticketInfo__input-container">
                  <h6 className="ticketInfo-info__input">{ticket.dateNoticed}</h6>
                </div>
              </div>


            </div>

            <div className="ticketInfo__description-container">
              <h5 className="ticketInfo__description-title">Ticket Body</h5>
              <p className="ticketInfo__description">{ticket.description}</p>
        
            </div>

            <div className="ticketInfo-replyCard">
              <h2 className="ticketInfo-replyCard__title">Reply to Ticket</h2>
              <div className="ticketInfo-replyCard__infos">
                <div className="ticketInfo-replyCard__info-container">
                  <h4 className="ticketInfo-replyCard__info__title">Customer Email</h4>
                  <input 
                    className="ticketInfo-replyCard__info__input" 
                    defaultValue={ticket.email}  
                  />
                </div>
              </div>

              <div className="ticketInfo-replyCard__message-container">
                <h4 className="ticketInfo-replyCard__message__title">Message</h4>
                <textarea 
                  className="ticketInfo-replyCard__message__input" 
                  onChange={(e) => setBodyMessage(e.target.value)}
                />
              </div>

              <button className="ticketInfo-submit" onClick={() => handleEmail()}>
                Submit Reply
              </button>
            </div>
          </div>
        ) : (
          <div className="ticketInfo__empty">
            No ticket available
          </div>
        )
      }


    </div>
  )
}
