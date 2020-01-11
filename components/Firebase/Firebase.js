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
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

firebase.auth().onAuthStateChanged(user => {
  if(user) {
    console.log("login as " + user.email)
  } else {
    console.log("logout")
  }
})

export function getCurrentUser() {
  return firebase.auth().currentUser
}

export function fbLogin(email, password) {
  return firebase.auth().signInWithEmailAndPassword(email, password)
}

export function fbSignup(email, password) {
  return firebase.auth().createUserWithEmailAndPassword(email, password)
}

export function updateUserDetails(firstname, lastname) {
  var user = firebase.auth().currentUser
  return user.updateProfile({
    displayName: firstname + ' ' + lastname
  })
}

export function fbLogout() {
  return firebase.auth().signOut()
}

export function getEmail() {
  var user = getCurrentUser()
  return user ? user.email : ''
}

export function getDisplayName() {
  var user = getCurrentUser()
  return user ? user.displayName : ''
}