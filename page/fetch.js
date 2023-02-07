import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDxQXIPZgwaOUAoe8klQzIiB7UYhf_me1A",
  authDomain: "tubes-mobile-c0cf2.firebaseapp.com",
  projectId: "tubes-mobile-c0cf2",
  storageBucket: "tubes-mobile-c0cf2.appspot.com",
  messagingSenderId: "322820821113",
  appId: "1:322820821113:web:edafc4203d5a03135e44a8",
  measurementId: "G-XSC17NVPC8",
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
