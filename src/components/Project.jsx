import { projects } from '../utils/projects';

const Project = () => {
    const style = {
        project:
            'py-2 md:w-11/12 md:mx-auto lg:flex lg:items-center',
        infoContainer: 'lg:w-2/5',
        projectTitle: 'text-xl text-[#1b721b] md:text-2xl',
        text: 'font-light ml-3 md:text-xl',
        button: 'border-[1px] border-[#6c976c] rounded py-1 px-2 mr-6 mt-4 md:px-2.5 hover:scale-105 hover:font-bold duration-500',
        imgContainer: 'min-h-64 md:min-h-96',
        image: 'rounded-md my-5 w-70 md:mx-auto md:w-96',
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
