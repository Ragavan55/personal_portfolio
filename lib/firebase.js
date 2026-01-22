// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBfB3xSzGfV7foYz77ZQ4BCGnmli7oIyGA",
  authDomain: "contactdb-5c336.firebaseapp.com",
  projectId: "contactdb-5c336",
  storageBucket: "contactdb-5c336.firebasestorage.app",
  messagingSenderId: "517952108240",
  appId: "1:517952108240:web:9efdb0b1936be81de210d5",
  measurementId: "G-YYGCN4K3CL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);