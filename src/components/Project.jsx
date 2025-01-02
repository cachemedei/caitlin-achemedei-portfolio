import { projects } from '../utils/projects';

const Project = () => {
    const style = {
        project: 'py-[10px] md:w-[90%] md:mx-auto lg:flex lg:items-center',
        projectTitle: 'text-[20px] text-[#1b721b] md:text-[26px]',
        text: 'font-light ml-[10px] md:text-[20px]',
        button: 'border-[1px] border-[#6c976c] rounded py-[5px] px-[8px] mr-[25px] mt-[15px] md:text-[16px] md:px-[10px] hover:scale-110 duration-500',
        image: 'rounded-md my-[20px] h-[280px] md:mx-auto md:h-[420px] lg:w-[420px]',
        container: 'lg:w-[40%]',
    };

    return (
        <>
            {projects.map((project, i) => (
                <article key={i} className={style.project}>
                    {/* title, description, buttons */}
                    <div className={style.container}>
                        <h2 className={style.projectTitle}>{project.title}</h2>
                        <p className={style.text}>{project.description}</p>
                        {project.site ? (
                            <button className={style.button}>
                                <a href={project?.site}>Deployed Site</a>
                            </button>
                        ) : null}
                        <button className={style.button}>
                            <a href={project.code}>Code</a>
                        </button>
                    </div>
                    <img
                        className={style.image}
                        src={project.image}
                        alt='The homepage of the app'
                    />
                </article>
            ))}
        </>
    );
};
export default Project;
