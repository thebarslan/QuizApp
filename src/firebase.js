
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
  
const firebaseConfig = {
     apiKey: "AIzaSyB7gFHkZ9MMerI-Z8OgRJv3U27L1Um9cJw",
     authDomain: "cocukhaklaribilgiyarismasi.firebaseapp.com",
     projectId: "cocukhaklaribilgiyarismasi",
     storageBucket: "cocukhaklaribilgiyarismasi.appspot.com",
     messagingSenderId: "243459889807",
     appId: "1:243459889807:web:cfc2cd3a18bf19278a6efa",
     measurementId: "G-T1C62P6380"
   };
  
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
  
export default db;