// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCRyqNQj0nHElpi0e3po4gt6GUAhV7hl6I",
  authDomain: "k-lugha.firebaseapp.com",
  projectId: "k-lugha",
  storageBucket: "k-lugha.appspot.com",
  messagingSenderId: "1066933439994",
  appId: "1:1066933439994:web:a33aa474b1ed1ec171a843",
  measurementId: "G-0JRHDMFTCC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth =getAuth(app);