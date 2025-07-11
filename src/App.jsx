import { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ScrollToTop, RandomInt, useScreenRatio } from './components/FunctionCollection'
import CursorDot from './components/CursorDot';
import Home from './components/Home';
import About from './components/About'
import Portfolio from './components/Portfolio'
import Career from './components/Career'
import Contact from './components/Contact'
import RolePage from './components/RolePage'
import ImagePage from './components/ImagePage'

export default function App() {
  const [loadingPercentage, setLoadingPercentage] = useState(0);
  const {isMobileDevice, smallScreenRatioDecimal} = useScreenRatio()

  useEffect(() => {
      const intervalCount = RandomInt(10, 30)
      const intervalElement = setInterval(() => {
          setLoadingPercentage((prev) => prev + 1);
        }, intervalCount);

      return () => clearInterval(intervalElement);
    }, [])

  return (
    <BrowserRouter className="mx-auto">
      <ScrollToTop/>
      { !isMobileDevice && <CursorDot/>}
      <Routes>
          <Route exact path="/" element={<Home loadingPercentage={loadingPercentage} isMobileDevice={isMobileDevice} smallScreenRatioDecimal={smallScreenRatioDecimal}/>} />
          <Route exact path="/about" element={<About isMobileDevice={isMobileDevice} smallScreenRatioDecimal={smallScreenRatioDecimal}/>} />
          <Route exact path="/portfolio" element={<Portfolio isMobileDevice={isMobileDevice} smallScreenRatioDecimal={smallScreenRatioDecimal}/>} />
          <Route exact path="/career" element={<Career isMobileDevice={isMobileDevice} smallScreenRatioDecimal={smallScreenRatioDecimal}/>} />
          <Route exact path="/contact" element={<Contact isMobileDevice={isMobileDevice} smallScreenRatioDecimal={smallScreenRatioDecimal}/>} />
          <Route exact path="/role/:id" element={<RolePage isMobileDevice={isMobileDevice} smallScreenRatioDecimal={smallScreenRatioDecimal}/>} />
          <Route exact path="/portfolio/:id" element={<ImagePage isMobileDevice={isMobileDevice} smallScreenRatioDecimal={smallScreenRatioDecimal}/>} />
          <Route path="*" element={<Home loadingPercentage={loadingPercentage} isMobileDevice={isMobileDevice} smallScreenRatioDecimal={smallScreenRatioDecimal}/>} />
      </Routes>
    </BrowserRouter>
  )
}