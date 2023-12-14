// import { Reveal } from '@/components/Reveal.tsx'
import Reveal from '../components/Reveal';
import '../styles/_hero.scss'


export const Hero = () => {
  return (
    <>
    <section className='hero' id='home'>
      <Reveal>
        <span className='hero__title hero__title--hero'>Hi, I'm</span>
      </Reveal>
      <Reveal>
        <h3 className='hero__title hero__title--name'>Luke Nam</h3>
      </Reveal>
      <Reveal>
        <h3 className='hero__subtitle hero__subtitle--hero'>and I like making websites</h3>
      </Reveal>
      <Reveal>
        <h3 className='hero__subtitle hero__subtitle--secondary'>Especially Web Design and Full-stack Development</h3>
      </Reveal>
    </section>
    </>
  )
}

export default Hero