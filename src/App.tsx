import './_app.scss';
import './styles/_typography.scss';
import Navbar from './layout/Navbar.tsx'
import Social from './components/Social.tsx'
// import Footer from './layout/Footer.tsx';
import Hero from './pages/Hero.tsx'
import Services from './pages/Services.jsx'
import Competencies from './pages/Competencies.tsx';
import Contacts from './pages/Contacts.tsx';
import ScrollButton from './components/ScrollToTop.tsx';
import Portfolio from './pages/Portfolio.tsx';
import Footers from './layout/Footers.tsx';
// import Test from './pages/Test.tsx'

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
          {/* <Test /> */}
          <Competencies />
          <Portfolio />
          <Contacts />
          </div>
          <ScrollButton />
          <Footers />
        </div>
      </body>

    </>
  )
}

export default App
