import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAXkC_XVCzqDbdPXbrOqbU6pGNc1ABWXqM",
  authDomain: "proyecto-final-react-js-287eb.firebaseapp.com",
  projectId: "proyecto-final-react-js-287eb",
  storageBucket: "proyecto-final-react-js-287eb.appspot.com",
  messagingSenderId: "893553066318",
  appId: "1:893553066318:web:42da37ca0e5deba2ec9e1f",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
