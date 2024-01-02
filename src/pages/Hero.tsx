// import { Reveal } from '@/components/Reveal.tsx'
import {useEffect, useRef} from 'react';
import { motion, useInView, useTransform, useScroll, useAnimation} from 'framer-motion';
import '../styles/_hero.scss'


export const Hero = () => {
  
  const ref = useRef(null);
  // this is for the parallax scroll
  // const { scrollYProgress } = useScroll({
  //   target: ref,
  //   offset: ["start start", "end start"],
  // });
  // const backgroundY = useTransform(scrollYProgress, [0,1], ["0%", "100%"]);
  // const textY = useTransform(scrollYProgress, [0,1], ["0%", "200%"]);

  // up to here is the parallax scroll

  // const scaleRight = useTransform(scrollY, [0, 500], [2, 1]);


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
  const isInView = useInView(ref, {once:true});
  const mainControls = useAnimation();
    useEffect(()=>{
        if (isInView){
            mainControls.start("visible");
        }
    }, [isInView]);

  // const sideMove = () => {

  // }

return(
    <>
    <motion.section className='hero' id='home' animate={{ x:100}} initial={{ x:0}} transition={{when: "beforeChildren", duration: 1}}>
    {/* <motion.div 
      className='hero'
    > */}
     <div ref={ref} style={{overflow:'hidden'}}>
     
        <motion.h3
        className='hero__title hero__title--hero'
        variants={sentence}
        initial="hidden"
        animate="visible"
        transition={{delay: 1}}

        >
          {greeting.split("").map((char, index) => {
            return (
              <motion.span key={char + "-" + index} variants={letter}>
                {char}
              </motion.span>
            )
          })}
        </motion.h3>
        {/* <AnimatedText text="Hi" /> */}
     </div>

   <motion.div
                variants={{
                    hidden: {opacity: 0, y: 75},
                    visible: {opacity: 1, y: 0},
                }}
                initial= 'hidden'
                animate= {mainControls}
                transition={{duration:0.5, delay: 1.5}}
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
    {/* </motion.div> */}
    </motion.section>

    </>
  )
}
  const defaultAnimations = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
    },
  }
  type AnimatedTextProps ={
    text: string;
    el?: keyof JSX.IntrinsicElements;
    className?: string;
  }
  export const AnimatedText = ({text,}: AnimatedTextProps) =>{
    return (
      // <Wrapper className={className}>
      <>
        {/* <span>{text}</span> */}
        <motion.span initial="hidden" animate="visible" aria-hidden>
          {text.split("").map((char) => (
            <motion.span variants={defaultAnimations}>{char}</motion.span>
          ))}
        </motion.span>
</>
      // </Wrapper> 
    )
          
  }
export default Hero