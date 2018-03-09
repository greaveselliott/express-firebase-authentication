import Firebase from 'firebase';

const firebase_config = {
    apiKey: "AIzaSyBSUoaSA-6LHknXeDL-cDPHysOIzCy2g4c",
    authDomain: "express-firebase-auth.firebaseapp.com",
    databaseURL: "https://express-firebase-auth.firebaseio.com",
    projectId: "express-firebase-auth",
    storageBucket: "express-firebase-auth.appspot.com",
    messagingSenderId: "188008523726"
};
var firebase_app = Firebase.initializeApp(firebase_config);

export const addUser = (email, password) => {   
    return firebase_app.auth().createUserWithEmailAndPassword(email, password);
};

export const authenticate = (email, password) => {
    return firebase_app.auth().signInWithEmailAndPassword(email, password);
};