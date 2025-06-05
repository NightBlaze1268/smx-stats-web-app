// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDHjw1a3gUtfwhBBqfrYLCrv8AzqeoxF2Y",
  authDomain: "smx-stats-c150c.firebaseapp.com",
  projectId: "smx-stats-c150c",
  storageBucket: "smx-stats-c150c.firebasestorage.app",
  messagingSenderId: "942166923927",
  appId: "1:942166923927:web:2ccb58adf287049cab67d2",
  measurementId: "G-E6F833EBCZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
