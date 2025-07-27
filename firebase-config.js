// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCA6tCgXGwjJKJ8ewBwrQdWJMzw4TBlQRs",
  authDomain: "nexa-auth-e9e2e.firebaseapp.com",
  projectId: "nexa-auth-e9e2e",
  storageBucket: "nexa-auth-e9e2e.appspot.com",
  messagingSenderId: "470482843400",
  appId: "1:470482843400:web:4ecae871788fd9b7a81ebd",
  measurementId: "G-SRGZFPMJGR"
};

// Initialize Firebase and Auth
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
