import React, { useContext, useState } from 'react'
import SignupIcon from '../../assets/signup/signup-icon.svg'
import XButton from '../../assets/login/x-button.svg'
import { AppContext } from '../../AppContext'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import toast, { Toaster } from 'react-hot-toast'
import { auth } from '../../firebase'

export default function SignupModal() {

  const { setUser, setShowSignupModal, setShowLoginModal } = useContext(AppContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const createUser = () => {
    console.log("Sign up with email and password")
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user)
        toast.success('Account created successfully')
        setUser(user)
      })
      .catch((error) => {
        console.error(error)
        toast.error('Error creating account')
      });
  }

  return (
    <div className='signupModal-screen'>
      <Toaster />
      <div className="signupModal">
        <div className="signupModal__icon-wrapper">
          <img src={SignupIcon} alt="" className="signupModal__icon" />
        </div>

        <div className="signupModal-text">
          <h1 className="signupModal__title">Sign up</h1>
          <h4 className="signupModal__subtitle">Create your free account</h4>
        </div>

        <div className="signupModal__form">
          <div className="signupModal__input">
            <h4 className="signupModal__input__title">Email<span className='signupModal__input__title-star'>*</span></h4>
            <input type="email" className="signupModal__input__field" placeholder='Email'
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="signupModal__input">
            <h4 className="signupModal__input__title">Password<span className='signupModal__input__title-star'>*</span></h4>
            <input type="password" className="signupModal__input__field" placeholder='Create a password'
              onChange={(e) => setPassword(e.target.value)}
            />
            <h5 className="signupModal__input__password-req">Must be at least 8 characters</h5>
          </div>
        </div>

        <h5 className="signupModal__login">
          Already have an account? <span className="signupModal__login-button" onClick={() => {
            setShowSignupModal(false)
            setShowLoginModal(true)
          }}>Log in</span>
        </h5>

        <button className="signupModal__button-confirm"
          onClick={createUser}
        >
          Confirm
        </button>
        <button className="signupModal__button-cancel">Cancel</button>

        <div className="signupModal__x-button-wrapper">
          <img src={XButton} alt="" className="signupModal__x-button" />
        </div>
      </div>
    </div>
  )
}
