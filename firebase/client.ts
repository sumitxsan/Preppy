// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCWanp79Jk8u4-TNDfTW1kVi5L7XEGE2RA",
  authDomain: "preppy-b417a.firebaseapp.com",
  projectId: "preppy-b417a",
  storageBucket: "preppy-b417a.firebasestorage.app",
  messagingSenderId: "594366057671",
  appId: "1:594366057671:web:7b1a93ca6bbf01eb2342e2",
  measurementId: "G-EY5RDPYWJC"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig): getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);