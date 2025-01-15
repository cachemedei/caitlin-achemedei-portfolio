import github from '/logos/github.svg';
import linkedin from '/logos/linkedin.svg';
import base from '/images/base.png';

const Footer = () => {
    const style = {
        footerSection: 'h-fit flex justify-evenly mt-[30px] relative',
        container:
            'flex flex-col items-center p-[8px] text-[16px] hover:mt-[-30px] duration-500 bg-[#e0ebd6] rounded z-100 md:text-[20px]',
        logo: 'w-[30px]',
        base: 'absolute bottom-0 w-full h-[40px] md:h-[50px] object-fit bg-repeat-x m-0 z-[-1]',
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
