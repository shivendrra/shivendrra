
// Fix: Use namespace imports for firebase modules to resolve module errors.
import * as app from "firebase/app";
import * as firestore from "firebase/firestore";
import * as fbAuth from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD3l4v7PbZX1e6HTHk58uFRZce4PT9I_mg",
  authDomain: "vyakul-portfolio.firebaseapp.com",
  projectId: "vyakul-portfolio",
  storageBucket: "vyakul-portfolio.appspot.com",
  messagingSenderId: "1091705167040",
  appId: "1:1091705167040:web:9f4e2c6b4d08a5173e9f2a"
};

const firebaseApp = app.initializeApp(firebaseConfig);

export const db = firestore.getFirestore(firebaseApp);
export const auth = fbAuth.getAuth(firebaseApp);
export const googleProvider = new fbAuth.GoogleAuthProvider();
export const serverTimestamp = firestore.serverTimestamp;
