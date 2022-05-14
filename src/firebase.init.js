// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBssRCzIQ6Es22Sa-niVIycsGqESeVJW1Q",
    authDomain: "doctors-portal-e9284.firebaseapp.com",
    projectId: "doctors-portal-e9284",
    storageBucket: "doctors-portal-e9284.appspot.com",
    messagingSenderId: "147849985266",
    appId: "1:147849985266:web:eb51f6a45cce64a31a246b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;