import '../styles/_hero.scss'
import { motion, useInView, useAnimation} from 'framer-motion'

interface Props{
  children:JSX.Element;
  width?: "fit-content" | "100%";
}

export const Hero = ({children, width = "fit-content"}: Props) => {
  return (
    <>
    <section className='hero' id='home' style={{position:"relative", width, overflow:'hidden'}}>
        <span className='hero__title hero__title--hero'>Hi, I'm</span>
        <h3 className='hero__title hero__title--name'>Luke Nam</h3>
        <h3 className='hero__subtitle hero__subtitle--hero'>and I like making websites</h3>
        <h3 className='hero__subtitle hero__subtitle--secondary'>Especially Web Design and Full-stack Development</h3>
    </section>
    </>
  )
}
