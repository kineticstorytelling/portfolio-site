import './_app.scss';
import './styles/_typography.scss';
import Navbar from './components/Navbar.tsx'
import Social from './components/Social.tsx'
import Hero from './pages/Hero.tsx'
import Services from './pages/Services.jsx'
import Competencies from './pages/Competencies.tsx'


function App() {

  return (
    <>
      <body>
        <div className="App">
          <Navbar />
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
