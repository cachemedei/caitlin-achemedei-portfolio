import Loading from '../components/Loader.jsx';
import Project from '../components/Project';
import useLoader from '../hooks/use-loader.js';

const Projects = () => {
    const { loading } = useLoader(1000);

    const style = {
        projectPage: 'w-[70%] min-h-screen mx-auto',
        pageTitle:
            'text-[28px] text-[#1c451c] mb-[20px] md:text-left md:text-[30px] lg:mt-[40px] lg:mb-[-40px]',
        container: 'flex flex-col gap-[30px] lg:gap-0',
    };

    if (loading) {
        return <Loading />;
    }

    return (
        <section className={style.projectPage}>
            <h1 className={style.pageTitle}>My Projects</h1>
            <div className={style.container}>
                <Project />
            </div>
        </section>
    );
};
export default Projects;
