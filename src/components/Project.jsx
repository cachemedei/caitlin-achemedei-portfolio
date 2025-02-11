import { projects } from '../utils/projects';

const Project = () => {
    const style = {
        project: 'py-2 lg:flex lg:justify-between mb-4',
        infoContainer: 'lg:w-80 lg:space-y-4 lg:h-fit lg:my-auto',
        projectTitle: 'text-2xl text-[#1b721b] lg:text-3xl',
        text: 'font-light ml-3 md:text-lg',
        button: 'border-[1px] border-[#6c976c] rounded py-1 px-2 mr-6 mt-4 md:px-2.5 hover:scale-105 hover:font-bold duration-500',
        imgContainer:
            'size-72 mt-6 md:size-96 lg:size-80 xl:size-96 border-[1px] mx-auto',
        image: 'object-fit w-72 mx-auto md:w-96 lg:w-80 xl:w-96 rounded',
    };

    return (
        <>
            {projects.map((project, i) => (
                <article key={i} className={style.project}>
                    {/* title, description, buttons */}
                    <div className={style.infoContainer}>
                        <h2 className={style.projectTitle}>{project.title}</h2>
                        <p className={style.text}>{project.description}</p>
                        {project.site ? (
                            <button className={style.button}>
                                <a href={project?.site} target='blank'>
                                    Deployed Site
                                </a>
                            </button>
                        ) : null}
                        <button className={style.button}>
                            <a href={project.code} target='blank'>
                                Code
                            </a>
                        </button>
                    </div>
                    <div className={style.imgContainer}>
                        <img
                            className={style.image}
                            src={project.image}
                            alt='The homepage of the app'
                        />
                    </div>
                </article>
            ))}
        </>
    );
};
export default Project;
