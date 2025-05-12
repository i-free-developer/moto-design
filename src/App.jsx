import { useState } from 'react'
import './App.css'

import About from './components/About'
import Career from './components/Career'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Landing from './components/Landing'
import Loading from './components/Loading'
import Portfolio from './components/Portfolio'
import RolePage from './components/RolePage'
import Navbar from './components/Navbar'
import CursorDot from './components/CursorDot';

function App() {
  const [loadingPercentage, setLoadingPercentage] = useState(90)
  const isLoading = loadingPercentage < 100
  const [displayDrawer, setDisplayDrawer] = useState(false)

  function handleClickDrawer() {
    setDisplayDrawer(!displayDrawer)
  }
  console.log('isLoading', isLoading)

  return (
    <main className="mx-auto">
      {isLoading ?
        <Loading /> :
        (<>
          <Navbar showDrawer={displayDrawer} handleClickDrawer={handleClickDrawer} />
          <Landing showDrawer={displayDrawer}/>
          <Career/>
          <RolePage/>
          <About/>
          <Portfolio/>
          <Contact/>
          <Footer/>
          <CursorDot/>
        </>
        )
      }
    </main>
  )
}

export default App
