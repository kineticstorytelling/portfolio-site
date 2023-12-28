// import { Reveal } from '@/components/Reveal.tsx'
import {useEffect, useRef} from 'react';
import { motion, useInView, useAnimation} from 'framer-motion';
import '../styles/_hero.scss'
import { gsap } from "gsap";



export const Hero = () => {

  const greeting = "Hi, I'm";
  const sentence = {
    hidden: { opacity: 1},
    visible: {
      opacity: 1,
      transition: {
        delay: 1,
        staggerChildren: 0.08,
      }, 
    },
  }
  const letter = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
    },
  }
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
     
        <motion.h3
        className='hero__title hero__title--hero'
        variants={sentence}
        initial="hidden"
        animate="visible"
        >
          {greeting.split("").map((char, index) => {
            return (
              <motion.span key={char + "-" + index} variants={letter}>
                {char}
              </motion.span>
            )
          })}
        </motion.h3>
     </div>
   <motion.div
                variants={{
                    hidden: {opacity: 0, y: 75},
                    visible: {opacity: 1, y: 0},
                }}
                initial= 'hidden'
                animate= {mainControls}
                transition={{duration:0.5, delay: 1.3}}
            >
        <h3 className='hero__title hero__title--name'>Luke Nam</h3>
      </motion.div>
   <motion.div
                variants={{
                    hidden: {opacity: 0, y: 75},
                    visible: {opacity: 1, y: 0},
                }}
                initial= 'hidden'
                animate= {mainControls}
                transition={{duration:0.5, delay: 2 }}
            >
    </motion.div>
        <h3 className='hero__subtitle hero__subtitle--hero'>and I like making websites</h3>
        <h3 className='hero__subtitle hero__subtitle--secondary'>Especially Web Design and Full-stack Development</h3>
    </section>

    </>
  )
}
export default Hero