
import React, { useState, useEffect } from 'react';
import { collection, query, getDocs, Timestamp } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import { db } from '../services/firebase';
import { Blog } from '../types';
import Footer from '../components/Footer';

const BlogListPage: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
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

  return (
    <>
      <header className="py-10 px-6 md:px-8">
        <div className="max-w-3xl mx-auto">
          <Link to="/" className="text-3xl font-google-sans">
            व्याकुल
          </Link>
        </div>
      </header>
      <main className="min-h-screen px-6 md:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="pb-16">
            <h1 className="text-4xl font-normal mb-10">Posts</h1>
            {loading ? (
              <div className="flex justify-center items-center h-40">
                <div className="w-10 h-10 border-4 border-t-primary border-gray-200 rounded-full animate-spin"></div>
              </div>
            ) : (
              <div className="border-t border-zinc-200">
                {blogs.length > 0 ? (
                  blogs.map(blog => {
                    const date = blog.date instanceof Timestamp ? blog.date.toDate() : new Date(blog.date as string);
                    const formattedDate = !isNaN(date.getTime())
                      ? date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
                      : 'Date not available';

                    return (
                      <Link
                        to={`/blog/${blog.id}`}
                        key={blog.id}
                        className="block border-b border-zinc-200 group transition-colors duration-300 hover:bg-zinc-50/75 py-6"
                      >
                        <p className="text-base text-zinc-500 font-instrument-sans mb-1">{formattedDate}</p>
                        <h3 className="text-2xl font-normal text-zinc-800 group-hover:text-primary transition-colors duration-300">{blog.title}</h3>
                      </Link>
                    );
                  })
                ) : (
                  <p className="py-10 text-center text-zinc-500 italic">No blog posts found.</p>
                )}
              </div>
            )}
          </div>
          <hr className="border-zinc-200" />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default BlogListPage;
