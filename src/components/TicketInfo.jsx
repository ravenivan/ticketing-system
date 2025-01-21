import { collection, doc, getDoc, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { db } from '../firebase'

export default function () {

  const { id } = useParams()
  const [ticket, setTicket] = useState(null)

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

  useEffect(() => {
    fetchTicket(id)
  }, [])

  return (
    <div className='ticketInfo-screen'>
      <h1 className="ticketInfo__title">Ticket Info</h1>

      {
        ticket ? (
          <div className="ticketInfo-card">

            <div className="ticketInfo-heading">
              <div className="ticket-condition"></div>
              <h4 className="ticketInfo-id">Ticket# {id}</h4>
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
                  <input className="ticketInfo-replyCard__info__input" />
                </div>
                <div className="ticketInfo-replyCard__info-container">
                  <h4 className="ticketInfo-replyCard__info__title">Status</h4>
                  <input className="ticketInfo-replyCard__info__input" />
                </div>
              </div>

              <div className="ticketInfo-replyCard__message-container">
                <h4 className="ticketInfo-replyCard__message__title">Message</h4>
                <textarea className="ticketInfo-replyCard__message__input" />
              </div>

              <button className="ticketInfo-submit" onClick={() => createTicket()}>
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
