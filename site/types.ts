

// Fix: Use named import for firebase/firestore to resolve module errors.
import { Timestamp } from 'firebase/firestore';

export interface Video {
  title: string;
  thumbnail: string;
  description: string;
  url: string;
}

export interface Project {
  name: string;
  description: string;
  html_url: string;
  homepage?: string;
  languages: { name: string; percentage: number }[];
}

export interface Blog {
  id: string;
  title: string;
  date: string | Timestamp;
  imageUrl: string;
  content: string;
}