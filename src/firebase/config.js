// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAs9WK3aLqZWKXUz6WDo7kGod7JiE4aXmU",
    authDomain: "techzone-f2920.firebaseapp.com",
    projectId: "techzone-f2920",
    storageBucket: "techzone-f2920.appspot.com",
    messagingSenderId: "554696818222",
    appId: "1:554696818222:web:8c9ad7c29fb676326a69bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);