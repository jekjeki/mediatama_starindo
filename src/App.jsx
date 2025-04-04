import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Services from './pages/Services'
import Teams from './pages/Teams'
import Contact from './pages/Contact'
import Work from './pages/Work'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/services' element={<Services />} />
        <Route path='/teams' element={<Teams />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/work' element={<Work />} />
      </Routes>
    </Router>
  )
}

export default App
