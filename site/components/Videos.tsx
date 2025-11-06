
import React from 'react';
import { sampleVideos } from '../constants';
import { Video } from '../types';

const VideoCard: React.FC<{ video: Video; isLarge: boolean }> = ({ video, isLarge }) => (
  <div
    className={`group relative overflow-hidden shadow-lg cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${isLarge ? 'md:col-span-6' : 'md:col-span-4'}`}
    onClick={() => window.open(video.url, '_blank')}
  >
    <img src={video.thumbnail} alt={video.title} className="w-full aspect-[16/9] object-cover" />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5 text-white">
      <h4 className="text-base sm:text-lg font-semibold mb-1">{video.title}</h4>
      <p className="text-xs sm:text-sm opacity-90">{video.description}</p>
    </div>
  </div>
);

const Videos: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8">
      {sampleVideos.map((video, index) => (
        <VideoCard key={index} video={video} isLarge={index < 2} />
      ))}
    </div>
  );
};

export default Videos;