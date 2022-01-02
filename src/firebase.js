// import * as firebase from "firebase/app";
import { initializeApp } from "firebase/app";
// import "firebase/auth";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDdsWtVt_lKKcmCYTaq3mHBMxdt5ILsX6g",
  authDomain: "by-shubham.firebaseapp.com",
  projectId: "by-shubham",
  storageBucket: "by-shubham.appspot.com",
  messagingSenderId: "75946457288",
  appId: "1:75946457288:web:701f9e9c83b28c3fde0dfd",
  measurementId: "G-8WMZ4038N2",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth();

export { db, auth, createUserWithEmailAndPassword, signInWithEmailAndPassword };
