import ProjectCard from './ProjectCard';
import { projects } from './../store';

function Project() {
    const renderProjects = Object.keys(projects)?.map((key, index) => (
        <ProjectCard key={index} id={key} project={projects[key]} />
    ));
    return (
        <>
            <section className="px-4 mt-20 mb-10">
                <h1 className="text-2xl font-bold text-left text-gray-900 lg:text-5xl dark:text-white">
                    Projects
                </h1>
                <div className="grid grid-cols-1 gap-2 mt-16 cursor-pointer sm:grid-cols-2 lg:grid-cols-2 text-left">
                    {renderProjects}
                </div>
            </section>
        </>
    );
}
export default Project;