const Hero = () => {
    const style = {
        heroSection: 'w-3/5 mx-auto mt-24 md:w-2/3 lg:mt-12',
        greeting: 'text-2xl mb-4 md:text-3xl',
        name: 'ml-5 font-bold text-4xl text-[#1c451c] mb-2.5 md:text-5xl md:pl-7',
        tagline: 'font-light text-xl md:text-2xl',
    };

    return (
        <section className={style.heroSection}>
            <h2 className={style.greeting}>Hi, my name is</h2>
            <h1 className={style.name}>Caitlin Achemedei</h1>
            <h4 className={style.tagline}>junior software developer.</h4>
        </section>
    );
};
export default Hero;
