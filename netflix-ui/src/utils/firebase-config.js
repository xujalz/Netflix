
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAi3oj7tXyYoRyjBgS6kFfcHNdFamTAj1c",
  authDomain: "react-netflix-clone-a1a02.firebaseapp.com",
  projectId: "react-netflix-clone-a1a02",
  storageBucket: "react-netflix-clone-a1a02.appspot.com",
  messagingSenderId: "91785558711",
  appId: "1:91785558711:web:282c5031687e1d08c9ab32",
  measurementId: "G-VENQTHM2YH"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);