
import React, { useState, useEffect } from 'react';
// Fix: Use named imports for react-router-dom to resolve module errors.
import { useNavigate } from 'react-router-dom';
// Fix: Use namespace import for firebase/auth to resolve module errors.
import * as fbAuth from 'firebase/auth';
import { auth, googleProvider } from '../services/firebase';
import useAuth from '../hooks/useAuth';

const AdminAuthPage: React.FC = () => {
  // Fix: Use useNavigate hook directly.
  const navigate = useNavigate();
  const { user, loading } = useAuth();
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!loading && user && user.email === 'shivharsh44@gmail.com') {
      navigate('/admin/blog');
    }
  }, [user, loading, navigate]);

  const handleSignIn = async () => {
    setError(null);
    try {
      const result = await fbAuth.signInWithPopup(auth, googleProvider);
      const credentialUser = result.user as fbAuth.User;

      if (credentialUser.email !== 'shivharsh44@gmail.com') {
        setError('Access denied. This account is not authorized.');
        await fbAuth.signOut(auth);
      } else {
        navigate('/admin/blog');
      }
    } catch (error) {
      console.error("Authentication error:", error);
      setError('Failed to sign in. Please try again.');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <div className="max-w-md w-full bg-white p-8 rounded shadow-lg text-center">
        <h1 className="text-2xl font-bold text-zinc-800 mb-2">Admin Access</h1>
        <p className="text-zinc-600 mb-6">Please sign in to manage blog content.</p>
        <button
          onClick={handleSignIn}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out flex items-center justify-center"
        >
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M22.56,12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26,1.37-1.04,2.53-2.21,3.31v2.77h3.57c2.08-1.92,3.28-4.74,3.28-8.09Z" /><path d="M12,23c2.97,0,5.46-.98,7.28-2.66l-3.57-2.77c-.98,.66-2.23,1.06-3.71,1.06-2.86,0-5.29-1.93-6.16-4.53H2.18v2.84C3.99,20.53,7.7,23,12,23Z" /><path d="M5.84,14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43,.35-2.09V7.07H2.18C1.43,8.55,1,10.22,1,12s.43,3.45,1.18,4.93l3.66-2.84Z" /><path d="M12,5.38c1.62,0,3.06,.56,4.21,1.64l3.15-3.15C17.45,2.09,14.97,1,12,1,7.7,1,3.99,3.47,2.18,7.07l3.66,2.84c.87-2.6,3.3-4.53,6.16-4.53Z" /></svg>
          Sign in with Google
        </button>
        {error && <p className="text-red-500 mt-4">{error}</p>}
      </div>
    </div>
  );
};

export default AdminAuthPage;
