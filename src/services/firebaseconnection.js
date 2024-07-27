import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
    apiKey: "AIzaSyAIvBMjOPL8KTp-cMm382P5mzGDmiNn89s",
    authDomain: "management-50323.firebaseapp.com",
    projectId: "management-50323",
    storageBucket: "management-50323.appspot.com",
    messagingSenderId: "128324893106",
    appId: "1:128324893106:web:6803e9e4b18afd39014cab",
    measurementId: "G-SY3S4P2N5S"
  };

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);

export {auth, db, storage};