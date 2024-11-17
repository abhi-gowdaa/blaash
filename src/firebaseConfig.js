import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB34z3cO2Osajx7-Cdx8yKupLHvbzn3oDY",
  authDomain: "playlist-d6e9a.firebaseapp.com",
  projectId: "playlist-d6e9a",
  storageBucket: "playlist-d6e9a.firebasestorage.app",
  messagingSenderId: "575774437990",
  appId: "1:575774437990:web:ffb978f50e22e9f29ab3a7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);