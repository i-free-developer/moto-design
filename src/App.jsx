import { useState } from 'react'
import './App.css'

import About from './components/About'
import Career from './components/Career'
import Contact from './components/Contact'
import Landing from './components/Landing'
import Loading from './components/Loading'
import Portfolio from './components/Portfolio'
import Navbar from './components/Navbar'

function App() {
  const [loadingPercentage, setLoadingPercentage] = useState(100)
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
          <About/>
          <Portfolio/>
        </>
        )
      }
    </main>
  )
}

export default App
