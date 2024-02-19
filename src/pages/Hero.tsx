import Reveal from '../components/Reveal'
import {useEffect, useRef} from 'react';
import { motion, useInView, useTransform, useScroll, useAnimation} from 'framer-motion';
import '../styles/_hero.scss'
// import gsap from 'gsap';
// import {useGSAP} from '@gsap/react';
import { Canvas } from 'react-three-fiber';
import Scene from '../components/Scene';
// import TitleAnimation from '../components/TitleAnimation';



export const Hero = () => {


// wait until DOM is ready
// document.addEventListener("DOMContentLoaded", function(event) {

//   function ground() {

//     var tl = new TimelineMax({
//       repeat: -1
//     });

//     tl.to("#ground", 20, {
//         backgroundPosition: "1301px 0px",
//         force3D:true,
//         rotation:0.01,
//         z:0.01,
//         autoRound:false,
//         ease: Linear.easeNone
//       });

//     return tl;
//   }

  // function clouds() {

  //   var tl = new TimelineMax({
  //     repeat: -1
  //   });

  //   tl.to("#clouds", 52, {
  //     backgroundPosition: "-2247px bottom",
  //     force3D:true,
  //     rotation:0.01,
  //     z:0.01,
  //     //autoRound:false,
  //     ease: Linear.easeNone
  //   });
    
  //   return tl;
  // }

  // var masterTL = new TimelineMax({
  //   repeat: -1
  // });
  
  // window load event makes sure image is 
// loaded before running animation
// window.onload = function() {
  
//   masterTL
//   .add(ground(),0)
//   .add(clouds(),0)
//   .timeScale(0.7)
//   .progress(1).progress(0)
//   .play();

// };
  
// });
  
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
  const ddd = "design develop document"
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

return(
    <>
    <section className='hero' id='home'>
    {/* <motion.div 
      className='hero'
    > */}

   {/* <Canvas style={{ position: 'absolute' }}>
        <Scene />
      </Canvas> */}
     {/* <div ref={ref} style={{overflow:'hidden'}}> */}
        <motion.h3
        className='hero__title hero__title--hero'
        variants={sentence}
        initial="hidden"
        animate="visible"
        transition={{duration: 1}}
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
     {/* </div> */}

   {/* <motion.div
                variants={{
                    hidden: {opacity: 0, y: 75},
                    visible: {opacity: 1, y: 0},
                }}
                initial= 'hidden'
                // animate= {mainControls}
                animate = {mainControls}
                transition={{duration:0.5, delay: 1.5}}
            > */}
        <motion.h3 className='hero__title hero__title--name'
                variants={{
                    hidden: {opacity: 0, y: 75},
                    visible: {opacity: 1, y: 0},
                }}
                initial= 'hidden'
                animate= 'visible'
                transition={{duration:0.5, delay: 0.5 }}
            >Luke Nam</motion.h3>
      {/* </motion.div> */}
   <motion.div
                variants={{
                    hidden: {opacity: 0, y: 75},
                    visible: {opacity: 1, y: 0},
                }}
                initial= 'hidden'
                animate= 'visible'
                transition={{duration:0.5, delay: 1 }}
            >
                <h3 className='hero__subtitle hero__subtitle--hero'>I am a Website Specialist who,</h3>
    </motion.div>
    <motion.h3
        className='hero__title hero__subtitle--secondary'
        variants={sentence}
        initial={{opacity: 0, translateX: -75}}
        animate={{opacity: 1, translateX: 0}}
        transition={{duration: 2, delay: 1.5}}
        >
          Designs Develops Documents
          </motion.h3>
    {/* </motion.div> */}
          {/* <h3 className='hero__subtitle hero__subtitle--secondary'>Designs</h3> */}
          {/* <h3 className='hero__subtitle hero__subtitle--secondary' style={{float:'right'}}>Develops</h3> */}
          {/* <h3 className='hero__subtitle hero__subtitle--secondary'>Documents</h3> */}
    </section>

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



  // You can create a hook that wraps the logic of animating components on "in view"

  // const useAnimateOnInView = () => {
  //     const controls = useAnimation();
  //     const { ref, inView } = useInView();

  // Tracks element visibility with useInView, returning a ref and inView state.
      
  //     useEffect(() => { Uses useEffect to trigger animations based on visibility:
  //         if (inView) {
  //           controls.start("visible");
  //         }
  //         if (!inView) {
  //           controls.start("hidden");
  //         }
  //       }, [controls, inView]);
      
  
  //      return { ref, controls }; Returns the ref and controls for later use.
  // }
  
  // The use the hook for all things you want to animate
  
  // const { ref: bananaRef, controls: bananaControl } = useAnimateOnInView();
  // const { ref: appleRef, controls: appleControl } = useAnimateOnInView();
  
  // and then hook up the refs to the related dom elements.
  
  // <motion.section
  //   ref={bananaRef}
  //   variants={fadeFromBottom}
  //   initial='hidden'
  //   animate={bananaControl}
  // >
  //    <img src={image} alt='banana'>
  // </motion.section>
  // <motion.section
  //   ref={appleRef}
  //   variants={fadeFromLeft}
  //   initial='hidden'
  //   animate={appleControl}
  // >
  //    <img src={image} alt='apple'>
  // </motion.section>
  
  // you could also just duplicate the existing use of useInView hook and add some logic to the useEffect. I think this hook cleans it up a bit though.
  
export default Hero