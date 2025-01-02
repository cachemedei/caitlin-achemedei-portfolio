import { Link } from 'react-router-dom';
import { IoIosArrowRoundForward } from 'react-icons/io';
import Hero from '../components/Hero';
import AboutComponent from '../components/About';

const Home = () => {
    const style = {
        homePage: 'h-screen',
        aboutButton: 'flex items-center justify-center h-[60px] gap-[10px] text-[18px] mt-[100px] hover:gap-[20px] duration-300 md:hidden',
        aboutComponent: 'hidden md:flex',
    };
    return (
        <section className={style.homePage}>
            <Hero />
            <Link to='/aboutpage' className={style.aboutButton}>
                About
                <IoIosArrowRoundForward size={22} />
            </Link>
            <div className={style.aboutComponent}>
                <AboutComponent />
            </div>
        </section>
    );
};
export default Home;
