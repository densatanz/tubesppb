// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDxQXIPZgwaOUAoe8klQzIiB7UYhf_me1A",
  authDomain: "tubes-mobile-c0cf2.firebaseapp.com",
  projectId: "tubes-mobile-c0cf2",
  storageBucket: "tubes-mobile-c0cf2.appspot.com",
  messagingSenderId: "322820821113",
  appId: "1:322820821113:web:edafc4203d5a03135e44a8",
  measurementId: "G-XSC17NVPC8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);