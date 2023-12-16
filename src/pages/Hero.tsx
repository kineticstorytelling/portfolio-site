// import { Reveal } from '@/components/Reveal.tsx'
import {useEffect, useRef} from 'react';
import {titleReveal} from 'src//components/Reveal';
import '../styles/_hero.scss'


export const Hero = () => {
  return (
    const ref = useRef(null);
    const isInView = useInView(ref, {once:true});
    const mainControls = useAnimation();

    useEffect(()=>{
        if (isInView){
            mainControls.start("visible");
        }
    }, [isInView]);

    <>
    <section className='hero' id='home'>
      <titleReveal>
        <span className='hero__title hero__title--hero'>Hi, I'm</span>
      </titleReveal>
      <titleReveal>
        <h3 className='hero__title hero__title--name'>Luke Nam</h3>
      </titleReveal>
      <titleReveal>
        <h3 className='hero__subtitle hero__subtitle--hero'>and I like making websites</h3>
      </titleReveal>
      <Reveal>
        <h3 className='hero__subtitle hero__subtitle--secondary'>Especially Web Design and Full-stack Development</h3>
      </Reveal>
    </section>
    </>
  )
}

export default Hero