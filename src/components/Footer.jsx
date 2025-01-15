import github from '/logos/github.svg';
import linkedin from '/logos/linkedin.svg';
import base from '/images/base.png';

const Footer = () => {
    const style = {
        footerSection: 'h-fit flex justify-evenly mt-7 relative',
        container:
            'flex flex-col items-center p-2 hover:mt-[-30px] duration-300 bg-[#e0ebd6] rounded z-100 md:text-xl',
        logo: 'w-8',
        base: 'absolute bottom-0 w-full h-10 md:h-12 object-fit bg-repeat-x m-0 z-[-1]',
    };

    return (
        <footer className={style.footerSection}>
            {/* Background */}
            <div
                className={style.base}
                style={{
                    backgroundImage: `url(${base})`,
                    backgroundSize: 'contain',
                }}
            ></div>
            {/* GitHub */}
            <a
                href='https://github.com/cachemedei'
                className={style.container}
                target='blank'
            >
                <img
                    className={style.logo}
                    src={github}
                    alt='Github profile link'
                />
                <p>GitHub</p>
            </a>
            {/* LinkedIn */}
            <a
                href='https://www.linkedin.com/in/caitlin-achemedei-4616762b3/'
                className={style.container}
                target='blank'
            >
                <img
                    className={style.logo}
                    src={linkedin}
                    alt='Linkedin profile link'
                />
                <p>LinkedIn</p>
            </a>
        </footer>
    );
};
export default Footer;
