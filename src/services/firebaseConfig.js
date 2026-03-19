import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAYoPsHnMDDkDtDuzDNmmhFfev7JYuor44",
  authDomain: "glitch-market.firebaseapp.com",
  projectId: "glitch-market",
  storageBucket: "glitch-market.firebasestorage.app",
  messagingSenderId: "728176694431",
  appId: "1:728176694431:web:e2d415098e80e2dc7cbeaa"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);