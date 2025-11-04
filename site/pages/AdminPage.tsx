import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db, serverTimestamp } from '../services/firebase';
import { useAuth } from '../hooks/useAuth';
import { Blog } from '../types';

declare const mammoth: any;
declare const marked: any;

const AdminPage: React.FC = () => {
  const { user, loading } = useAuth();
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [blogTitle, setBlogTitle] = useState('');
  const [blogContent, setBlogContent] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [isPublished, setIsPublished] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [editingBlogId, setEditingBlogId] = useState<string | null>(null);
  const [message, setMessage] = useState('');
  
  const isAdmin = user?.email === 'shivharsh44@gmail.com';

  useEffect(() => {
    if (!loading) {
      if (!user || !isAdmin) {
        navigate('/admin/auth');
      } else {
        fetchBlogs();
      }
    }
  }, [user, loading, isAdmin, navigate]);

  const fetchBlogs = async () => {
    try {
      const blogsCollectionRef = db.collection('blogs');
      const q = blogsCollectionRef.orderBy('createdAt', 'desc');
      const blogSnapshot = await q.get();
      const blogList = blogSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() } as Blog));
      setBlogs(blogList);
    } catch (err) {
      console.error("Error fetching blogs:", err);
      setMessage('Failed to load blogs.');
    }
  };
  
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();

    if (file.name.endsWith('.docx')) {
      reader.onload = async (e) => {
        const arrayBuffer = e.target?.result;
        if (arrayBuffer) {
          try {
            const result = await mammoth.convertToHtml({ arrayBuffer });
            setBlogContent(result.value);
          } catch (error) {
            console.error('Error parsing .docx file', error);
            setMessage('Failed to parse .docx file.');
          }
        }
      };
      reader.readAsArrayBuffer(file);
    } else if (file.name.endsWith('.md')) {
        reader.onload = async (e) => {
            const text = e.target?.result as string;
            if (text) {
                const html = marked.parse(text);
                setBlogContent(html);
            }
        };
        reader.readAsText(file);
    } else {
      reader.onload = (e) => {
        const text = e.target?.result as string;
        if (text) {
          setBlogContent(text);
        }
      };
      reader.readAsText(file);
    }
    event.target.value = '';
  };

  const handleSignOut = async () => {
    try {
      await auth.signOut();
      navigate('/admin/auth');
    } catch (error) {
      console.error("Error signing out: ", error);
    }
  };
  
  const resetForm = () => {
    setBlogTitle('');
    setBlogContent('');
    setImageUrl('');
    setIsPublished(true);
    setEditingBlogId(null);
  };

  const handleSubmit = async () => {
    if (!blogTitle.trim() || !blogContent.trim()) {
      setMessage('Title and content cannot be empty.');
      return;
    }
    setIsSubmitting(true);
    setMessage('');
    try {
      const data = {
        title: blogTitle,
        content: blogContent,
        imageUrl: imageUrl,
        isPublished: isPublished,
      };

      if (editingBlogId) {
        const blogRef = db.collection('blogs').doc(editingBlogId);
        await blogRef.update(data);
        setMessage('Blog updated successfully!');
      } else {
        await db.collection('blogs').add({
          ...data,
          createdAt: serverTimestamp(),
        });
        setMessage('Blog uploaded successfully!');
      }
      resetForm();
      fetchBlogs(); 
    } catch (error) {
      console.error("Error submitting document: ", error);
      setMessage('An error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };
  
  const handleEdit = (blog: Blog) => {
    setEditingBlogId(blog.id);
    setBlogTitle(blog.title);
    setBlogContent(blog.content);
    setImageUrl(blog.imageUrl || '');
    setIsPublished(blog.isPublished === undefined ? true : blog.isPublished);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const handleDelete = async (blogId: string) => {
    if (window.confirm('Are you sure you want to delete this blog post?')) {
      try {
        await db.collection('blogs').doc(blogId).delete();
        setMessage('Blog deleted successfully!');
        fetchBlogs();
      } catch (error) {
        console.error("Error deleting document: ", error);
        setMessage('Error deleting blog. Please try again.');
      }
    }
  };
  
  if (loading || !user || !isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="w-10 h-10 border-4 border-t-[#367FFD] border-gray-200 rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container bg-white p-8 shadow-2xl py-12">
        <div className="flex justify-between items-center mb-10">
          <div>
            <h2 className="text-3xl font-normal italic">Blog Management</h2>
            <p className="text-gray-500">Welcome, {user?.displayName}</p>
          </div>
          <button onClick={handleSignOut} className="bg-red-500 text-white py-2 px-4 hover:bg-red-600 transition-colors">Sign Out</button>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-12">
          {/* Form Section */}
          <div className="space-y-6">
            <h3 className="text-2xl font-normal italic border-b pb-2">{editingBlogId ? 'Edit Blog' : 'Create New Blog'}</h3>
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="blog-title">Blog Title</label>
              <input id="blog-title" type="text" value={blogTitle} onChange={(e) => setBlogTitle(e.target.value)} className="w-full p-2 border border-gray-300" placeholder="Enter blog title"/>
            </div>
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="image-url">Image URL (optional)</label>
              <input id="image-url" type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} className="w-full p-2 border border-gray-300" placeholder="e.g., https://unsplash.com/your-image.jpg"/>
            </div>
             <div>
                <label className="block text-gray-700 mb-2" htmlFor="file-upload">Upload Content (.txt, .md, .docx)</label>
                <input id="file-upload" type="file" onChange={handleFileChange} accept=".txt,.md,.docx" className="w-full p-2 border border-gray-300" />
              </div>
            <div>
              <label className="block text-gray-700 mb-2" htmlFor="blog-content">Blog Content (HTML)</label>
              <textarea 
                id="blog-content" 
                value={blogContent}
                onChange={(e) => setBlogContent(e.target.value)}
                className="w-full p-2 border border-gray-300 min-h-[300px] font-mono text-sm"
                placeholder="Enter your blog content as raw HTML..."
              />
            </div>
            <div className="flex items-center gap-4">
                <input type="checkbox" id="isPublished" checked={isPublished} onChange={(e) => setIsPublished(e.target.checked)} className="h-5 w-5"/>
                <label htmlFor="isPublished" className="text-gray-700">Published</label>
            </div>
            <div className="flex gap-4">
              <button onClick={handleSubmit} disabled={isSubmitting} className="flex-grow bg-[#367FFD] text-white py-3 px-4 hover:bg-blue-600 transition-colors disabled:bg-gray-400">
                {isSubmitting ? 'Submitting...' : (editingBlogId ? 'Update Blog' : 'Upload Blog')}
              </button>
              {editingBlogId && (
                <button onClick={resetForm} className="bg-gray-500 text-white py-3 px-4 hover:bg-gray-600 transition-colors">
                  Cancel Edit
                </button>
              )}
            </div>
            {message && <p className="mt-4 text-center">{message}</p>}
          </div>

          {/* Blog List Section */}
          <div className="space-y-4 mt-12 lg:mt-0">
            <h3 className="text-2xl font-normal italic border-b pb-2">Manage Blogs</h3>
            {blogs.length > 0 ? (
              <ul className="divide-y divide-gray-200">
                {blogs.map(blog => (
                  <li key={blog.id} className="py-4 flex justify-between items-center">
                    <div>
                      <p className="font-semibold text-lg flex items-center gap-2">
                          {blog.title}
                          <span className={`text-xs font-mono px-2 py-0.5 rounded-full ${blog.isPublished ?? true ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                              {blog.isPublished ?? true ? 'Published' : 'Draft'}
                          </span>
                      </p>
                      <p className="text-sm text-gray-500">
                        {blog.createdAt ? new Date(blog.createdAt.seconds * 1000).toLocaleDateString() : 'No date'}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      <button onClick={() => handleEdit(blog)} className="bg-gray-200 text-gray-700 py-1 px-3 hover:bg-gray-300 transition-colors text-sm">Edit</button>
                      <button onClick={() => handleDelete(blog.id)} className="bg-red-100 text-red-700 py-1 px-3 hover:bg-red-200 transition-colors text-sm">Delete</button>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500 italic">No blogs found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;