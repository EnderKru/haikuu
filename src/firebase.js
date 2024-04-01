import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWmVfQq6XDrmY281hHeC7HX63_lrVnFM8",
  authDomain: "haikuu-6a6f8.firebaseapp.com",
  projectId: "haikuu-6a6f8",
  storageBucket: "haikuu-6a6f8.appspot.com",
  messagingSenderId: "1089379389358",
  appId: "1:1089379389358:web:9f0f4da3fe7d117f14423f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

