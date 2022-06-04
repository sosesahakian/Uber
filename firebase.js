// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCisKeLNc28_OFkt766mHkKhUR-FtiwzXE",
  authDomain: "uber-clone-6769f.firebaseapp.com",
  projectId: "uber-clone-6769f",
  storageBucket: "uber-clone-6769f.appspot.com",
  messagingSenderId: "415223660047",
  appId: "1:415223660047:web:a04c9c34bba6594c7fad7a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth();

export { app, provider, auth}