const Hero = () => {
    const style = {
        heroSection: 'w-[60%] mx-auto mt-[100px] md:w-[70%] lg:mt-[50px]',
        greeting: 'text-[28px] mb-[15px] md:text-[34px]',
        name: 'ml-[20px] font-bold text-[32px] text-[#1c451c] mb-[10px] md:text-[40px] md:pl-[30px]',
        tagline: 'font-light text-[20px] md:text-[24px]',
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
