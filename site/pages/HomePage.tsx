
import React, { useState, useEffect } from 'react';
// Fix: Use namespace imports for react-router-dom and firebase/firestore to resolve module errors.
import * as ReactRouterDOM from 'react-router-dom';
import { doc, getDoc, Timestamp } from 'firebase/firestore';
import { db } from '../services/firebase';
import { Blog } from '../types';
import Lander from '../components/Lander';
import SwitchSection from '../components/SwitchSection';
import Footer from '../components/Footer';

// A full-page component for displaying a single blog post
const BlogPage: React.FC = () => {
  const { blogId } = ReactRouterDOM.useParams<{ blogId: string }>();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlog = async () => {
      if (!blogId) return;
      window.scrollTo(0, 0); // Scroll to top on page load
      try {
        const blogDocRef = doc(db, 'blogs', blogId);
        const blogDoc = await getDoc(blogDocRef);
        if (blogDoc.exists()) {
          setBlog({ ...blogDoc.data(), id: blogDoc.id } as Blog);
        } else {
          setError('Blog post not found.');
        }
      } catch (e) {
        setError('Failed to load the blog post.');
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [blogId]);

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="w-12 h-12 border-4 border-t-primary border-gray-200 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center text-center px-4">
        <h1 className="text-4xl font-bold text-zinc-800 mb-4">Oops!</h1>
        <p className="text-xl text-zinc-600 mb-8">{error || 'Blog post not found.'}</p>
        <ReactRouterDOM.Link to="/" className="text-primary italic hover:underline text-lg">&larr; Back to home</ReactRouterDOM.Link>
      </div>
    );
  }

  const date = blog.date instanceof Timestamp ? blog.date.toDate() : new Date(blog.date as string);
  const formattedDate = !isNaN(date.getTime())
    ? date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
    : 'Date not available';

  return (
    <>
      <main>
        <img src={blog.imageUrl} alt={blog.title} className="w-full object-cover aspect-[20/9]" />
        <div className="px-6 md:px-8 py-12 md:py-20">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <ReactRouterDOM.Link to="/" className="text-primary italic hover:underline">&larr; Back to all posts</ReactRouterDOM.Link>
            </div>
            <article>
              <div className="text-center mb-12">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal italic text-zinc-800 mb-4">{blog.title}</h1>
                <p className="text-lg italic text-zinc-500">{formattedDate}</p>
              </div>
              <div
                className="prose prose-lg max-w-none text-xl text-zinc-600 leading-relaxed space-y-6"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              />
            </article>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};


const HomePage: React.FC = () => {
  const { blogId } = ReactRouterDOM.useParams<{ blogId?: string }>();

  // If a blogId is present in the URL, render the single blog page view
  if (blogId) {
    return <BlogPage />;
  }

  // Otherwise, render the main portfolio page
  return (
    <>
      <Lander />
      <SwitchSection />
      <Footer />
    </>
  );
};

export default HomePage;