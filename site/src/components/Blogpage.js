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
            <hr style={{ width: '100%', margin: 'auto' }} />
            <div className="col-lg-12 details">
              <div className="col-lg-6 col-sm-6 date">
                <p className='text-start my-3'>date: {blogDate}</p>
              </div>
              <div className="col-lg-6 col-sm-6 text-end icons">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-star ms-4" viewBox="0 0 16 16">
                  <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-file-earmark-arrow-down ms-4" viewBox="0 0 16 16">
                  <path d="M8.5 6.5a.5.5 0 0 0-1 0v3.793L6.354 9.146a.5.5 0 1 0-.708.708l2 2a.5.5 0 0 0 .708 0l2-2a.5.5 0 0 0-.708-.708L8.5 10.293z" />
                  <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-share ms-4" viewBox="0 0 16 16">
                  <path d="M13.5 1a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3M11 2.5a2.5 2.5 0 1 1 .603 1.628l-6.718 3.12a2.5 2.5 0 0 1 0 1.504l6.718 3.12a2.5 2.5 0 1 1-.488.876l-6.718-3.12a2.5 2.5 0 1 1 0-3.256l6.718-3.12A2.5 2.5 0 0 1 11 2.5m-8.5 4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m11 5.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3" />
                </svg>
              </div>
            </div>
            <hr style={{ width: '100%', margin: 'auto' }} />
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
