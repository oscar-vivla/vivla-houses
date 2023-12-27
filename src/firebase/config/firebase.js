// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'
// import { getAnalytics } from "firebase/analytics";



// añade tu configuración de Firebase aquí
const firebaseConfig = {
  apiKey: "AIzaSyBtCv5B-H9tlTk3PHOEXnhYLu27GiYs76Y",
  authDomain: "vivla-houses.firebaseapp.com",
  projectId: "vivla-houses",
  storageBucket: "vivla-houses.appspot.com",
  messagingSenderId: "443610407104",
  appId: "1:443610407104:web:a3d23d28346ad4a9008d25"
};

// const analytics = getAnalytics(app);
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const firestore = getFirestore(app);
