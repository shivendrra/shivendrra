
// Fix: Use namespace import for firebase/firestore to resolve module errors.
import * as firestore from 'firebase/firestore';

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
  date: string | firestore.Timestamp;
  imageUrl: string;
  content: string;
}
