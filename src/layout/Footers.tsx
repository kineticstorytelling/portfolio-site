import '../styles/_footer.scss';
import '../styles/_buttons.scss'; 
import '../styles/_social.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faTwitter, faInstagram, faGithub, faMedium, faDribbble, faHashnode } from "@fortawesome/free-brands-svg-icons";

const Footers = () => {
    return (
        <footer>
                <a href="mailto:kineticstorytelling@gmail.com" className="footer-link">kineticstorytelling@gmail.com</a>
      <ul className="social-list">
          <li className="social-list__item"><a href="https://github.com/kineticstorytelling" className="social-list__link"> <FontAwesomeIcon icon={faGithub} /></a></li>
          <li className="social-list__item"><a href="https://www.instagram.com/lukasnam/" className="social-list__link"> <FontAwesomeIcon icon={faInstagram} /></a></li>
          <li className="social-list__item"><a href="https://dribbble.com/kineticstorytelling" className="social-list__link"> <FontAwesomeIcon icon={faDribbble} /></a></li>
          <li className="social-list__item"><a href="https://www.linkedin.com/in/~luke/" className="social-list__link"> <FontAwesomeIcon icon={faLinkedin} /></a></li>
          <li className="social-list__item"><a href="https://medium.com/@kineticstorytelling" className="social-list__link"> <FontAwesomeIcon icon={faMedium} /></a></li>
          <li className="social-list__item"><a href="https://hashnode.com/@kineticstorytelling" className="social-list__link"> <FontAwesomeIcon icon={faHashnode} /></a></li>
          <li className="social-list__item"><a href="https://twitter.com/Luke__nam" className="social-list__link"> <FontAwesomeIcon icon={faTwitter} /></a></li>
      </ul>
        </footer>
    )
}

export default Footers
