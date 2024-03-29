import '../styles/_navbar.scss'
import '../styles/_logo.scss'
import '../styles/_buttons.scss'

const Navbar = () => {
  return (
    <>
        <header>
            <button className="logo__btn">
                <img src="/mylogo.png" alt="my logo" className="logo" />
            </button>
            <h3 className="touch__logo">Click the Logo!</h3>

            <div className="nav__list">
                <ul className="nav__list">
                    <li className="nav__item">
                        <a href="#home">Home</a>
                    </li>
                    <li className="nav__item">
                        <a href="#services">Services</a>
                    </li>
                    <li className="nav__item">
                        <a href="#competencies">Competencies</a>
                    </li>
                    <li className="nav__item">
                        <a href="#portfolio">Portfolio</a>
                    </li>
                    <li className="nav__item">
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
        </header>
    </>
  )
}

export default Navbar