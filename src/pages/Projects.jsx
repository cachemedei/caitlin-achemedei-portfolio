import Project from '../components/Project';

const Projects = () => {
    const style = {
        projectPage: 'w-[70%] min-h-screen mx-auto',
        pageTitle:
            'text-[28px] text-[#1c451c] mb-[20px] md:text-left md:text-[30px] lg:mt-[40px] lg:mb-[-40px]',
        container: 'flex flex-col gap-[30px] lg:gap-0',
    };

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