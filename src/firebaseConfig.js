// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCEqvqL8uKImJzsR9bnWW59k-AhYBHH_CE",
  authDomain: "uta-finance-tracker.firebaseapp.com",
  projectId: "uta-finance-tracker",
  storageBucket: "uta-finance-tracker.firebasestorage.app",
  messagingSenderId: "282079571377",
  appId: "1:282079571377:web:e13cf3c92c30d026602190",
  measurementId: "G-P2XM8T81YQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app); // Optional: only needed if using analytics

// Initialize Firestore
const db = getFirestore(app);

// Export Firestore for use in other parts of your app
export { db };




