import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import Footer from './Footer';

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
      setBlogDate(location.state.date);
    }
  }, [location.state]);

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <div className="blog-page row">
        <div className="col-lg-12">
          <h2 className='text-center'>{name.replace(/-/g, ' ')}</h2>
          <div className="container pt-3">
            <div className="col-lg-12 details">
              <p className='text-start my-3'><em><strong>date: {blogDate}</strong></em></p>
            </div>
            <br />
            <br />
            <div className="container content mx-auto">
              <pre>{blogContent}</pre>
            </div>
          </div>
        </div>
        <br />
        <hr style={{ width: '30%', margin: 'auto' }} />
        <br /><br />
        <Footer />
      </div>
    </>
  );
}
