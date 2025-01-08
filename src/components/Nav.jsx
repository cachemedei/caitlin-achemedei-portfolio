import { Link, Outlet, ScrollRestoration } from 'react-router-dom';
import { useState } from 'react';
import { IoMdClose, IoMdMenu } from 'react-icons/io';
import logo from '/logos/ca-logo.png';
import Footer from './Footer';
import Background from './Background';
import github from '/logos/github.svg';
import linkedin from '/logos/linkedin.svg';

const Nav = () => {
    const style = {
        navbar: 'flex items-center justify-between w-[75%] mx-auto',
        desktopLinks:
            'space-x-[15px] mr-4 hidden font-light md:flex md:w-[60%] md:justify-evenly md:text-[18px]',
        mobileLinks:
            'flex flex-col items-center p-[100px] space-y-[25px] font-light min-h-screen text-[20px]',
        link: 'hover:scale-105 duration-500',
        logo: 'w-[100px] md:mr-[30px]',
        container: 'flex gap-2 hover:scale-105 duration-300',
        contactLogo: 'w-[30px]',
    };

    const [showNav, setShowNav] = useState(false);
    const handleClick = () => setShowNav(!showNav);

    return (
        <nav>
            {/* Background Border */}
            <Background />

            {/* Logo */}
            <section className={style.navbar}>
                {/* Desktop Menu */}
                <section className={style.desktopLinks}>
                    <Link to='/' className={style.link}>
                        Home
                    </Link>
                    <Link to='/projects' className={style.link}>
                        Projects
                    </Link>
                    <Link to='/skills' className={style.link}>
                        Skills
                    </Link>
                    {/* GitHub */}
                    <a
                        href='https://github.com/cachemedei'
                        className={style.container}
                    >
                        <img
                            className={style.contactLogo}
                            src={github}
                            alt='Github profile link'
                        />
                    </a>
                    {/* LinkedIn */}
                    <a
                        href='https://www.linkedin.com/in/caitlin-achemedei-4616762b3/'
                        className={style.container}
                    >
                        <img
                            className={style.contactLogo}
                            src={linkedin}
                            alt='Linkedin profile link'
                        />
                    </a>
                </section>

                {/* Hamburger */}
                <div onClick={handleClick} className='md:hidden z-10 p-4'>
                    {!showNav ? (
                        <IoMdMenu size={30} />
                    ) : (
                        <IoMdClose size={30} />
                    )}
                </div>
                <Link onClick={() => setShowNav(false)} to='/'>
                    <img
                        className={style.logo}
                        src={logo}
                        alt='The initials C and A combined in a cursive style to create a logo'
                    />
                </Link>
            </section>
            {/* Mobile Menu */}
            <section className={`${showNav ? style.mobileLinks : 'hidden'}`}>
                <Link onClick={handleClick} to='/' className={style.link}>
                    Home
                </Link>
                <Link onClick={handleClick} to='/skills' className={style.link}>
                    Skills
                </Link>
                <Link
                    onClick={handleClick}
                    to='/projects'
                    className={style.link}
                >
                    Projects
                </Link>
                {/* GitHub */}
                <a
                    href='https://github.com/cachemedei'
                    className={style.container}
                >
                    <p>GitHub</p>
                    <img
                        className={style.contactLogo}
                        src={github}
                        alt='Github profile link'
                    />
                </a>
                {/* LinkedIn */}
                <a
                    href='https://www.linkedin.com/in/caitlin-achemedei-4616762b3/'
                    className={style.container}
                >
                    <p>LinkedIn</p>
                    <img
                        className={style.contactLogo}
                        src={linkedin}
                        alt='Linkedin profile link'
                    />
                </a>
            </section>
            <ScrollRestoration />
            <Outlet />
            <Footer />
        </nav>
    );
};
export default Nav;
