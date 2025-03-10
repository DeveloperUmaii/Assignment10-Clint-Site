
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDPHsQJYuWORpEof2yRqZvY4iP2xSkI188",
  authDomain: "assignment-10-5e5b1.firebaseapp.com",
  projectId: "assignment-10-5e5b1",
  storageBucket: "assignment-10-5e5b1.firebasestorage.app",
  messagingSenderId: "816525418143",
  appId: "1:816525418143:web:c9fc4d94516cfcf25b4caa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);