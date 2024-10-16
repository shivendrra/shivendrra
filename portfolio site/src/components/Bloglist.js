import React from 'react';
import { Link } from 'react-router-dom';

const blogs = [
  'idealism-&-passion-in-youth',
  'i-guess-thats-life',
  'after-a-fall',
  'eighteen'
];

export default function BlogList() {
  return (
    <div className="blog-list">
      {blogs.map((blog) => (
        <div key={blog} className="blog-item">
          <Link to={`/blogs/${blog}`}>{blog.replace(/-/g, ' ')}</Link>
        </div>
      ))}
    </div>
  );
}
