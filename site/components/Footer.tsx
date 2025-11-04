import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="py-16 px-6 md:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-2xl font-normal italic mb-4 text-zinc-800">
          portfolio <span className="text-primary">@shivendrra</span>
        </h2>
        <p className="text-lg text-zinc-500 italic max-w-xl mx-auto">
          "good design is as little design as possible" - some German motherfucker
        </p>
      </div>
    </footer>
  );
};

export default Footer;