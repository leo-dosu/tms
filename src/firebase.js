// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRhEkQ2-jNEYi1e05vwbgMY3tB3L2d8Tc",
  authDomain: "tunmisetest-4d9de.firebaseapp.com",
  projectId: "tunmisetest",
  storageBucket: "tunmisetest.appspot.com",
  messagingSenderId: "393346145204",
  appId: "1:393346145204:web:3142d163b6c193fd97f0e1"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword };
export const signUpWithEmailAndPassword = async (email, password) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log('User signed up successfully');
    } catch (error) {
      console.error('Error signing up:', error.message);
      throw error;
    }
};