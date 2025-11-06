

import React, { useState, useEffect, useCallback } from 'react';
// Fix: Use named imports for firebase/firestore to resolve module errors.
import {
  collection,
  query,
  getDocs,
  doc,
  updateDoc,
  addDoc,
  serverTimestamp,
  Timestamp,
  deleteDoc
} from 'firebase/firestore';
// Fix: Use namespace import for firebase/auth to resolve module errors.
import * as fbAuth from 'firebase/auth';
import { auth, db } from '../services/firebase';
// Fix: Use namespace import for react-router-dom to resolve module errors.
import * as ReactRouterDOM from 'react-router-dom';
import { Blog } from '../types';

const AdminBlogPage: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [content, setContent] = useState('');
  const [editingBlog, setEditingBlog] = useState<Blog | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = ReactRouterDOM.useNavigate();

  const blogsCollectionRef = collection(db, "blogs");

  const fetchBlogs = useCallback(async () => {
    setIsLoading(true);
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
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchBlogs();
  }, [fetchBlogs]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editingBlog) {
      const blogDoc = doc(db, "blogs", editingBlog.id);
      await updateDoc(blogDoc, { title, date, imageUrl, content });
      setEditingBlog(null);
    } else {
      await addDoc(blogsCollectionRef, { title, date, imageUrl, content, createdAt: serverTimestamp() });
    }
    setTitle('');
    setDate('');
    setImageUrl('');
    setContent('');
    fetchBlogs();
  };

  const handleEdit = (blog: Blog) => {
    setEditingBlog(blog);
    setTitle(blog.title);
    
    let dateValue = '';
    if (blog.date) {
      // Handles both Firestore Timestamp and date strings
      const dateObj = blog.date instanceof Timestamp ? blog.date.toDate() : new Date(blog.date as string);
      if (!isNaN(dateObj.getTime())) {
        // Format to YYYY-MM-DD for the <input type="date">
        dateValue = dateObj.toISOString().split('T')[0];
      }
    }
    setDate(dateValue);

    setImageUrl(blog.imageUrl);
    setContent(blog.content);
    window.scrollTo(0, 0);
  };

  const handleDelete = async (id: string) => {
    if (window.confirm("Are you sure you want to delete this blog post?")) {
      const blogDoc = doc(db, "blogs", id);
      await deleteDoc(blogDoc);
      fetchBlogs();
    }
  };

  const handleSignOut = async () => {
    await fbAuth.signOut(auth);
    navigate('/admin/auth');
  };

  const cancelEdit = () => {
    setEditingBlog(null);
    setTitle('');
    setDate('');
    setImageUrl('');
    setContent('');
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-zinc-800">Admin - Manage Blogs</h1>
          <button onClick={handleSignOut} className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition duration-300">Sign Out</button>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-zinc-700">{editingBlog ? 'Edit Blog' : 'Upload New Blog'}</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input type="text" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} required className="w-full p-2 border border-gray-300 rounded" />
            <input type="date" placeholder="Date" value={date} onChange={e => setDate(e.target.value)} required className="w-full p-2 border border-gray-300 rounded" />
            <input type="text" placeholder="Image URL" value={imageUrl} onChange={e => setImageUrl(e.target.value)} required className="w-full p-2 border border-gray-300 rounded" />
            <textarea placeholder="Content (HTML)" value={content} onChange={e => setContent(e.target.value)} required rows={10} className="w-full p-2 border border-gray-300 rounded font-mono"></textarea>
            <div className="flex gap-4">
              <button type="submit" className="bg-primary hover:bg-blue-600 text-white font-bold py-2 px-6 rounded transition duration-300">{editingBlog ? 'Update' : 'Upload'}</button>
              {editingBlog && <button type="button" onClick={cancelEdit} className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-6 rounded transition duration-300">Cancel</button>}
            </div>
          </form>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-4 text-zinc-700">Manage Blogs</h2>
          {isLoading ? <p>Loading blogs...</p> : (
            <ul className="space-y-4">
              {blogs.map(blog => (
                <li key={blog.id} className="p-4 border rounded-md flex justify-between items-center flex-wrap gap-4">
                  <div>
                    <h3 className="font-bold text-lg">{blog.title}</h3>
                    <p className="text-sm text-gray-500">
                      {(() => {
                        if (!blog.date) return 'Date not specified';
                        const dateObj = blog.date instanceof Timestamp ? blog.date.toDate() : new Date(blog.date as string);
                        if (isNaN(dateObj.getTime())) return 'Invalid Date';
                        return dateObj.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
                      })()}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <button onClick={() => handleEdit(blog)} className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-1 px-3 rounded text-sm transition duration-300">Edit</button>
                    <button onClick={() => handleDelete(blog.id)} className="bg-red-500 hover:bg-red-600 text-white font-bold py-1 px-3 rounded text-sm transition duration-300">Delete</button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default AdminBlogPage;