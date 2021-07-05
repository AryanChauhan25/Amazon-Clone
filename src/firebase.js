import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAVqsR80s7iXT9zRaD-Ufxb5PZm5AEILu8",
  authDomain: "clone-991b1.firebaseapp.com",
  projectId: "clone-991b1",
  storageBucket: "clone-991b1.appspot.com",
  messagingSenderId: "837892255806",
  appId: "1:837892255806:web:d8880f0e7220682aafe16f",
  measurementId: "G-KMSWPWBCW8"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };