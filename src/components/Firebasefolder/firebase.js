// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage"



// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBeWwjJClTjGS9wCxkpVtpm3SHhHsRJix8",
  authDomain: "doctor-consulting-6ad62.firebaseapp.com",
  projectId: "doctor-consulting-6ad62",
  storageBucket: "doctor-consulting-6ad62.appspot.com",
  messagingSenderId: "1044285946950",
  appId: "1:1044285946950:web:25cd43a52fd5b7f0459e47",
  measurementId: "G-79D77G8SMN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);