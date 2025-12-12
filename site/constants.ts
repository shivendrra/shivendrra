
import { Project, Video } from './types';

export const sampleVideos: Video[] = [
  {
    title: 'Experience with Vibe Coding',
    thumbnail: 'https://raw.githubusercontent.com/shivendrra/shivendrra/main/website/media/Thumbnail2.png',
    description: 'A video by Shivendra',
    url: 'https://www.youtube.com/watch?v=ZqdCs175DnI'
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
    name: "AxGrad",
    description: "lightweight tensor library that contains it's own auto-diff engine like pytorch",
    html_url: "https://github.com/shivendrra/ax-grad",
    homepage: "https://pypi.org/project/axgrad/",
    languages: [{ name: "C++", percentage: 54.1 }, { name: "Python", percentage: 25.8 }, { name: "Cuda", percentage: 13.4 }, { name: "C", percentage: 6.4 }],
  },
  {
    name: "Axon",
    description: "Lightweight tensor library for deep learning model low-latency inference",
    html_url: "https://github.com/delveopers/Axon",
    homepage: "https://pypi.org/project/axon-pypi/",
    languages: [{ name: "C++", percentage: 51.1 }, { name: "Python", percentage: 23.7 }, { name: "Cuda", percentage: 17 }, { name: "C", percentage: 8 }],
  },
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
    name: "Acapella",
    description: "Letterboxd, for music. A social diary for Music Lovers",
    html_url: "https://github.com/shivendrra/acapella",
    homepage: "https://theacapella.vercel.app/",
    languages: [{ name: "Typescript", percentage: 88.4 }, { name: "Python", percentage: 11.0 }, { name: "HTML", percentage: 0.6 }],
  },
  {
    name: "Enigma",
    description: "A dna sequence generation/classification using transformers",
    html_url: "https://github.com/shivendrra/enigma",
    homepage: "https://huggingface.co/shivendrra/enigma1",
    languages: [{ name: "Jupyter Notebook", percentage: 51.9 }, { name: "Python", percentage: 48.1 }],
  },
  {
    name: "Shredword-Trainer",
    description: "BPE & Unigram Vocab Training library",
    html_url: "https://github.com/shivendrra/shredword-trainer",
    homepage: "https://pypi.org/project/shredword-trainer/",
    languages: [{ name: "C++", percentage: 64.8 }, { name: "Python", percentage: 18.5 }, { name: "C", percentage: 15.8 }, { name: "CMake", percentage: 0.9 }],
  },
  {
    name: "Biosaic",
    description: "KMer level tokenizer for DNA & Proteins sequences",
    html_url: "https://github.com/delveopers/Biosaic/",
    homepage: "https://pypi.org/project/biosaic/",
    languages: [{ name: "Python", percentage: 100 }],
  },
];
