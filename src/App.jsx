import './App.css'
import { Route, Routes } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Sidebar } from './components/Sidebar'

import { Overview } from './components/Overview'
import { Tickets } from './components/Tickets'
import { Contacts } from './components/Contacts'
import { Ideas } from './components/Ideas'
import { AboutTickets } from './components/AboutTickets'
import { NewTickets } from './components/NewTickets'

function App() {

  return (
    <>
      <div className='flex overflow-hidden'>
        <Navbar />
        <Sidebar />
      </div>

      <Routes>
        <Route path='/' element={<Overview />} />
        <Route path='tickets' element={<Tickets />} />
        <Route path='aboutTickets' element={<AboutTickets />} />
        <Route path='newTickets' element={<NewTickets />} />
        <Route path='ideas/:id' element={<Ideas />} />
        <Route path='contacts' element={<Contacts />} />

      </Routes>
    </>
  )
}

export default App
