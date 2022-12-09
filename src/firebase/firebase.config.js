// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcTAMbZJO9r7VbjXe05Lcuh4lf_trmlE8",
  authDomain: "sportzbud-e52ba.firebaseapp.com",
  projectId: "sportzbud-e52ba",
  storageBucket: "sportzbud-e52ba.appspot.com",
  messagingSenderId: "897588733408",
  appId: "1:897588733408:web:5ea09829d3d1226b337785"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app