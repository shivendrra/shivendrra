import React, { useState } from 'react';
import Videos from './Videos';
import Projects from './Projects';
import Blogs from './Blogs';

type ActiveView = 'videos' | 'projects' | 'blogs';

const SwitchSection: React.FC = () => {
  const [activeView, setActiveView] = useState<ActiveView>('videos');

  const getButtonClass = (view: ActiveView) => {
    return `text-xl md:text-2xl font-normal italic px-4 py-2 transition-colors duration-300 ${
      activeView === view ? 'text-primary border-b-2 border-primary' : 'text-zinc-500 hover:text-zinc-800'
    }`;
  };

  return (
    <section className="py-20 px-6 md:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-center items-center gap-4 md:gap-8 mb-12">
          <button onClick={() => setActiveView('videos')} className={getButtonClass('videos')}>
            cool videos
          </button>
          <button onClick={() => setActiveView('projects')} className={getButtonClass('projects')}>
            cool projects
          </button>
          <button onClick={() => setActiveView('blogs')} className={getButtonClass('blogs')}>
            cool blogs
          </button>
        </div>

        <div>
          {activeView === 'videos' && <Videos />}
          {activeView === 'projects' && <Projects />}
          {activeView === 'blogs' && <Blogs />}
        </div>
      </div>
    </section>
  );
};

export default SwitchSection;