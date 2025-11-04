import React, { useState } from 'react';
import { Section } from '../types';
import VideosSection from './VideosSection';
import ProjectsSection from './ProjectsSection';
import BlogsSection from './BlogsSection';

const SectionHeader: React.FC<{ title: string; active: boolean; onClick: () => void; }> = ({ title, active, onClick }) => {
  return (
    <h2
      onClick={onClick}
      className={`text-2xl md:text-3xl font-normal italic cursor-pointer transition-colors duration-300 ${active ? 'text-[#367FFD]' : 'text-gray-400 hover:text-gray-600'}`}
    >
      {title}
    </h2>
  );
};

const SwitchingSection: React.FC = () => {
  const [activeSection, setActiveSection] = useState<Section>(Section.Videos);

  const renderSection = () => {
    switch (activeSection) {
      case Section.Videos:
        return <VideosSection />;
      case Section.Projects:
        return <ProjectsSection />;
      case Section.Blogs:
        return <BlogsSection />;
      default:
        return null;
    }
  };

  return (
    <section className="py-20">
      <div className="flex justify-center items-center gap-8 md:gap-12 mb-12">
        <SectionHeader
          title="cool videos"
          active={activeSection === Section.Videos}
          onClick={() => setActiveSection(Section.Videos)}
        />
        <SectionHeader
          title="cool projects"
          active={activeSection === Section.Projects}
          onClick={() => setActiveSection(Section.Projects)}
        />
        <SectionHeader
          title="my blogs"
          active={activeSection === Section.Blogs}
          onClick={() => setActiveSection(Section.Blogs)}
        />
      </div>
      <div>
        {renderSection()}
      </div>
    </section>
  );
};

export default SwitchingSection;