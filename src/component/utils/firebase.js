// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
import { getAuth } from "firebase/auth";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDni385expb828f6AkXFajiGYbZukboEnA",
  authDomain: "mymoviegpt.firebaseapp.com",
  projectId: "mymoviegpt",
  storageBucket: "mymoviegpt.appspot.com",
  messagingSenderId: "476272815772",
  appId: "1:476272815772:web:781d255f8935c508ccc759",
  measurementId: "G-BSN6DR938B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();