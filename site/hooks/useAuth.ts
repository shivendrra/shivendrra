
import { useState, useEffect } from 'react';
// Fix: Use namespace import for firebase/auth to resolve module errors.
import * as fbAuth from 'firebase/auth';
import { auth } from '../services/firebase';

const useAuth = () => {
  const [user, setUser] = useState<fbAuth.User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = fbAuth.onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  return { user, loading };
};

export default useAuth;
