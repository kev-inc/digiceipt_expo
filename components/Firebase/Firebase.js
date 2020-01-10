import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBKsvgv_C_idYx0rDIt3N8qLMs3RaOH7yY",
    authDomain: "digiceiptsg.firebaseapp.com",
    databaseURL: "https://digiceiptsg.firebaseio.com",
    projectId: "digiceiptsg",
    storageBucket: "digiceiptsg.appspot.com",
    messagingSenderId: "221702261066",
    appId: "1:221702261066:web:71cb01f78dd543645f99b3",
    measurementId: "G-PHBYQ3GC20"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export function fbLogin(email, password) {
    return firebase.auth().signInWithEmailAndPassword(email, password)
  }

  export function fbSignup(email, password) {
    return firebase.auth().createUserWithEmailAndPassword(email, password)
  }