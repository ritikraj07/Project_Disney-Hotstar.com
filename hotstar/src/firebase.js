import firebase from 'firebase';
  
const firebaseConfig = {
    apiKey: "AIzaSyDf1Cl_JEfS6qV7V6EDuh49xSNVemX1yLA",
  authDomain: "hotstar-8ca1f.firebaseapp.com",
  projectId: "hotstar-8ca1f",
  storageBucket: "hotstar-8ca1f.appspot.com",
  messagingSenderId: "218110926566",
  appId: "1:218110926566:web:6d69e2f0c635d002682527"
};
  
firebase.initializeApp(firebaseConfig);
var auth = firebase.auth();
export {auth , firebase};