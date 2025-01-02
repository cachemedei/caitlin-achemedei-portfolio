import { Link } from 'react-router-dom';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { skillLogos } from '../utils/skills-logos';
import useLoader from '../hooks/use-loader.js';
import Loading from '../components/Loader.jsx';

const Skills = () => {
    const { loading } = useLoader(1500);

    const style = {
        skillSection:
            'min-h-screen w-[70%] pt-[20px] mx-auto flex-col space-y-[30px] md:w-[60%] md:space-y-[40px] lg:w-[50%]',
        title: 'text-[28px] text-[#1c451c] md:text-[30px]',
        text: 'w-[280px] font-light pl-[20px] md:w-[350px]',
        logoList:
            'grid grid-cols-2 pt-[10px] gap-y-[30px] place-items-center md:grid-cols-3',
        logo: 'w-[65px] hover:scale-110 duration-500 md:w-[75px]',
        logoTitle: 'text-center mt-[10px]',
        projectsLink:
            'flex items-center justify-center h-[60px] gap-[10px] pt-[20px] text-[18px] hover:gap-[20px] duration-300 md:w-fit md:text-[22px]',
    };

    if (loading) {
        return <Loading />;
    }
    
    return (
        <section className={style.skillSection}>
            <h1 className={style.title}>Skills</h1>
            <p className={style.text}>
                Here are a few of the technologies that I have worked with.
            </p>
            <ul className={style.logoList}>
                {skillLogos.map((logo, i) => (
                    <li key={i}>
                        <img
                            className={style.logo}
                            key={i}
                            src={logo.src}
                            alt={logo.alt}
                        />
                        <p className={style.logoTitle}>{logo.title}</p>
                    </li>
                ))}
            </ul>
            <Link to='/projects' className={style.projectsLink}>
                My Projects
                <IoIosArrowRoundForward size={22} />
            </Link>
        </section>
    );
};
export default Skills;
