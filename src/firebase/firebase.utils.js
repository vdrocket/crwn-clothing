import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCcjGol24oY1aYvbvM6-eG-zkJvfanCIVM",
  authDomain: "crwn-db-5ce40.firebaseapp.com",
  projectId: "crwn-db-5ce40",
  storageBucket: "crwn-db-5ce40.appspot.com",
  messagingSenderId: "404635662853",
  appId: "1:404635662853:web:28bd5599ae86a0dfbcba6c",
  measurementId: "G-WSVX61N536",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
