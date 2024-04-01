import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA5sp_eV-bwriLf4-lFT5WyWqcqDNfwFNw",
  authDomain: "trendloom-ea233.firebaseapp.com",
  projectId: "trendloom-ea233",
  storageBucket: "trendloom-ea233.appspot.com",
  messagingSenderId: "813877541956",
  appId: "1:813877541956:web:b804652875522aad329011"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const fireDB = getFirestore(app);
const auth = getAuth(app);
export {fireDB,auth}