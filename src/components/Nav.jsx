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
        nav: '',
        navbar: 'flex items-center justify-between w-3/4 mx-auto h-28',
        desktopLinks:
            'space-x-4 mr-4 hidden font-light md:flex md:w-3/5 md:justify-evenly md:text-lg',
        mobileLinks:
            'flex flex-col items-center p-24 space-y-6 font-light min-h-screen text-xl',
        link: 'hover:scale-105 duration-500',
        logo: 'w-24 md:mr-7',
        container: 'flex gap-2 hover:scale-105 duration-300',
        contactLogo: 'w-7',
    };

    const [showNav, setShowNav] = useState(false);
    const handleClick = () => setShowNav(!showNav);

    return (
        <nav className={style.nav}>
            {/* Background Border */}
            <Background />

            {/* Logo */}
            <section className={style.navbar}>
                <Link onClick={() => setShowNav(false)} to='/'>
                    <img
                        className={style.logo}
                        src={logo}
                        alt='The initials C and A combined in a cursive style to create a logo'
                    />
                </Link>
                {/* Desktop Menu */}
                <section className={style.desktopLinks}>
                    <Link to='/' className={style.link}>
                        Home
                    </Link>
                    <Link to='/skills' className={style.link}>
                        Skills
                    </Link>
                    <Link to='/projects' className={style.link}>
                        Projects
                    </Link>
                    {/* GitHub */}
                    <a
                        href='https://github.com/cachemedei'
                        className={style.container}
                        target='blank'
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
                        target='blank'
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
                    target='blank'
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
                    target='blank'
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
