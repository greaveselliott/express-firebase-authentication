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

export const addUser = (email, password, callback) => {
    
    firebase_app.auth()
        .createUserWithEmailAndPassword(email, password)
        .catch((error) => {
            callback(error);
        });
};

export const authenticate = (email, password, callback) => {
    firebase_app.auth()
        .createUserWithEmailAndPassword(email, password)
        .catch((error, user_data) => {
            callback(error, user_data.user_id);
        });
};