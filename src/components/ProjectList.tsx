import React from 'react';
import ProjectCard from './ProjectCard';
import { projects } from '../data/portfolio';

const ProjectList: React.FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-4">
            {projects.map((project) => (
                <ProjectCard
                    key={project.id || project.title}
                    title={project.title}
                    description={project.description}
                    technologies={project.technologies}
                    link={project.link}
                />
            ))}
        </div>
    );
};

export default ProjectList;