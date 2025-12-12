
import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AdminAuthPage from './pages/AdminAuthPage';
import AdminBlogPage from './pages/AdminBlogPage';
import useAuth from './hooks/useAuth';
import BlogPage from './pages/BlogPage';
import BlogListPage from './pages/BlogListPage';

const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center bg-white text-zinc-800">Loading...</div>;
  }
  
  if (user && user.email === 'shivharsh44@gmail.com') {
    return <>{children}</>;
  }

  return <Navigate to="/admin/auth" replace />;
};

const App: React.FC = () => {
  return (
    <div className="bg-white font-instrument-serif text-zinc-800 leading-relaxed overflow-x-hidden">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/blog" element={<BlogListPage />} />
          <Route path="/blog/:blogId" element={<BlogPage />} />
          <Route path="/admin/auth" element={<AdminAuthPage />} />
          <Route 
            path="/admin/blog" 
            element={
              <PrivateRoute>
                <AdminBlogPage />
              </PrivateRoute>
            } 
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
