
import { Project, Video } from './types';

export const sampleVideos: Video[] = [
  {
    title: 'I BUILT A GPT',
    thumbnail: 'https://raw.githubusercontent.com/shivendrra/shivendrra/main/website/media/Thumbnail2.png',
    description: 'A video by Shivendra',
    url: 'https://www.youtube.com/watch?v=PVpyN_2z5II'
  },
  {
    title: 'THE ARTIST',
    thumbnail: 'https://raw.githubusercontent.com/shivendrra/shivendrra/main/website/media/Thumbnail1.png',
    description: 'A Shortfilm by Shivendra',
    url: 'https://www.youtube.com/watch?v=OfyEUGiRzYw'
  },
  {
    title: 'ORIGIN OF ISRO',
    thumbnail: 'https://raw.githubusercontent.com/shivendrra/shivendrra/main/website/media/Thumbnail4.png',
    description: 'A video by Vakya',
    url: 'https://www.youtube.com/watch?v=L-hUYR9KsIk&t=33s'
  },
  {
    title: 'THIS PICTURE TELLS A STORY',
    thumbnail: 'https://raw.githubusercontent.com/shivendrra/shivendrra/main/website/media/Thumbnail3.png',
    description: 'A video by Vakya',
    url: 'https://www.youtube.com/watch?v=t5M_D5hAyoc&t=81s'
  },
  {
    title: 'OPERATION GANGOTRI',
    thumbnail: 'https://raw.githubusercontent.com/shivendrra/shivendrra/main/website/media/Thumbnail5.png',
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
    languages: [{ name: "TypeScript", percentage: 96.9 }, { name: "HTML", percentage: 3.1 }],
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
    languages: [{ name: "Python", percentage: 100 }],
  },
  {
    name: "Acapella",
    description: "Letterboxd, but for Music",
    html_url: "https://github.com/shivendrra/acapella",
    homepage: "https://theacapella.vercel.app/",
    languages: [{ name: "TypeScript", percentage: 84.9 }, { name: "Python", percentage: 14.5 }, { name: "HTML", percentage: 0.6 }],
  },
  {
    name: "Cattlesense",
    description: "Centralized portal for livestock management for MRL & AMU Compliance",
    html_url: "https://github.com/shivendrra/CattleSense",
    homepage: "https://cattlesense.vercel.app/",
    languages: [{ name: "TypeScript", percentage: 51.0 }, { name: "Python", percentage: 46.7 }, { name: "HTML", percentage: 2.3 }],
  },
  {
    name: "Biosaic",
    description: "KMer level tokenizer for DNA & Proteins sequences",
    html_url: "https://github.com/delveopers/Biosaic",
    homepage: "https://pypi.org/project/biosaic/",
    languages: [{ name: "C++", percentage: 54.3 }, { name: "Python", percentage: 31.1 }, { name: "C", percentage: 12.1 }],
  },
  {
    name: "Shredword-Trainer",
    description: "BPE & Unigram Vocab Training library",
    html_url: "https://github.com/shivendrra/shredword-trainer",
    homepage: "https://pypi.org/project/shredword-trainer/",
    languages: [{ name: "C++", percentage: 62.5 }, { name: "Python", percentage: 21.9 }, { name: "C", percentage: 14.5 }],
  }
];