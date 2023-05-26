import firebase from 'firebase'

const firebaseConfig = {
  apiKey: "AIzaSyC4-91M3cABvs5T834GhjGJhPyEg-n586E",
  authDomain: "hotstarauth.firebaseapp.com",
  projectId: "hotstarauth",
  storageBucket: "hotstarauth.appspot.com",
  messagingSenderId: "102176193773",
  appId: "1:102176193773:web:25837528aee8d1ed8ca0e4"
};
  
firebase.initializeApp(firebaseConfig);
var auth = firebase.auth();
export {auth ,firebase};