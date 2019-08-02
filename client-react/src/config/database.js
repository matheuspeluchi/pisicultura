import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyDIFHh1ZBp6S7E78JJmK18frl07vL9prK0",
    authDomain: "pisicadmin.firebaseapp.com",
    databaseURL: "https://pisicadmin.firebaseio.com",
    projectId: "pisicadmin",
    storageBucket: "",
    messagingSenderId: "292608497160",
    appId: "1:292608497160:web:4412452f70b7dbcd"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const provider = new firebase.auth.GoogleAuthProvider()
  export const auth = firebase.auth()
  export default firebase;