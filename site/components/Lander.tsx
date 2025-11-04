import React from 'react';
import SocialBar from './SocialBar';

const Lander: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center px-6 md:px-8 py-24">
      <div className="max-w-5xl mx-auto w-full">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8 md:gap-16 mb-20 md:mb-24">
          <div className="text-center md:text-left flex-grow">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-normal text-zinc-800 mb-4">
              hello, I'm <span className="text-primary italic">shivendra</span>
            </h1>
            <p className="text-2xl sm:text-3xl italic text-zinc-500">"man most likely to be anything"</p>
          </div>
          <div className="flex-shrink-0 mt-8 md:mt-0">
            <img src="./media/profile.jpg" alt="Shivendra" className="w-40 h-40 sm:w-48 sm:h-48 object-cover shadow-lg" />
          </div>
        </div>
        <div className="text-center">
          <h4 className="text-3xl font-normal italic mb-6 text-zinc-800">about me</h4>
          <p className="text-xl sm:text-2xl max-w-3xl mx-auto text-zinc-600 leading-relaxed mb-1">
            I'm a 20 year old guy who does everything— designing, writing, coding, video editing/
            animating or photography. I love learning new stuff. Currently, spending my time
            trying to read as much as possible, & completing my code projects.
          </p>
          <SocialBar />
        </div>
      </div>
    </section>
  );
};

export default Lander;