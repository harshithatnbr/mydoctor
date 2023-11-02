// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzJaqcLPEytpD0n6jSXlDMgcE5BgkWlVU",
  authDomain: "mydoctor-c2257.firebaseapp.com",
  projectId: "mydoctor-c2257",
  storageBucket: "mydoctor-c2257.appspot.com",
  messagingSenderId: "761913304523",
  appId: "1:761913304523:web:1898c39f8b6fa259ef824e"
};



// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = firebase.auth();

// Initialize Firebase Realtime Database
export const db = firebase.database();


