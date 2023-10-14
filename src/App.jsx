import { useState } from 'react'
import './App.css'
import Hero from './pages/Hero.jsx'
import Services from './pages/Services'
import Social from './components/Social'


function App() {

  return (
    <>
      <body>
        <div className="App">
          <Social />
          <div className="content">
          <Hero />
          <Services />
          </div>
        </div>
      </body>

    </>
  )
}

export default App
