// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJua2UY63jmK6OnzYg2Z7U-Qn7m4kG5-k",
  authDomain: "popj-2af49.firebaseapp.com",
  projectId: "popj-2af49",
  storageBucket: "popj-2af49.appspot.com",
  messagingSenderId: "842711373664",
  appId: "1:842711373664:web:1cd6b90de6bcaab4b67005",
  measurementId: "G-Q6XKRPLYM3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
