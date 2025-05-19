import { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import Navbar from './components/Navbar'
import Home from './components/Home';
import CursorDot from './components/CursorDot';
import About from './components/About'
import Portfolio from './components/Portfolio'
import Career from './components/Career'
import Contact from './components/Contact'
import RolePage from './components/RolePage'

export default function App() {
  const [drawerStatus, setDrawerStatus] = useState('initial')
  const [loadingPercentage, setLoadingPercentage] = useState(0);
  
  useEffect(() => {
      const intervalCount = randomInt(40, 60)    
      const intervalElement = setInterval(() => {
          setLoadingPercentage((prev) => prev + 1);
        }, intervalCount);  

      return () => clearInterval(intervalElement);
    }, []);

  function handleClickDrawer() {
    let newStatus; 
    if (drawerStatus === 'initial' || drawerStatus === 'closed') { newStatus = 'opened' } 
    if (drawerStatus === 'opened') { newStatus = 'closed' }
    setDrawerStatus(newStatus)
  }

  function closeDrawer() { if (drawerStatus === 'opened') { setDrawerStatus('closed') } }

  return ( 
    <BrowserRouter className="mx-auto">
      <ScrollToTop/>
      <Routes>
          <Route exact path="/" element={<Home loadingPercentage={loadingPercentage} drawerStatus={drawerStatus} handleClickDrawer={handleClickDrawer} closeDrawer={closeDrawer}/>} />
          <Route exact path="/about" element={<About drawerStatus={drawerStatus} handleClickDrawer={handleClickDrawer} closeDrawer={closeDrawer}/>} />
          <Route exact path="/portfolio" element={<Portfolio drawerStatus={drawerStatus} handleClickDrawer={handleClickDrawer} closeDrawer={closeDrawer}/>} />
          <Route exact path="/career" element={<Career closeDrawer={closeDrawer}/>} />
          <Route exact path="/contact" element={<Contact closeDrawer={closeDrawer}/>} />
          <Route exact path="/role/:id" element={<RolePage closeDrawer={closeDrawer}/>} />
      </Routes>
      <CursorDot/>
    </BrowserRouter>
  )
}

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}