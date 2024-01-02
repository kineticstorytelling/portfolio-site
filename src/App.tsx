import './_app.scss';
import './styles/_typography.scss';
import Navbar from './layout/Navbar.tsx'
import Social from './components/Social.tsx'
import Hero from './pages/Hero.tsx'
import Services from './pages/Services.jsx'
import Competencies from './pages/Competencies.tsx';
import Contact from './pages/Contact.tsx';
import {motion} from 'framer-motion';
// import Test from './pages/Test.tsx'

function App() {

  return (
    <>
      <body>
        <motion.div className="App">
          <Navbar />
          <Social />
          <div className="content">
          <Hero />
          <Services />
          {/* <Test /> */}
          <Competencies />
          <Contact />
          </div>
        </motion.div>
      </body>

    </>
  )
}

export default App
