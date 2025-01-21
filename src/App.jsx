import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import Dashboard from './components/Dashboard'
import TicketScreen from './components/TicketScreen'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginModal from './components/modals/LoginModal'
import SignupModal from './components/modals/SignupModal'
import { AppContext } from './AppContext'
import TicketInfo from './components/TicketInfo'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'

function App() {

  const [user, setUser] = useState(null)
  const [showLoginModal, setShowLoginModal] = useState(false)
  const [showSignupModal, setShowSignupModal] = useState(false)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user)
        setShowLoginModal(false)
        setShowSignupModal(false)
      } else {
        setUser(null)
        setShowLoginModal(true)
      }
    })
  }, []) 

  return (
    <AppContext.Provider value={{ user, setUser, showLoginModal, setShowLoginModal, showSignupModal, setShowSignupModal }}>
      <Router>
        <div className='app'>
          <Sidebar />
          <div className="app-column">
            <Topbar />
            <Routes>
              <Route path='/' element={<Dashboard />} />
              <Route path='/new-ticket' element={<TicketScreen />} />
              <Route path='/:id' element={<TicketInfo />} />
            </Routes>
          </div>
          { showLoginModal && <LoginModal /> }
          { showSignupModal && <SignupModal /> }
        </div>
      </Router>
    </AppContext.Provider>
  )
}

export default App
