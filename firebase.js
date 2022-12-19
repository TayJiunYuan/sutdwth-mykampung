import { initializeApp, getApps } from "firebase/app";
import firebase from 'firebase/compat/app';
import { getAuth,createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1v6F8vBgmUyCFdHeTnD-7wyUD_pNxMvA",
  authDomain: "mykampung-3e569.firebaseapp.com",
  projectId: "mykampung-3e569",
  storageBucket: "mykampung-3e569.appspot.com",
  messagingSenderId: "445198162123",
  appId: "1:445198162123:web:d93de29e8d31a89e3aa34e"
};

// Initialize Firebase
if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }
  
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth();
  const db = getFirestore();
  
  
  export { auth, db , firebase };