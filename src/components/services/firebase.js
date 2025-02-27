import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: import.meta.env.VITE_GOOGLE_FIREBASE_API_KEY,
  authDomain: "trip-planner-c28fc.firebaseapp.com",
  projectId: "trip-planner-c28fc",
  storageBucket: "trip-planner-c28fc.firebasestorage.app",
  messagingSenderId: "818982256419",
  appId: "1:818982256419:web:181646a5c840f6f91b9696",
  measurementId: "G-BWFK8JLYXV"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)