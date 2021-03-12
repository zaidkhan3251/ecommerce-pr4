// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase';
const firebaseConfig = {
  apiKey: "AIzaSyDkeRNJ5cBLV6ZYW4q4TWPVuRNHkDvDxH8",
  authDomain: "ecommerce-pr4.firebaseapp.com",
  projectId: "ecommerce-pr4",
  storageBucket: "ecommerce-pr4.appspot.com",
  messagingSenderId: "729358747572",
  appId: "1:729358747572:web:43a7eea82d4da931aa54e1",
  measurementId: "G-3NEJ01E2YD"
};
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth = firebase.auth(); 
  export {db,auth};
