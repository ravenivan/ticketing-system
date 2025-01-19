import React, { useState } from 'react'
import SignupIcon from '../../assets/signup/signup-icon.svg'
import XButton from '../../assets/login/x-button.svg'

export default function SignupModal() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const authCreateAccountWithEmail = () => {
    console.log("Sign up with email and password")
    const email = emailInputEl.value
    const password = passwordInputEl.value
    console.log(email)
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user)
        })
        .catch((error) => {
            console.error(error)
        });
}

  return (
    <div className='signupModal-screen'>
      <div className="signupModal">
        <div className="signupModal__icon-wrapper">
          <img src={SignupIcon} alt="" className="signupModal__icon" />
        </div>

        <div className="signupModal-text">
          <h1 className="signupModal__title">Sign up</h1>
          <h4 className="signupModal__subtitle">Create your free account</h4>
        </div>

        <div className="signupModal__form">
          {/* <div className="signupModal__input">
            <h4 className="signupModal__input__title">Name*</h4>
            <input type="text" className="signupModal__input__field" placeholder='Name' 
              onChange={(e) => setName(e.target.value)}
            />
          </div> */}
          <div className="signupModal__input">
            <h4 className="signupModal__input__title">Email*</h4>
            <input type="email" className="signupModal__input__field" placeholder='Email' 
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="signupModal__input">
            <h4 className="signupModal__input__title">Password*</h4>
            <input type="password" className="signupModal__input__field" placeholder='Create a password' 
              onChange={(e) => setPassword(e.target.value)}
            />
            <h5 className="signupModal__input__password-req">Must be at least 8 characters</h5>
          </div>
        </div>

        <button className="signupModal__button-confirm">Confirm</button>
        <button className="signupModal__button-cancel">Cancel</button>

        <div className="signupModal__x-button-wrapper">
          <img src={XButton} alt="" className="signupModal__x-button" />
        </div>
      </div>
    </div>
  )
}
