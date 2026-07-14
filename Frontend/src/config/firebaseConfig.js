// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "exam-prep-engine.firebaseapp.com",
  projectId: "exam-prep-engine",
  storageBucket: "exam-prep-engine.firebasestorage.app",
  messagingSenderId: "1061321859489",
  appId: "1:1061321859489:web:7a07c30bc696ad4bebabe0",
  measurementId: "G-WTNBK2PEGC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
