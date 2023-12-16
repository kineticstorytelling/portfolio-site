// import { Reveal } from '@/components/Reveal.tsx'
import {useEffect, useRef} from 'react';
import { motion, useInView, useAnimation} from 'framer-motion';
import '../styles/_hero.scss'



export const Hero = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, {once:true});
   const mainControls = useAnimation();
    useEffect(()=>{
        if (isInView){
            mainControls.start("visible");
        }
    }, [isInView]);
return(
    <>
    <section className='hero' id='home'>
     <div ref={ref} style={{overflow:'hidden'}}>
        <motion.div
                variants={{
                    hidden: {opacity: 0, y: 75},
                    visible: {opacity: 1, y: 0},
                }}
                initial= 'hidden'
                animate= {mainControls}
                transition={{duration:0.5, delay: 0.25}}
            >
        <span className='hero__title hero__title--hero'>Hi, I'm</span>
      </motion.div>
     </div>
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