
import React from 'react';
import { fallbackProjects } from '../constants';

const ProjectsSection: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {fallbackProjects.map((project, index) => (
        <div key={index} className="bg-white p-6 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 ease-in-out flex flex-col">
          <h3 className="text-3xl font-semibold mb-2 text-gray-800">{project.name}</h3>
          <p className="text-gray-500 mb-4">
            {project.languages.map(lang => lang.name).join(', ')}
          </p>
          <p className="text-gray-700 mb-4 flex-grow text-lg">{project.description}</p>
          <div className="flex gap-4 mt-auto">
            <a href={project.html_url} className="py-2 px-6 text-white bg-gray-800 hover:bg-gray-900 transition-colors" target="_blank" rel="noopener noreferrer">github</a>
            {project.homepage && <a href={project.homepage} className="py-2 px-6 text-white bg-[#BB3E00] hover:bg-orange-800 transition-colors" target="_blank" rel="noopener noreferrer">checkout</a>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectsSection;
