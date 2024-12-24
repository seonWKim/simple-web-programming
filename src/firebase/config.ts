// Import the functions you need from the SDKs you need
import {initializeApp} from "firebase/app";
import {getFirestore} from "firebase/firestore";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBf4rvXHX1e-wz-mCsG4BVn9hlJzxe3KmI",
    authDomain: "hdtml-document.firebaseapp.com",
    projectId: "hdtml-document",
    storageBucket: "hdtml-document.firebasestorage.app",
    messagingSenderId: "2009120721",
    appId: "1:2009120721:web:19bc8728afc3b68fb4eaf0",
    measurementId: "G-5BF5B4VK1S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app)

export {app, db, auth}
