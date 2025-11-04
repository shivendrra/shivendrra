
import { Project, Video } from './types';

export const sampleVideos: Video[] = [
  {
    title: 'I BUILT A GPT',
    thumbnail: 'media/Thumbnail2.png',
    description: 'A video by Shivendra',
    url: 'https://www.youtube.com/watch?v=PVpyN_2z5II'
  },
  {
    title: 'THE ARTIST',
    thumbnail: 'media/Thumbnail1.png',
    description: 'A Shortfilm by Shivendra',
    url: 'https://www.youtube.com/watch?v=OfyEUGiRzYw'
  },
  {
    title: 'ORIGIN OF ISRO',
    thumbnail: 'media/Thumbnail4.png',
    description: 'A video by Vakya',
    url: 'https://www.youtube.com/watch?v=L-hUYR9KsIk&t=33s'
  },
  {
    title: 'THIS PICTURE TELLS A STORY',
    thumbnail: 'media/Thumbnail3.png',
    description: 'A video by Vakya',
    url: 'https://www.youtube.com/watch?v=t5M_D5hAyoc&t=81s'
  },
  {
    title: 'OPERATION GANGOTRI',
    thumbnail: 'media/Thumbnail5.png',
    description: 'A video by Vakya',
    url: 'https://www.youtube.com/watch?v=86kPclU1X8E&t=58s'
  }
];

export const fallbackProjects: Project[] = [
  {
    name: "Shredword",
    description: "Fast & efficient BPE tokenizer written in C & python for LLM tranining",
    html_url: "https://github.com/delveopers/Shredword",
    homepage: "https://pypi.org/project/shredword",
    languages: [{ name: "C++", percentage: 54.3 }, { name: "Python", percentage: 31.1 }, { name: "C", percentage: 12.1 }],
  },
  {
    name: "Synapse",
    description: "a music app that lets you stream music or any video available on youtube for free without ads",
    html_url: "https://github.com/shivendrra/synapse",
    homepage: "https://synapse-music.vercel.app/",
    languages: [{ name: "Javascript", percentage: 70.5 }, { name: "CSS", percentage: 27.4 }, { name: "HTML", percentage: 2.1 }],
  },
  {
    name: "AxGrad",
    description: "lightweight tensor library that contains it's own auto-diff engine like pytorch",
    html_url: "https://github.com/shivendrra/ax-grad",
    homepage: "https://pypi.org/project/axgrad/",
    languages: [{ name: "C++", percentage: 54.1 }, { name: "Python", percentage: 25.8 }, { name: "Cuda", percentage: 13.4 }, { name: "C", percentage: 6.4 }],
  },
  {
    name: "Axon",
    description: "lightweight multi-dimensional array manipulation library powered by GPU",
    html_url: "https://github.com/delveopers/Axon",
    homepage: "https://pypi.org/project/axon-pypi/",
    languages: [{ name: "C++", percentage: 51.1 }, { name: "Python", percentage: 23.7 }, { name: "Cuda", percentage: 17 }, { name: "C", percentage: 8 }],
  }
];
