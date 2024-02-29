import '../modules/hero.modules.css'

const Hero = () => {
    return (
        <section className='hero'>
            <h1 className='hero_title'>FULL STACK</h1>
            <h1 className='hero_title'>DEVELOPER PORTFOLIO</h1>
            <h1 className='hero_title'>Code that speaks for itself.</h1>
            <section className='image-container'>
                <div className='image'></div>
                <div className='image'></div>
            </section>
        </section>
    )
}

export default Hero;