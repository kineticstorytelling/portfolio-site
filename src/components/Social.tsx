import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faLinkedin, faTwitter, faInstagram, faGithub, faMedium, faHashnode } from '@fortawesome/free-brands-svg-icons'
import '../styles/_social.scss'

const Social = () => {
  return (
    <div className="social_sidebar">
        <div className="button">
            <div className="icon">
                <a href="https://www.facebook.com/luke.nam.1"><FontAwesomeIcon icon={faFacebook} /></a>
            </div>
            <span>Facebook</span>
        </div>
        
        <div className="button">
            <div className="icon">
                <a href="https://www.linkedin.com/in/~luke/"><FontAwesomeIcon icon={faLinkedin} /></a>
            </div> 
            <span>Linkedin</span>
        </div> 
        
        <div className="button">
            <div className="icon">
                <a href="https://twitter.com/Luke__nam"><FontAwesomeIcon icon={faTwitter} /></a>
            </div>  
            <span>Twitter</span>
        </div>
        
        <div className="button">
            <div className="icon">
                <a href="https://www.instagram.com/lukasnam/"><FontAwesomeIcon icon={faInstagram} /></a>
            </div>  
            <span>Instagram</span>
        </div>

        <div className="button">
            <div className="icon">
                <a href="https://github.com/kineticstorytelling"><FontAwesomeIcon icon={faGithub} /></a>
            </div>  
            <span>Github</span>
        </div>

        <div className="button">
            <div className="icon">
                <a href="https://hashnode.com/@kineticstorytelling"><FontAwesomeIcon icon={faHashnode} /></a>
            </div>  
            <span>Hashnode</span>
        </div>

        <div className="button">
            <div className="icon">
                <a href="https://medium.com/@kineticstorytelling"><FontAwesomeIcon icon={faMedium} /></a>
            </div>  
            <span>Medium</span>
        </div>


    </div>
    
  )
}

export default Social