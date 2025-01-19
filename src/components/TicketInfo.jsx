import React from 'react'

export default function
  () {
  return (
    <div className='ticketInfo-screen'>
      <h1 className="ticketInfo__title">Ticket Info</h1>

      <div className="ticketInfo-card">

        <div className="ticketInfo-heading">
          <div className="ticket-condition"></div>
          <h4 className="ticketInfo-id">Ticket# 1232212</h4>
        </div>

        <div className="ticketInfo-inputs">
          <div className="ticketInfo-info">
            <h5 className="ticketInfo-info__title">Main Category</h5>
            <div className="ticketInfo__input-container">
              <h6 className="ticketInfo-info__input">Software</h6>
            </div>
          </div>

          <div className="ticketInfo-info">
            <h5 className="ticketInfo-info__title">Affected</h5>
            <div className="ticketInfo__input-container">
              <h6 className="ticketInfo-info__input">Whole Classroom</h6>
            </div>
          </div>

          <div className="ticketInfo-info">
            <h5 className="ticketInfo-info__title">Do you need admin privileges to fix?</h5>
            <div className="ticketInfo__input-container">
              <h6 className="ticketInfo-info__input">Not Sure</h6>
            </div>
          </div>

          <div className="ticketInfo-info">
            <h5 className="ticketInfo-info__title">Room Number</h5>
            <div className="ticketInfo__input-container">
              <h6 className="ticketInfo-info__input">5E04</h6>
            </div>
          </div>

          <div className="ticketInfo-info">
            <h5 className="ticketInfo-info__title">Computer Station Numbers Affected</h5>
            <div className="ticketInfo__input-container">
              <h6 className="ticketInfo-info__input">N/A</h6>
            </div>
          </div>

          <div className="ticketInfo-info">
            <h5 className="ticketInfo-info__title">Date you first noticed the issue</h5>
            <div className="ticketInfo__input-container">
              <h6 className="ticketInfo-info__input">1/16/2025</h6>
            </div>
          </div>


        </div>

        <div className="ticketInfo__description-container">
          <h5 className="ticketInfo__description-title">Ticket Body</h5>
          <p className="ticketInfo__description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec purus feugiat, vestibulum lectus sit amet, aliquet turpis. Nullam at ligula nec felis ultricies ultricies. Integer auctor, turpis vel fauc</p>
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


    </div>
  )
}
