// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.0.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-analytics.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDWhLCDKpjVYtlEXOO7pj2yJZ7PZacmuMU",
  authDomain: "uhabprotect.firebaseapp.com",
  projectId: "uhabprotect",
  storageBucket: "uhabprotect.appspot.com",
  messagingSenderId: "405024312064",
  appId: "1:405024312064:web:cd56a5d94171c2ac3b01e5",
  measurementId: "G-Y34VJ31KTG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);