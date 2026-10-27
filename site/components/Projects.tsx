
import React, { useState } from 'react';
import { fallbackProjects } from '../constants';
import { Project } from '../types';

interface ActionIconButtonProps {
  href: string;
  label: string;
  bgClass: string;
  children: React.ReactNode;
}

const ActionIconButton: React.FC<ActionIconButtonProps> = ({ href, label, bgClass, children }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative inline-flex items-center justify-center">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsHovered(true)}
        onBlur={() => setIsHovered(false)}
        className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full ${bgClass} text-white flex items-center justify-center transition-all duration-200 transform hover:scale-110 active:scale-95 shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-zinc-400`}
      >
        {children}
      </a>
      {/* Tooltip */}
      <div
        role="tooltip"
        className={`pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 z-30 px-2.5 py-1 bg-zinc-900 text-white text-xs font-instrument-sans font-medium rounded shadow-md whitespace-nowrap transition-all duration-200 ${
          isHovered ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-1 invisible'
        }`}
      >
        <span>{label}</span>
        {/* Downward pointing tooltip indicator */}
        <span className="absolute top-full left-1/2 -translate-x-1/2 -mt-0.5 border-4 border-transparent border-t-zinc-900" />
      </div>
    </div>
  );
};

const ProjectListItem: React.FC<{ project: Project; isLast: boolean }> = ({ project, isLast }) => {
  const languageDisplay = project.languages.map((lang) => lang.name).join(', ');

  return (
    <li className="py-7 sm:py-8 transition-colors duration-200">
      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
        {/* Left Column: Project Name in bold + Tech Stack beside it + Description below */}
        <div className="flex-1 pr-2 sm:pr-6">
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-zinc-900 tracking-tight">
              {project.name}
            </h3>
            {languageDisplay && (
              <span className="text-base sm:text-lg lg:text-xl text-zinc-500 font-normal italic">
                {languageDisplay}
              </span>
            )}
          </div>
          <p className="text-lg sm:text-xl text-zinc-600 mt-2 sm:mt-3 leading-relaxed max-w-3xl">
            {project.description}
          </p>
        </div>

        {/* Right-hand corner: Two circular action icons of alternate colors with hover tooltips */}
        <div className="flex items-center gap-3 shrink-0 self-start sm:self-center pt-1 sm:pt-0">
          {/* GitHub Icon (Alternate Color 1: Dark Charcoal / Zinc) */}
          <ActionIconButton
            href={project.html_url}
            label="GitHub"
            bgClass="bg-zinc-800 hover:bg-zinc-950"
          >
            <svg
              className="w-5 h-5 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              />
            </svg>
          </ActionIconButton>

          {/* Checkout Icon (Alternate Color 2: Warm Orange / Terracotta) */}
          {project.homepage && (
            <ActionIconButton
              href={project.homepage}
              label="Checkout"
              bgClass="bg-orange-700 hover:bg-orange-800"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
            </ActionIconButton>
          )}
        </div>
      </div>

      {/* Horizontal divider between list entries */}
      {!isLast && <hr className="border-t border-zinc-200 mt-7 sm:mt-8" />}
    </li>
  );
};

const Projects: React.FC = () => {
  return (
    <ul className="list-none p-0 m-0 w-full" style={{ listStyleType: 'none' }}>
      {fallbackProjects.map((project, index) => (
        <ProjectListItem
          key={project.name || index}
          project={project}
          isLast={index === fallbackProjects.length - 1}
        />
      ))}
    </ul>
  );
};

export default Projects;

