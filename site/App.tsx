import React from 'react';
import * as ReactRouterDOM from 'react-router-dom';
import HomePage from './pages/HomePage';
import AdminAuthPage from './pages/AdminAuthPage';
import AdminBlogPage from './pages/AdminBlogPage';
import useAuth from './hooks/useAuth';
import BlogPage from './pages/BlogPage';

const PrivateRoute: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user, loading } = useAuth();

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center bg-white text-zinc-800">Loading...</div>;
  }

  if (user && user.email === 'shivharsh44@gmail.com') {
    return <>{children}</>;
  }

  return <ReactRouterDOM.Navigate to="/admin/auth" replace />;
};

const App: React.FC = () => {
  return (
    <div className="bg-white font-instrument-serif text-zinc-800 leading-relaxed overflow-x-hidden">
      <ReactRouterDOM.HashRouter>
        <ReactRouterDOM.Routes>
          <ReactRouterDOM.Route path="/" element={<HomePage />} />
          <ReactRouterDOM.Route path="/blog/:blogId" element={<BlogPage />} />
          <ReactRouterDOM.Route path="/admin/auth" element={<AdminAuthPage />} />
          <ReactRouterDOM.Route
            path="/admin/blog"
            element={
              <PrivateRoute>
                <AdminBlogPage />
              </PrivateRoute>
            }
          />
        </ReactRouterDOM.Routes>
      </ReactRouterDOM.HashRouter>
    </div>
  );
};

export default App;