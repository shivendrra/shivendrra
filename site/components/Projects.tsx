
import React from 'react';
import { fallbackProjects } from '../constants';
import { Project } from '../types';

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  const languageDisplay = project.languages.slice(0, 4).map(lang => lang.name).join(', ');
  
  return (
    <div className="bg-white p-6 shadow-lg h-full flex flex-col transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
      <h3 className="text-3xl font-semibold mb-2 text-zinc-800">{project.name}</h3>
      <p className="text-base text-zinc-500 mb-4">{languageDisplay}</p>
      <p className="text-lg text-zinc-600 mb-6 flex-grow">{project.description}</p>
      <div className="flex gap-4">
        <a href={project.html_url} className="py-2 px-6 text-white bg-zinc-800 hover:bg-zinc-900 transition-colors" target="_blank" rel="noopener noreferrer">github</a>
        {project.homepage && (
          <a href={project.homepage} className="py-2 px-6 text-white bg-orange-700 hover:bg-orange-800 transition-colors" target="_blank" rel="noopener noreferrer">checkout</a>
        )}
      </div>
    </div>
  );
};


const Projects: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {fallbackProjects.map((project, index) => (
        <ProjectCard key={index} project={project} />
      ))}
    </div>
  );
};

export default Projects;
