import { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ScrollToTop, RandomInt } from './components/FunctionCollection'
import CursorDot from './components/CursorDot';
import Home from './components/Home';
import About from './components/About'
import Portfolio from './components/Portfolio'
import Career from './components/Career'
import Contact from './components/Contact'
import RolePage from './components/RolePage'

export default function App() {
  const [loadingPercentage, setLoadingPercentage] = useState(0);

  useEffect(() => {
      const intervalCount = RandomInt(40, 60)
      const intervalElement = setInterval(() => {
          setLoadingPercentage((prev) => prev + 1);
        }, intervalCount);

      return () => clearInterval(intervalElement);
    }, []);

  useEffect(() => {
    const baseSize = 100; // 基准值 (1rem = 100px)
    const designWidth = 750; // 设计稿宽度
  
    function setRem() {
      let windowWidth = document.documentElement.clientWidth;
      if (windowWidth <= 750) {
        const screenRatio = windowWidth / designWidth;
        document.documentElement.style.fontSize = baseSize * screenRatio + 'px';
      } else {
        document.documentElement.style.fontSize = '16px';
      }
      console.log('onload setRem', baseSize, windowWidth, designWidth)
    }

    window.addEventListener('load', () => { requestAnimationFrame(setRem) })
    window.addEventListener('resize', () => { requestAnimationFrame(setRem) })

    return () => {
      window.removeEventListener('load', setRem);
      window.removeEventListener('resize', setRem);
    };
  }, []);

  return (
    <BrowserRouter className="mx-auto">
      <ScrollToTop/>
      <CursorDot/>
      <Routes>
          <Route exact path="/" element={<Home loadingPercentage={loadingPercentage}/>} />
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/portfolio" element={<Portfolio/>} />
          <Route exact path="/career" element={<Career/>} />
          <Route exact path="/contact" element={<Contact/>} />
          <Route exact path="/role/:id" element={<RolePage/>} />
          <Route path="*" element={<Home loadingPercentage={loadingPercentage}/>} />
      </Routes>
    </BrowserRouter>
  )
}