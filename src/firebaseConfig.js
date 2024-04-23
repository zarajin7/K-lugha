// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdby9adwpz8EspNhd0JIzEdAhf00CAMQg",
  authDomain: "k-lugha-be2c6.firebaseapp.com",
  projectId: "k-lugha-be2c6",
  storageBucket: "k-lugha-be2c6.appspot.com",
  messagingSenderId: "48756828498",
  appId: "1:48756828498:web:471195a4ea941238aa328b",
  measurementId: "G-C263MSVGM0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
