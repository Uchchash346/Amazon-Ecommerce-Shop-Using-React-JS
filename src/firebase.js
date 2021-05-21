import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCZBpuqMUEiptgpqjmPc6UYSwiyW_6CwFk",
    authDomain: "clone-77406.firebaseapp.com",
    projectId: "clone-77406",
    storageBucket: "clone-77406.appspot.com",
    messagingSenderId: "332250687177",
    appId: "1:332250687177:web:271c0c94aea9673e258f18",
    measurementId: "G-FTQ0WH9E3K"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };