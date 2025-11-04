import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { db } from '../services/firebase';
import { Blog } from '../types';
import Footer from '../components/Footer';
import SocialBar from '../components/SocialBar';

const BlogPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlog = async () => {
      if (!id) {
        setError('Blog ID is missing.');
        setLoading(false);
        return;
      }
      try {
        const docRef = db.collection('blogs').doc(id);
        const docSnap = await docRef.get();

        if (docSnap.exists) {
          setBlog({ id: docSnap.id, ...docSnap.data() } as Blog);
        } else {
          setError('Blog not found.');
        }
      } catch (err) {
        console.error("Error fetching blog:", err);
        setError('Failed to load the blog post.');
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-t-[#367FFD] border-gray-200 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-center p-4">
        <p className="text-red-600 text-2xl mb-4">{error}</p>
        <Link to="/" className="text-[#367FFD] hover:underline">Go back to Home</Link>
      </div>
    );
  }

  if (!blog) {
    return null; // or a 'not found' component
  }
  
  const formattedDate = blog.createdAt ? 
    new Date(blog.createdAt.seconds * 1000).toLocaleDateString('en-GB', {
      day: '2-digit', month: 'short', year: 'numeric'
    }).replace(/ /g, ' ') : 'Date not available';

  return (
    <>
      <main className="py-20">
        <div className="container">
          <div>
            <Link to="/#blogs" className="text-[#367FFD] hover:underline mb-8 inline-block">&larr; Back to all blogs</Link>

            {blog.imageUrl && (
                <img 
                    src={blog.imageUrl} 
                    alt={blog.title} 
                    className="w-full h-auto object-cover mb-8"
                />
            )}
            <h1 className="text-5xl font-bold text-gray-900 mb-4" style={{ fontFamily: "'Source Serif 4', serif" }}>
                {blog.title}
            </h1>
            <p className="text-md text-gray-500 mb-8">
                {formattedDate}
            </p>
            <div 
                className="prose prose-lg max-w-none text-gray-800 leading-relaxed" 
                style={{ fontFamily: "'Source Serif 4', serif", fontSize: '1.2rem', lineHeight: '1.8' }}
                dangerouslySetInnerHTML={{ __html: blog.content }}
            />
          </div>
          <Footer />
        </div>
      </main>
      <SocialBar />
    </>
  );
};

export default BlogPage;