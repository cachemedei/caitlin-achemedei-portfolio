import { Link } from 'react-router-dom';
import { IoIosArrowRoundForward } from 'react-icons/io';
import { skillLogos } from '../utils/skills-logos';
import useLoader from '../hooks/use-loader.js';
import Loading from '../components/Loader.jsx';

const Skills = () => {
    const { loading } = useLoader(1000);

    const style = {
        skillSection:
            'min-h-screen w-3/4 pt-5 mx-auto flex-col space-y-8 md:w-3/5 md:space-y-10 lg:w-1/2',
        title: 'text-3xl text-[#1c451c] md:text-4xl',
        text: 'w-72 font-light pl-5 md:w-96 md:text-xl',
        logoList:
            'grid grid-cols-2 pt-2 gap-y-8 place-items-center md:grid-cols-3',
        listItem: 'h-28 md:h-32 flex flex-col justify-between',
        logo: 'w-16 hover:scale-110 duration-500 md:w-20',
        logoTitle: 'text-center mt-2.5',
        projectsLink:
            'flex items-center justify-center h-15 gap-2.5 pt-5 text-lg hover:gap-5 duration-300 md:w-fit md:text-2xl',
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
                    <li className={style.listItem} key={i}>
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
