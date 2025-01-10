import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Sidebar from './components/Sidebar'
import Topbar from './components/Topbar'
import Dashboard from './components/Dashboard'
import TicketScreen from './components/TicketScreen'

function App() {


  return (
    <div className='app'>
      <Sidebar />
      <div className="app-column">
        <Topbar />
        <TicketScreen />
      </div>
    </div>
  )
}

export default App
