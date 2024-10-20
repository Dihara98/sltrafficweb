// Mobile Menu Toggle
const menu = document.getElementById('menu');
const mobileMenu = document.getElementById('mobile-menu');

// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Your Firebase app's configuration details
const firebaseConfig = {
  apiKey: "AIzaSyBQxdm8IHp8lcmtftgCA36N0mqAk8BbQLQ",
  authDomain: "trafficapp-12e86.firebaseapp.com",
  projectId: "trafficapp-12e86",
  storageBucket: "trafficapp-12e86.appspot.com",
  messagingSenderId: "49020747264",
  appId: "1:49020747264:web:842afcee31ef7483eae2e5",
  measurementId: "G-YV82K26092"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics (optional)
const analytics = getAnalytics(app);


mobileMenu.addEventListener('click', function() {
    menu.classList.toggle('open');
});

// Login button functionality
document.getElementById('login-btn').addEventListener('click', function() {
    alert("Login button clicked! Redirecting to login page...");
    // Here you can redirect to the login page or show a login form modal
});
