import React, { useEffect } from 'react';
// Fix: Use named import for firebase/firestore to resolve module errors.
import { Timestamp } from 'firebase/firestore';
import { Blog } from '../types';

interface BlogModalProps {
  blog: Blog;
  onClose: () => void;
}

const BlogModal: React.FC<BlogModalProps> = ({ blog, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  const date = blog.date instanceof Timestamp ? blog.date.toDate() : new Date(blog.date as string);
  const formattedDate = !isNaN(date.getTime())
    ? date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
    : 'Date not available';

  return (
    <div 
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[2000] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div 
        className="bg-white max-w-4xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 md:p-12 relative shadow-2xl animate-fade-in"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center text-zinc-800 hover:text-primary hover:rotate-90 transition-all duration-300"
        >
          <span className="material-symbols-outlined text-3xl">close</span>
        </button>
        <div className="pb-6 mb-8 border-b border-gray-200">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal italic text-zinc-800 mb-2">{blog.title}</h2>
          <p className="text-lg italic text-zinc-500">{formattedDate}</p>
        </div>
        <div 
          className="prose prose-lg max-w-none text-xl text-zinc-600 leading-relaxed space-y-6"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        >
        </div>
      </div>
    </div>
  );
};

export default BlogModal;