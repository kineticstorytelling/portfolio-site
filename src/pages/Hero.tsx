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
        <Reveal><h3 className='hero__title hero__title--name'>Luke Nam</h3></Reveal>
      {/* </motion.div> */}
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
        <h3 className='hero__subtitle hero__subtitle--hero'>and I am a Website Specialist</h3>
        <h3 className='hero__subtitle hero__subtitle--secondary'>I Design Develop and Document</h3>
    {/* </motion.div> */}
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
export default Hero