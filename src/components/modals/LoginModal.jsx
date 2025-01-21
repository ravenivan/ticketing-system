import React, { useContext, useState } from 'react'
import XButton from '../../assets/login/x-button.svg'
import LoginIcon from '../../assets/login/login-icon.svg'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { AppContext } from '../../AppContext'
import toast, { Toaster } from 'react-hot-toast'
import { auth } from '../../firebase'

export default function () {

  const { setUser, setShowLoginModal, setShowSignupModal } = useContext(AppContext)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const signIn = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user)
        toast.success('Logged in successfully')
        // setTimeout(() => {
        setUser(user)
        // }, 2000)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage)
        toast.error('Error logging in')
      });
  }

  return (
    <div className='loginModal-screen'>
      <Toaster />
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
            <input type="email" className="loginModal__input__field" placeholder='Email' 
              onChange={(e) => setEmail(e.target.value)} 
            />
          </div>
          <div className="loginModal__input">
            <h4 className="loginModal__input__title">Password</h4>
            <input type="password" className="loginModal__input__field" placeholder='Password' 
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          

        </form>

        <h5 className="loginModal__signUp">
          Don't have an account? <span className="loginModal__signUp-button" onClick={() => {
            setShowLoginModal(false)
            setShowSignupModal(true)
          }}>Sign up</span>
        </h5>

        <button className="loginModal__button-confirm"
          onClick={signIn}
        >
          Confirm
        </button>
        <button className="loginModal__button-cancel">Cancel</button>


        <div className="loginModal__x-button-wrapper">
          <img src={XButton} alt="" className="loginModal__x-button" />
        </div>
      </div>
    </div>
  )
}
