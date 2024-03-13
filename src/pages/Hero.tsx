import { motion} from 'framer-motion';
import '../styles/_hero.scss'


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

return(
    <>
    <section className='hero' id='home'>

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

          <motion.h3 className='hero__title hero__title--name'
                variants={{
                    hidden: {opacity: 0, y: 75},
                    visible: {opacity: 1, y: 0},
                }}
                initial= 'hidden'
                animate= 'visible'
                transition={{duration:0.5, delay: 0.5 }}
            >
          Luke Nam
          </motion.h3>

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
      <>
        <motion.span initial="hidden" animate="visible" aria-hidden>
          {text.split("").map((char) => (
            <motion.span variants={defaultAnimations}>{char}</motion.span>
          ))}
        </motion.span>
</>
    )
          
  }

export default Hero