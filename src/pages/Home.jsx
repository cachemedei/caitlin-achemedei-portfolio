import { Link } from 'react-router-dom';
import { IoIosArrowRoundForward } from 'react-icons/io';
import Hero from '../components/Hero';
import AboutComponent from '../components/About';
import useLoader from '../hooks/use-loader.js';
import Loading from '../components/Loader.jsx';

const Home = () => {
    const { loading } = useLoader(1000);
    const style = {
        homePage: 'h-screen',
        aboutButton:
            'flex items-center justify-center h-16 gap-2.5 text-lg mt-24 hover:gap-5 duration-300 md:hidden',
        aboutComponent: 'hidden md:flex',
    };

    if (loading) {
        return <Loading />
    }
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
