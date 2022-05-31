import firebase from "firebase";

var firebaseConfig = {
    apiKey: "AIzaSyC9rPSdrrlgtSg8EFgFLfvvWLwm8UDu2XU",
    authDomain: "clone-new-c9cb7.firebaseapp.com",
    projectId: "clone-new-c9cb7",
    storageBucket: "clone-new-c9cb7.appspot.com",
    messagingSenderId: "231393466074",
    appId: "1:231393466074:web:9f7f64f706df910945f7e3"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };