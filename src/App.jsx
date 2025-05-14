import { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home';
import CursorDot from './components/CursorDot';
import About from './components/About'
import Portfolio from './components/Portfolio'
import Career from './components/Career'
import Contact from './components/Contact'
import RolePage from './components/RolePage'

export default function App() {
  const [displayDrawer, setDisplayDrawer] = useState(false)

  function handleClickDrawer() {
    setDisplayDrawer(!displayDrawer)
  }

  return (
    <BrowserRouter className="mx-auto">
      <Navbar showDrawer={displayDrawer} handleClickDrawer={handleClickDrawer} />
      <Routes>
          <Route path="/" element={<Home showDrawer={displayDrawer}/>} />
          <Route path="/career" element={<Career/>} />
          <Route path="/role/:id" element={<RolePage/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/portfolio" element={<Portfolio/>} />
      </Routes>
      <CursorDot/>
      <Footer/>
    </BrowserRouter>
  )
}