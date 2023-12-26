// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5kucWBbhxF05E4aFhdwqyvaUn19Jdmn0",
  authDomain: "netflixgpt-dec1a.firebaseapp.com",
  projectId: "netflixgpt-dec1a",
  storageBucket: "netflixgpt-dec1a.appspot.com",
  messagingSenderId: "627504586199",
  appId: "1:627504586199:web:25730feedaab6ae171bf92",
  measurementId: "G-L5YEVBTRW7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
