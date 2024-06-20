//import { useState } from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Cars from './pages/Cars'
import LandingPage from './pages/LandingPage'

function App() {
  
  return (
   <Router>
    <Routes>
    <Route path='/' element={<LandingPage/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Dashboard' element={<Dashboard/>}/>
      <Route path='/Cars' element={<Cars/>}/>
    </Routes>
   </Router>
  )
}

export default App
