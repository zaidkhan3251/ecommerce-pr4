// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyC_HYkbFvliDMdK5ZwoA_jQIFYq7ijiWI0",
    authDomain: "e-clone-pr3.firebaseapp.com",
    projectId: "e-clone-pr3",
    storageBucket: "e-clone-pr3.appspot.com",
    messagingSenderId: "240365508459",
    appId: "1:240365508459:web:bde2c134fd7544cfb01e2e",
    measurementId: "G-LLNST4PJQ1"
  };
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth = firebase.auth(); 
  export {db,auth};
