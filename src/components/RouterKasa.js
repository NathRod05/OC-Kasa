import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Footer from './components/Footer'

function RouterKasa() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/footer" element={<Footer />} />
      </Routes>
    </Router>
  )
}

export default RouterKasa
