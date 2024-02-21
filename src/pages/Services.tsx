import '../styles/_services.scss'
import Reveal from '../components/Reveal'

const Services = () => {
  
  return (
    <section className="my-services" id="services">
      
     <Reveal><h2 className="services__title">What I do</h2></Reveal>
      <div className="services__body">
        <div className="services__body--content">
          <h3>Design</h3>
          <p>Web Design that is pragmatic but also aesthetically pleasing is my goal. Crafting creative solutions that improve and enhance the designscape is extremely important to me. I've worked in Story Design and Filmmaking.</p>
        </div>
        <div className="services__body--content">
          <h3>Develop</h3>
          <p>I am a Front-end Developer who is passionate about creating beautiful original websites especially in regards to cultural fusion.</p>
        </div>
        <div className="services__body--content">
          <h3>Document</h3>
          <p>Technical Writing, UX Writing, Copywriting are all forms that I am comfortable working with. Writing is my first love</p>
        </div>
      </div>
    </section>
  )
}

export default Services