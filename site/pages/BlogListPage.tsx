
import React, { useState, useEffect } from 'react';
import { collection, query, getDocs, Timestamp } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import { db } from '../services/firebase';
import { Blog } from '../types';
import Footer from '../components/Footer';

const BlogListPage: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [filteredBlogs, setFilteredBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

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
        setFilteredBlogs(fetchedBlogs);

        // Extract unique categories
        const cats = ['All', ...Array.from(new Set(fetchedBlogs.map(b => b.category).filter(Boolean) as string[]))];
        setCategories(cats);

      } catch (error) {
        console.error("Error fetching blogs: ", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    if (category === 'All') {
      setFilteredBlogs(blogs);
    } else {
      setFilteredBlogs(blogs.filter(blog => blog.category === category));
    }
  };

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
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
              <h1 className="text-4xl font-normal">Posts</h1>

              {categories.length > 1 && (
                <div className="flex flex-wrap gap-2">
                  {categories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => handleCategoryClick(cat)}
                      className={`px-3 py-1 rounded-full text-sm transition-colors duration-200 border ${selectedCategory === cat
                          ? 'bg-zinc-800 text-white border-zinc-800'
                          : 'bg-white text-zinc-500 border-zinc-200 hover:border-zinc-400 hover:text-zinc-800'
                        }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {loading ? (
              <div className="flex justify-center items-center h-40">
                <div className="w-10 h-10 border-4 border-t-primary border-gray-200 rounded-full animate-spin"></div>
              </div>
            ) : (
              <div className="border-t border-zinc-200">
                {filteredBlogs.length > 0 ? (
                  filteredBlogs.map(blog => {
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
                        <div className="flex items-center gap-2 mb-1">
                          <p className="text-base text-zinc-500 font-instrument-sans">{formattedDate}</p>
                          {blog.category && (
                            <>
                              <span className="text-zinc-300">•</span>
                              <span className="text-sm font-medium text-primary uppercase tracking-wide">{blog.category}</span>
                            </>
                          )}
                        </div>
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
          {/* <hr className="border-zinc-200" /> */}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default BlogListPage;