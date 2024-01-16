// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"; // Add this line to import getAuth
import { getFirestore } from "firebase/firestore"; // Add this line to import getFirestore
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional.

const firebaseConfig = {
  apiKey: "AIzaSyDdAmgtWVmDglKADeSDDhVq3_YqVa3fUzQ", 
  authDomain: "autizcare-2af7b.firebaseapp.com",
  projectId: "autizcare-2af7b",
  storageBucket: "autizcare-2af7b.appspot.com",
  messagingSenderId: "537263069995",
  appId: "1:537263069995:web:c119f20001c769242c836e",
  measurementId: "G-YVC1FW42WK",
};

// Initialize Firebase 
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app); 
