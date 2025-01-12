import React from 'react'
import XButton from '../../assets/login/x-button.svg'
import LoginIcon from '../../assets/login/login-icon.svg'

export default function () {
  return (
    <div className='loginModal-screen'>
      <div className="loginModal">
        <div className="loginModal__icon-wrapper">
          <img src={LoginIcon} alt="" className="loginModal__icon" />
        </div>
        <div className="loginModal-text">
          <h1 className="loginModal__title">Log in to your account</h1>
          <h3 className="loginModal__subtitle">Welcome back! Please enter your details.</h3>
        </div>
        <form className="loginModal__form">
          <div className="loginModal__input">
            <h4 className="loginModal__input__title">Email</h4>
            <input type="email" className="loginModal__input__field" placeholder='Email' />
          </div>
          <div className="loginModal__input">
            <h4 className="loginModal__input__title">Password</h4>
            <input type="password" className="loginModal__input__field" placeholder='Password' />
          </div>
          <button className="loginModal__button-confirm">Confirm</button>
          <button className="loginModal__button-cancel">Cancel</button>
        </form>

        <div className="loginModal__x-button-wrapper">
          <img src={XButton} alt="" className="loginModal__x-button" />
        </div>
      </div>
    </div>
  )
}
