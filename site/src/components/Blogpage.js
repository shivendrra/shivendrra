import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Footer from './Footer';
import './styles/BlogPage.css';

export default function BlogPage() {
  const { name } = useParams();
  const location = useLocation();
  const [blogContent, setBlogContent] = useState('');
  const [blogDate, setBlogDate] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const res = await fetch(`https://shivendrra-portfolio-backend.vercel.app/api/blogs/${name}`);
        if (!res.ok) {
          throw new Error('Blog not found.');
        }
        const data = await res.json();
        setBlogContent(data.content);
        setBlogDate(data.date);
        console.log(data.date);
      } catch (err) {
        console.error('Error fetching blog:', err);
        setBlogContent('Blog not found.');
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [name]);

  useEffect(() => {
    if (location.state && location.state.date) {
      console.log(location.state.date);
      setBlogDate(location.state.date);
    }
  }, [location.state]);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p className="loading-text">Loading...</p>
      </div>
    );
  }

  return (
    <div className="blog-page-wrapper">
      <div className="container-fluid">
        <div className="row justify-content-center m-auto">
          <div className="col-12 col-lg-10 col-xl-8">
            {/* Blog Header */}
            <header className="blog-header">
              <h1 className="blog-title">{name.replace(/-/g, ' ')}</h1>
              <div className="blog-meta">
                <span className="blog-date text-center">
                  /
                  {blogDate}
                  /
                </span>
              </div>
            </header>

            {/* Blog Content */}
            <main className="blog-content-wrapper">
              <div className="blog-content">
                <pre className="blog-text">{blogContent}</pre>
              </div>
            </main>

            {/* Blog Footer Divider */}
            <div className="blog-divider">
              <hr className="divider-line" />
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
}