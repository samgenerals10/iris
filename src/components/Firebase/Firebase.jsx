// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore}from  'firebase/firestore'
import {getStorage}from  'firebase/storage'
import {getAnalytics}from  'firebase/analytics'





// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA71x9N8eJKLgrCtqcetkdSCkQEsqiLKnM",
  authDomain: "borla-car-a5061.firebaseapp.com",
  projectId: "borla-car-a5061",
  storageBucket: "borla-car-a5061.appspot.com",
  messagingSenderId: "1003244055558",
  appId: "1:1003244055558:web:1a03cd7c387464e269a787",
  measurementId: "G-R293DK29TE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth= getAuth()
export const db = getFirestore(app)
export const storage = getStorage(app)
export const analytics = getAnalytics(app);
