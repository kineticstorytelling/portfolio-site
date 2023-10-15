import './_hero.scss'

const Hero = () => {
  return (
    <>
    <section className='hero' id='home'>
        <span className='hero__title hero__title--hero'>Hi, I'm</span>
        <h3 className='hero__title hero__title--name'>Luke Nam</h3>
        <h3 className='hero__subtitle hero__subtitle--hero'>and I like making websites</h3>
        <h3 className='hero__subtitle hero__subtitle--secondary'>Especially Web Design and Full-stack Development</h3>
    </section>
    </>
  )
}

export default Hero