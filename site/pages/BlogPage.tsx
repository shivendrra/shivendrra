
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { doc, getDoc, Timestamp } from 'firebase/firestore';
import { db } from '../services/firebase';
import { Blog } from '../types';
import Footer from '../components/Footer';

const BlogPage: React.FC = () => {
  const { blogId } = useParams<{ blogId: string }>();
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
        <Link to="/" className="text-primary hover:underline">
          Go back to Home
        </Link>
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
      <header className="py-10 px-6 md:px-8">
        <div className="max-w-3xl mx-auto flex justify-between items-center">
          <Link to="/" className="text-3xl font-google-sans">
            व्याकुल
          </Link>
          <Link to="/blog" className="text-zinc-500 hover:text-primary transition-colors flex items-center gap-2 text-lg">
            All Posts
          </Link>
        </div>
      </header>
      <main className="min-h-screen px-6 md:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="pb-16">
            <article className="bg-white w-full">
              <div className="mb-8 text-center">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-normal text-zinc-800 mb-3">{blog.title}</h1>
                <p className="text-lg text-zinc-500">{formattedDate}</p>
              </div>

              {blog.imageUrl && (
                <div className="mb-10 w-full mx-auto rounded-lg shadow-md overflow-hidden
                aspect-[3/4] md:aspect-video">
                  <img
                    src={blog.imageUrl}
                    alt={blog.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}

              <div
                className="prose prose-xl max-w-none prose-headings:font-instrument-serif prose-headings:text-zinc-900 prose-a:text-primary prose-a:no-underline hover:prose-a:underline prose-hr:my-12 font-instrument-sans text-zinc-700 leading-relaxed"
                dangerouslySetInnerHTML={{ __html: blog.content }}
              >
              </div>
            </article>
          </div>
          <hr className="border-zinc-200" />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default BlogPage;
