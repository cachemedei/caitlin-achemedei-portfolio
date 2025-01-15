import Loading from '../components/Loader.jsx';
import Project from '../components/Project';
import useLoader from '../hooks/use-loader.js';

const Projects = () => {
    const { loading } = useLoader(1000);

    const style = {
        projectPage: 'w-2/3 min-h-screen mx-auto',
        pageTitle:
            'text-3xl text-[#1c451c] mb-5 md:text-left lg:mt-10 lg:mb-[-40px]',
        container: 'flex flex-col',
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
