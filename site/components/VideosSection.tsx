import React from 'react';
import { sampleVideos } from '../constants';

const VideosSection: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {sampleVideos.map((video, index) => (
        <div
          key={index}
          className={`col-span-1 ${index === 0 ? 'md:col-span-2 lg:col-span-2' : ''}`}
        >
         <div
            className="relative overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-1 cursor-pointer group"
            onClick={() => window.open(video.url, '_blank')}
            role="link"
            aria-label={`Watch video: ${video.title}`}
          >
            <img 
              src={video.thumbnail} 
              alt={video.title} 
              className="w-full aspect-video object-cover transition-transform duration-300 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out">
              <svg className="w-16 h-16 text-white drop-shadow-lg" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd"></path>
              </svg>
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-5 text-white">
              <h4 className="text-xl font-semibold mb-1">{video.title}</h4>
              <p className="text-sm opacity-90">{video.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default VideosSection;