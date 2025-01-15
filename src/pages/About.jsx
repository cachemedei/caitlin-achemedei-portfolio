import girl from '/logos/girl.png';

const AboutPage = () => {
    const style = {
        aboutPage:
            'w-3/4 min-h-screen mx-auto pt-20 space-y-10 md:w-full md:pt-5 md:flex md:justify-center',
        title: 'text-3xl text-center text-[#1c451c] font-light italic w-3/4 mx-auto mb-3 md:hidden',
        text: 'pl-4 mb-4 md:max-w-[550px] md:text-xl md:font-light md:pr-2',
        image: 'w-36 lg:w-56 mx-auto',
    };

    return (
        <section className={style.aboutPage}>
            <h2 className={style.title}>a little more about me</h2>
            <p className={style.text}>
                A passionate chef transitioning into the tech world, I am
                currently part of the 2024/25 She Codes Australia Plus program.
                I have a strong a love for creativity and problem-solving.
                Through the Plus program, I hope to gain proficiency in coding,
                expand my technical knowledge, and open new career opportunities
                in tech.
            </p>
            <div>
                <img
                    className={style.image}
                    src={girl}
                    alt='Simple line drawing of a girl with long hair in a pony tail, looking over her shoulder'
                />
            </div>
        </section>
    );
};
export default AboutPage;
