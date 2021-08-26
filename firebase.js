// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCH09L4i49i-xi6ZBF6ps5GscgNOTfXabM",
  authDomain: "grindstone-c0642.firebaseapp.com",
  projectId: "grindstone-c0642",
  storageBucket: "grindstone-c0642.appspot.com",
  messagingSenderId: "488452110279",
  appId: "1:488452110279:web:c38ca051cbc653b36e8be2",
  measurementId: "G-QH72MGPVLK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);