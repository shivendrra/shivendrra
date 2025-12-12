
import React, { useState, useEffect } from 'react';
// Fix: Use named imports for firebase/firestore to resolve module errors.
import { collection, query, getDocs, Timestamp } from 'firebase/firestore';
// Fix: Use namespace import for react-router-dom to resolve module errors.
import * as ReactRouterDOM from 'react-router-dom';
import { db } from '../services/firebase';
import { Blog } from '../types';

const Blogs: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const blogsCollectionRef = collection(db, "blogs");
        const q = query(blogsCollectionRef);
        const data = await getDocs(q);

        let fetchedBlogs = data.docs.map(doc => ({ ...doc.data(), id: doc.id } as Blog));

        fetchedBlogs = fetchedBlogs
          .filter(blog => blog.date)
          .sort((a, b) => {
            const dateA = a.date instanceof Timestamp ? a.date.toMillis() : new Date(a.date as string).getTime();
            const dateB = b.date instanceof Timestamp ? b.date.toMillis() : new Date(b.date as string).getTime();
            if (isNaN(dateA)) return 1;
            if (isNaN(dateB)) return -1;
            return dateB - dateA;
          });

        setBlogs(fetchedBlogs);
      } catch (error) {
        console.error("Error fetching blogs: ", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-40">
        <div className="w-10 h-10 border-4 border-t-primary border-gray-200 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="border-b border-zinc-200">
      {blogs.length > 0 ? (
        blogs.map(blog => {
          const date = blog.date instanceof Timestamp ? blog.date.toDate() : new Date(blog.date as string);
          const formattedDate = !isNaN(date.getTime())
            ? date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
            : 'Date not available';

          return (
            <ReactRouterDOM.Link
              to={`/blog/${blog.id}`}
              key={blog.id}
              className="block border-t border-zinc-200 group transition-colors duration-300 hover:bg-zinc-50/75 p-8"
            >
              <h3 className="text-3xl font-normal text-zinc-800 group-hover:text-primary transition-colors duration-300 mb-3">{blog.title}</h3>
              <p className="text-lg text-zinc-500 font-instrument-sans">{formattedDate}</p>
            </ReactRouterDOM.Link>
          );
        })
      ) : (
        <p className="py-10 text-center text-zinc-500 italic">No blog posts found.</p>
      )}
    </div>
  );
};

export default Blogs;