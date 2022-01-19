// Import the functions you need from the SDKs you need
import firebase from "firebase";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAR7TQVi_rCoVdDrYaLsy_YC7OE3MxYeq0",
  authDomain: "cafe-database-5fdf3.firebaseapp.com",
  projectId: "cafe-database-5fdf3",
  storageBucket: "cafe-database-5fdf3.appspot.com",
  messagingSenderId: "379370160256",
  appId: "1:379370160256:web:a13eec0f421b7b11c0a665",
  measurementId: "G-LBHXH1C33V",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export default firebase;
