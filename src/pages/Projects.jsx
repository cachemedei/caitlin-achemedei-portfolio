import Loading from '../components/Loader.jsx';
import Project from '../components/Project';
import useLoader from '../hooks/use-loader.js';

const Projects = () => {
    const { loading } = useLoader(1000);

    const style = {
        projectPage: 'min-h-screen mx-auto w-72 md:w-[500px] lg:w-[700px] xl:w-[900px]',
        pageTitle:
            'text-3xl text-[#1c451c] mb-5 md:text-left lg:mt-10 lg:text-4xl',
    };

    if (loading) {
        return <Loading />;
    }

    return (
        <section className={style.projectPage}>
            <h1 className={style.pageTitle}>My Projects</h1>
                <Project />
        </section>
    );
};
export default Projects;
