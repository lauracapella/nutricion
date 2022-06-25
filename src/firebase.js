// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARg-b9uEntGcVo2EQT2hx9vVBBCq5uGzE",
  authDomain: "react-fb-auth-405bd.firebaseapp.com",
  projectId: "react-fb-auth-405bd",
  storageBucket: "react-fb-auth-405bd.appspot.com",
  messagingSenderId: "880821194828",
  appId: "1:880821194828:web:7654db4500473e92c2e4e9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)