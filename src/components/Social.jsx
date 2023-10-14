import React from 'react'

const Social = () => {
  return (
    <div className="social_sidebar">
        <div className="button">
            <div className="icon">
                <a href="https://www.facebook.com/luke.nam.1"></a>
            </div>
            <span>Facebook</span>
        </div>
        
        <div className="button">
            <div className="icon">
                <a href="https://www.linkedin.com/in/luke-nam-ab520369/"><FontAwesomeIcon icon={faLinkedin} /></a>
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


    </div>
    
  )
}

export default Social