import React from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Home from '../Page/Home'
import Header from './Header'
import About from '../Page/About'
import Footer from './Footer'
import NotFound from './NotFound'
import Accommodation from '../Page/Accommodation'

function RouterKasa() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/accommodation/:id" element={<Accommodation />} />
        <Route path="/error404" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/error404" />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default RouterKasa
