// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdZyqS96vC2IfwvBX8fAWwVI6cDe4sB-E",
  authDomain: "vite-contact-5dfb8.firebaseapp.com",
  projectId: "vite-contact-5dfb8",
  storageBucket: "vite-contact-5dfb8.firebasestorage.app",
  messagingSenderId: "557509249094",
  appId: "1:557509249094:web:091c6f64f4f35c91fde247",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
