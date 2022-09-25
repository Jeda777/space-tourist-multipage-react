import React from 'react'
import { Route, Routes } from 'react-router-dom'

import { Navbar } from './components/index'
import { Crew, Destination, Home, Technology } from './pages/index'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/destination' element={<Destination/>} />
        <Route path='/crew' element={<Crew/>} />
        <Route path='/technology' element={<Technology/>} />
      </Routes>
    </div>
  )
}

export default App