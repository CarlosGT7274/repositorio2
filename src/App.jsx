
import { useEffect } from 'react'
import './index.css'

import Home from './pages/home.jsx'
import Aos from 'aos'
import "aos/dist/aos.css"

function App() {
  useEffect(() => {
    Aos.init()
    Aos.refresh()
  }, [])

  return (
    <>
      <Home />
    </>
  )
}

export default App


