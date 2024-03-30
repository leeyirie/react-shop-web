
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCcIBcilTrY0mMcX11qm4GpCS8UtR42q-8",
  authDomain: "react-shop-app-279c5.firebaseapp.com",
  projectId: "react-shop-app-279c5",
  storageBucket: "react-shop-app-279c5.appspot.com",
  messagingSenderId: "1074165861544",
  appId: "1:1074165861544:web:942db3137b7d7ed86f069d",
  measurementId: "G-CS81CJEKK4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
export { auth }