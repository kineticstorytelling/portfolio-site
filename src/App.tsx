import './App.css'
import Hero from './pages/Hero.tsx'
import Services from './pages/Services.jsx'
import Social from './components/Social.tsx'
import Competencies from './pages/Competencies.tsx'


function App() {

  return (
    <>
      <body>
        <div className="App">
          <Social />
          <div className="content">
          <Hero />
          <Services />
          <Competencies />
          </div>
        </div>
      </body>

    </>
  )
}

export default App
