// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCE0NbulyMuPWFu7iHIUYB0CrID3XHlgV8",
  authDomain: "juntagobierno-3daac.firebaseapp.com",
  projectId: "juntagobierno-3daac",
  storageBucket: "juntagobierno-3daac.appspot.com",
  messagingSenderId: "541763420894",
  appId: "1:541763420894:web:275a4cf9fe6d499eadb84f",
  measurementId: "G-4TMQ9751TV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);