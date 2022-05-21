import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {

    apiKey: "AIzaSyDLrVhk1KsTmYl7gxF042KCIBbKK6rvMjs",
  
    authDomain: "gold-shop-40711.firebaseapp.com",
  
    projectId: "gold-shop-40711",
  
    storageBucket: "gold-shop-40711.appspot.com",
  
    messagingSenderId: "753088463165",
  
    appId: "1:753088463165:web:c62eab985f059c28444554"
  
  };
  
  

  const app = initializeApp(firebaseConfig);
  export const db = getFirestore(app);
  export const auth = getAuth(app)