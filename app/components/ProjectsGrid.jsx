import ProjectCard from './ProjectCard';

function ProjectsGrid({ projects }) {
    return (
        <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 xl:gap-6 2xl:gap-8 pt-8 xl:py-20 px-4">
            {projects.map((project) => {
                return <ProjectCard key={project.title} project={project} />
            })}
        </ul>
    );
}

export default ProjectsGrid;
