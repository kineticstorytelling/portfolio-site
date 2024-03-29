import '../styles/_portfolio.scss';
import Reveal from '../components/Reveal';

const Portfolio = () => {

  return (
    // My Work
    <>
      <section className="portfolio">
        <div className="designs">
            <div className="portfolio portfolio__body" id="portfolio">
                <div className="designs">
        
        <Reveal><h2 className='portfolio__body--title'>Projects</h2></Reveal>
                        
                        <div className="portfolio__body project__content1">
                            <div>
                                <p className="portfolio__body project__content1--overLine">Featured Project</p>
                                <h3>
                                    <a href="https://jehlyo.netlify.app/">Jehlyo</a>
                                </h3>
                                <div className="portfolio__body project__content1--description">
                                    <p>A Web application that helps users compare store prices for ingredients. This is a full stack application that I designed and built. I am in the process of converting it into a mobile application using React Native and Expo. I am also currently blogging about the build process. See my Medium and Linkedin for progress.</p>
                                </div>
                                <ul className="portfolio__body project__content--techList">
                                    <li>Figma</li>
                                    <li>React</li>
                                    <li>TailwindCSS</li>
                                    <li>Python</li>
                                    <li>Flask</li>
                                    <li>PostgreSQL</li>
                                </ul>
                            </div>
                        </div>

                        <div className="portfolio__body project__content1--image">
                            <a href="https://jehlyo.netlify.app/">
                                <img src="/Jehlyo Design Page.png" alt="Jehlyo Design Image" />
                            </a>
                        </div>
                    
                    
                        <div className="portfolio__body project__content2">
                            <div>
                                <p className="portfolio__body project__content2--overLine">Featured Project</p>
                                <h3>
                                    <a href="https://sparkling-mooncake-6a5cd8.netlify.app/#/">Soul Soju</a>
                                </h3>
                                <div className="portfolio__body project__content2--description">
                                    <p>A Web Index of the different Soju brands for Enthusiasts. I built a backend API to handle the data for the different varieties of Soju flavors and styles. </p>
                                </div>
                                <ul className="portfolio__body project__content--techList">
                                    <li>Adobe XD</li>
                                    <li>React</li>
                                    <li>TailwindCSS</li>
                                    <li>Python</li>
                                    <li>Flask</li>
                                    <li>PostgreSQL</li>
                                </ul>
                            </div>
                        </div>
                        
                        <div className="portfolio_body project__content2--image">
                            <a href="https://sparkling-mooncake-6a5cd8.netlify.app/#/">
                                <img src="/Soul Soju Design.png" alt="Soul Soju Web Page Designs" />
                            </a>
                        </div>
                
                        <div className="portfolio__body project__content3">
                            <div>
                                <p className="portfolio__body project__content3--overLine">Featured Project</p>
                                <h3>
                                    <a href="https://Emergenthealing.com">Emergent Healing</a>
                                </h3>
                                <div className="portfolio__body project__content3--description">
                                    <p>A full stack website for an acupuncturist. I first designed the website logo and theme in Adobe Photoshop, Procreate and Figma before building the website using PHP and Wordpress.</p>
                                </div>
                                <ul className="portfolio__body project__content--techList">
                                    <li>Figma</li>
                                    <li>Adobe Photoshop</li>
                                    <li>Wordpress</li>
                                    <li>PHP</li>
                                    <li>CSS</li>
                                    <li>Javascript</li>
                                </ul>
                            </div>

                        </div>
                        
                        <div className="portfolio_body project__content3--image">
                            <a href="https://emergenthealing.com">
                                <img src="/Emergent Healing Design.png" alt="Emergent Healing Design" />
                            </a>
                        </div>
                </div>
            </div>
        </div>
    </section>
  </>

  )
}

export default Portfolio