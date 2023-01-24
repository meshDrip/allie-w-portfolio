// Firebase config
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCa6flIkSIDKjrMVNIXq2X3Cj19uLQOVTU",
  authDomain: "allie-portfolio.firebaseapp.com",
  projectId: "allie-portfolio",
  storageBucket: "allie-portfolio.appspot.com",
  messagingSenderId: "177949252527",
  appId: "1:177949252527:web:9d5d20fe9cf89e32576d5a",
  measurementId: "G-XHTEV05GM6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
