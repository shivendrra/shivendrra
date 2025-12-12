
import React, { useState, useEffect } from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import { doc, getDoc, Timestamp } from 'firebase/firestore';
import { db } from '../services/firebase';
import { Blog } from '../types';
import Footer from '../components/Footer';

const BlogPage: React.FC = () => {
  const { blogId } = ReactRouterDOM.useParams<{ blogId: string }>();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchBlog = async () => {
      if (!blogId) {
        setError('Blog ID is missing.');
        setLoading(false);
        return;
      }
      
      setLoading(true);
      setError(null);
      try {
        const blogDocRef = doc(db, 'blogs', blogId);
        const blogDoc = await getDoc(blogDocRef);
        if (blogDoc.exists()) {
          setBlog({ ...blogDoc.data(), id: blogDoc.id } as Blog);
        } else {
          setError('Blog post not found.');
        }
      } catch (e) {
        console.error('Failed to load the blog post.', e);
        setError('Failed to load the blog post.');
      } finally {
        setLoading(false);
      }
    };
    fetchBlog();
  }, [blogId]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-12 h-12 border-4 border-t-primary border-gray-200 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-2xl text-red-500 mb-4">{error}</h1>
        <ReactRouterDOM.Link to="/" className="text-primary hover:underline">
          Go back to Home
        </ReactRouterDOM.Link>
      </div>
    );
  }
  
  if (!blog) {
      return null;
  }

  const date = blog.date instanceof Timestamp ? blog.date.toDate() : new Date(blog.date as string);
  const formattedDate = !isNaN(date.getTime())
    ? date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
    : 'Date not available';

  return (
    <>
      <main className="min-h-screen py-20 px-6 md:px-8">
        <div className="max-w-4xl mx-auto">
            <div className="mb-12">
                <ReactRouterDOM.Link to="/" className="text-zinc-500 hover:text-primary transition-colors flex items-center gap-2 text-lg">
                    <span className="material-symbols-outlined">arrow_back</span>
                    Back to Home
                </ReactRouterDOM.Link>
            </div>

            <article className="bg-white w-full">
                <div className="pb-6 mb-8 border-b border-gray-200">
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal italic text-zinc-800 mb-3">{blog.title}</h1>
                  <p className="text-lg italic text-zinc-500">{formattedDate}</p>
                </div>
                <div 
                  className="prose prose-lg max-w-none text-xl text-zinc-600 leading-relaxed space-y-6 font-instrument-sans"
                  dangerouslySetInnerHTML={{ __html: blog.content }}
                >
                </div>
            </article>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default BlogPage;