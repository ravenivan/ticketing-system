// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0RHil2v-pv5VDnznCRq651Z4rMxuIvEk",
  authDomain: "tech-ticket-system.firebaseapp.com",
  projectId: "tech-ticket-system",
  storageBucket: "tech-ticket-system.firebasestorage.app",
  messagingSenderId: "1070955646513",
  appId: "1:1070955646513:web:01e9f93b15194237e38f10"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth }