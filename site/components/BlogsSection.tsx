import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../services/firebase';
import { Blog } from '../types';

const BlogsSection: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const blogsCollectionRef = db.collection('blogs');
        const q = blogsCollectionRef
            .where('isPublished', '==', true)
            .orderBy('createdAt', 'desc');
            
        const blogSnapshot = await q.get();
        const blogList = blogSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Blog));
        setBlogs(blogList);
      } catch (err: any) {
        console.error("Error fetching blogs:", err);
        const errorMessage = err.message || '';
        const urlMatch = errorMessage.match(/https?:\/\/[^\s]+/);
        const firebaseConsoleUrl = urlMatch ? urlMatch[0] : '';
        
        if (errorMessage.toLowerCase().includes('index is currently building')) {
          setError(
            `The database index is being built. This may take a few minutes. Please refresh the page shortly. You can check the status here: ${firebaseConsoleUrl}`
          );
        } else if (errorMessage.toLowerCase().includes('the query requires an index')) {
          setError(
            `A database index is required for this query. Please create it in your Firebase console. You can use this link: ${firebaseConsoleUrl}`
          );
        } else if (errorMessage.toLowerCase().includes('permission') || errorMessage.toLowerCase().includes('insufficient')) {
          setError("Failed to load blogs due to a permission issue. Please check your Firestore security rules to ensure the 'blogs' collection is publicly readable.");
        } else {
          setError('An unexpected error occurred while loading blogs. Please check the console for details.');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="w-10 h-10 border-4 border-t-[#367FFD] border-gray-200 rounded-full animate-spin"></div>
      </div>
    );
  }

  if (error) {
    const urlMatch = error.match(/(https?:\/\/[^\s]+)/);
    const isBuildingError = error.toLowerCase().includes('index is being built');
    const isMissingIndexError = error.toLowerCase().includes('index is required');
    
    let title = 'An Error Occurred';
    let theme = {
      bg: 'bg-red-50',
      border: 'border-red-200',
      titleText: 'text-red-700',
      bodyText: 'text-red-600'
    };

    if(isBuildingError) {
      title = 'Database Index Building';
      theme = {
        bg: 'bg-blue-50',
        border: 'border-blue-200',
        titleText: 'text-blue-700',
        bodyText: 'text-blue-600'
      };
    } else if (isMissingIndexError) {
      title = 'Database Configuration Required';
    }

    const renderContent = () => {
      if (urlMatch) {
        const url = urlMatch[0];
        const textParts = error.split(url);
        return (
          <>
            {textParts[0]}
            <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-mono break-all block my-2">{url}</a>
            {textParts[1]}
          </>
        );
      }
      return error;
    };

    return (
      <div className={`text-center p-6 border rounded-lg ${theme.bg} ${theme.border}`}>
        <p className={`${theme.titleText} font-semibold text-lg`}>{title}</p>
        <p className={`${theme.bodyText} mt-2`}>
          {renderContent()}
        </p>
      </div>
    );
  }

  if (blogs.length === 0) {
    return <div id="blogs" className="text-center text-gray-500 text-xl italic">No blog posts yet. Stay tuned!</div>;
  }

  return (
    <div id="blogs" className="space-y-8">
      {blogs.map(blog => (
        <div key={blog.id} className="group">
          <Link to={`/blog/${blog.id}`}>
            <h2 className="text-3xl font-normal italic text-gray-800 group-hover:text-[#367FFD] transition-colors duration-300 mb-2">
              {blog.title}
            </h2>
          </Link>
          <p className="text-md text-gray-500 italic">
            {blog.createdAt ? new Date(blog.createdAt.seconds * 1000).toLocaleDateString() : 'Date not available'}
          </p>
        </div>
      ))}
    </div>
  );
};

export default BlogsSection;