import firebase from "firebase/app";
import "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDRJWLnciml1UmgIZZQ8eCpWINz3UrnSbM",
  authDomain: "gm-fire.firebaseapp.com",
  databaseURL: "https://gm-fire-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "gm-fire",
  storageBucket: "gm-fire.appspot.com",
  messagingSenderId: "388601959922",
  appId: "1:388601959922:web:32b235bbc3cf6242ae476b",
  measurementId: "G-6E90LLBL26"
};


firebase.initializeApp(firebaseConfig);