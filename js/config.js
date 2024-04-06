/* - - - - - - - - - - - - - - - - - 
   Configurations for the Firebase
- - - - - - - - - - - - - - - - - - -  */

// Firebase Configuration and Initialization
const firebaseConfig = {
    apiKey: "AIzaSyDRDYilGoiH5ARoi-SA4yExyNNguxZX4kM",
    authDomain: "forum-97e59.firebaseapp.com",
    projectId: "forum-97e59",
    storageBucket: "forum-97e59.appspot.com",
    messagingSenderId: "341731970037",
    appId: "1:341731970037:web:7e4a1d42ecaa5228ed6ebc",
    measurementId: "G-T829JCG7TG"
};

firebase.initializeApp(firebaseConfig);

// Make Auth and Firestore References
const auth = firebase.auth();
const db = firebase.firestore()
