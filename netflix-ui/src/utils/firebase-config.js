// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
    apiKey: "AIzaSyCHwFt4yjL_m5F0XYtLBko_nJicj5K7eXY",
    authDomain: "react-netflix-clone-anubhav.firebaseapp.com",
    projectId: "react-netflix-clone-anubhav",
    storageBucket: "react-netflix-clone-anubhav.appspot.com",
    messagingSenderId: "826754534821",
    appId: "1:826754534821:web:ab0310245067d7f3ea6c4c",
    measurementId: "G-9Q5Y5VQ49N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const firebaseAuth = getAuth(app);